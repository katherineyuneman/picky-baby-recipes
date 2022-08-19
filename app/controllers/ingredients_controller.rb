class IngredientsController < ApplicationController

    # def create
    #     recipe = find_recipe
    #     new_ingredient = recipe.ingredients.create(ingredient_params)
    #     if new_ingredient.valid?
    #         render json: new_ingredient, status: :created
    #     else 
    #         render json: {errors: new_ingredient.errors.full_messages}, status: :unprocessable_entity
    # end

    def index
        recipe = find_recipe
        ingredients = recipe.ingredients
        render json: ingredients
    end

    def destroy
        
    end



    private
    def find_recipe
        Recipe.find_by(id: params[:recipe_id])
    end

    def ingredient_params
        params.require(:full_recipe).permit(
            :title, :directions, :source, ingredients_attributes: [:amount, :measurement, :food_id])
    end

   
end