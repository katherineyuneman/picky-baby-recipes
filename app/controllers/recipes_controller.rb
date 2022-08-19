class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        new_recipe = current_user.recipes.create!(recipe_params)
        render json: new_recipe, status: :created
    end

    def show
        recipe = current_user.recipes.includes(:ingredients, :foods).find_by_id(params[:id])
        render json: recipe, include: ['ingredients', 'ingredients.food']
            # if recipe
            #   render json: recipe, include: ['ingredients', 'ingredients.food']
            # else
            #   render json: { error: "Recipe not found" }, status: :not_found
            # end
    end
    
    def index
        user_recipes = current_user.recipes.sorted_recipes.includes(:ingredients, :foods)
        render json: user_recipes, include: ['ingredients', 'ingredients.food']
    end
    
    

    def destroy
        recipe = current_user.recipes.find_by_id(params[:id])
        recipe.destroy
        head :no_content
    end

    def update
            recipe = current_user.recipes.find_by_id(params[:id])
            recipe.update!(update_recipe_params)
            render json: recipe, include: ['ingredients', 'ingredients.food']
    end

    private

    def current_user
        @current_user = User.find_by(id: session[:user_id])
    end

    def recipe_params
        params.require(:full_recipe).permit(:title, :directions, :source, ingredients_attributes: [:amount, :measurement, :food_id])
    end

    def update_recipe_params
        params.require(:recipe).permit(
            :id, :title, :directions, :source, ingredients_attributes: [:id, :amount, :measurement, :food_id])
    end

    def render_not_found_response
        render json: { error: "Item not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end