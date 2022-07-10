class FoodsController < ApplicationController

    def index
        food_list = Food.all
        render json: food_list, include: ['ingredients'] status: :ok
    end

end