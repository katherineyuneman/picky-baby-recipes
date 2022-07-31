class FoodsController < ApplicationController

    def index
        food_list = Food.sorted_food
        render json: food_list, status: :ok
    end

    def create
        new_food = current_user.foods.create(food_params)
        if new_food.valid?
            render json: new_food, status: :created
        else render json: {errors: new_food.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def current_user
        @current_user = User.find_by(id: session[:user_id])
    end

    def food_params
        params.require(:food).permit(:name, :food_type, :age, :nutrition_rating, :common_allergen, :full_desc, :image_url, :user_id)
    end

end