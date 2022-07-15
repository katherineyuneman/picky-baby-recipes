class RecipesController < ApplicationController
    # accepts_nested_attributes_for :ingredients

    def index
        user_recipes = current_user.recipes
        render json: user_recipes, include: ['ingredients', 'ingredients.food']
    end
    
    def create
        new_recipe = current_user.recipes.create(recipe_params)
        render json: new_recipe, status: :created
    end

    def destroy
        
    end


    def current_user
        @current_user = User.find_by(id: session[:user_id])
    end

    private
    def recipe_params
        params.require(:full_recipe).permit(:title, :directions, :source, ingredients_attributes: [:amount, :measurement, :food_id])
    end
end