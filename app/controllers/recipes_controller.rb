class RecipesController < ApplicationController

    def index
        render json: Recipe.all
    end
    
    def create
        
    end

    def destroy
        
    end

end
