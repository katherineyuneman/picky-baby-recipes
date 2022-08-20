class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    before_action :find_recipe, only: [:show, :update, :destroy]

    def index
        if params[:food_id]
            food = Food.find_by_id(params[:food_id
        ])
            ingredients_with_food = food.ingredients
            recipe_ids = ingredients_with_food.map { | ingredient | ingredient.recipe_id}
            ingredients_with_recipes = ingredients_with_food.includes(:recipe).to_a
            render json: ingredients_with_recipes , include: ['recipe']
        else
            user_recipes = current_user.recipes.sorted_recipes.includes(:ingredients, :foods)
            render json: user_recipes, include: ['ingredients', 'ingredients.food']
        end
    end

    def create
        new_recipe = current_user.recipes.create!(recipe_params)
        render json: new_recipe, status: :created
    end

    def show
        @recipe
        serialize_recipe
    end
    
    def destroy
        @recipe
        @recipe.destroy
        head :no_content
    end

    def update
            @recipe
            @recipe.update!(update_recipe_params)
            serialize_recipe
    end

    private

    def current_user
        @current_user = User.find_by(id: session[:user_id])
    end

    def find_recipe
        @recipe = current_user.recipes.includes(:ingredients, :foods).find(params[:id])
    end

    def serialize_recipe
        render json: @recipe, include: ['ingredients', 'ingredients.food']
    end

    def recipe_params
        params.require(:full_recipe).permit(:title, :directions, :source, ingredients_attributes: [:amount, :measurement, :food_id])
    end

    def update_recipe_params
        params.require(:recipe).permit(
            :id, :title, :directions, :source, ingredients_attributes: [:id, :amount, :measurement, :food_id])
    end

    def render_not_found_response
        render json: { error: "Resource not found with id #{params[:id]}." }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end