class RecipesController < ApplicationController

    def index
        user_recipes = current_user.recipes
        render json: user_recipes, include: ['ingredients', 'ingredients.food']
    end
    
    def create
        new_recipe = current_user.recipes.create(recipe_params)
        if new_recipe.valid?
            render json: new_recipe, status: :created
        else
        render json: {errors: new_recipe.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        recipe = current_user.recipes.find_by_id(params[:id])
        if recipe
            recipe.destroy
            head :no_content
        else
            render json: {errors: ["This recipe no longer exists"]}, status: :unauthorized
        end
    end

    def update
        byebug
            recipe = current_user.recipes.find_by_id(params[:id])
            if recipe
              recipe.update(update_recipe_params)
              render json: recipe
            else
              render json: { error: "Recipe not Found" }, status: :not_found
            end
    end


    private

    def current_user
        @current_user = User.find_by(id: session[:user_id])
    end

    def recipe_params
        params.require(:full_recipe).permit(:title, :directions, :source, ingredients_attributes: [:amount, :measurement, :food_id])
    end

    def update_recipe_params
        params.require(:recipe).permit(:id, :title, :directions, :source, ingredients_attributes: [:amount, :measurement, :food_id, {:name, :food_type, :age, :nutrition_rating,:common_allergen, :full_desc, :image_url, :user_id}])
    end

end