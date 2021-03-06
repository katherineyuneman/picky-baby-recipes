class IngredientsController < ApplicationController

    def create
        recipe = find_recipe
        new_ingredient = recipe.ingredients.create(ingredient_params)
        render json: new_ingredient, status: :created
    end

    private
    def find_recipe
        Recipe.find_by(id: params[:recipe_id])
    end

    # def ingredient_params
    #     params.require(:ingredient).permit(ingredient: [:amount, :measurement, :food_id, :recipe_id])
    # end


    def ingredient_params
        params.require(:full_recipe).permit(
            :title, :directions, :source, ingredients_attributes: [:amount, :measurement, :food_id])
    end

   
end