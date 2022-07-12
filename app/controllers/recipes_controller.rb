class RecipesController < ApplicationController

    def index
        user_recipes = current_user.recipes
        render json: user_recipes, include: ['ingredients', 'ingredients.food']
    end
    
    def create
        
    end

    def destroy
        
    end


    def current_user
        @current_user = User.find_by(id: session[:user_id])
    end
end