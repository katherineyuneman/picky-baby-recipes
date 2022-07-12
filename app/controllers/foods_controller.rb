class FoodsController < ApplicationController

    def index
        food_list = Food.all
        render json: food_list, status: :ok
    end

    def create
        
    end

end