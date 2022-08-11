class FoodsController < ApplicationController

    def index
        # food_list = current_user.foods.sorted_food
         # byebug
        user_food = current_user.foods.sorted_food
        admin_food = admin.foods.sorted_food
        combined_food = (user_food | admin_food)
        combined_food_sorted = combined_food
        render json: combined_food_sorted, status: :ok
    end

    def create
        new_food = current_user.foods.create(food_params)
        if new_food.valid?
            render json: new_food, status: :created
        else render json: {errors: new_food.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        food = Food.find_by_id(params[:id])
            if food
              render json: food, status: :ok
            else
              render json: { error: "Food not found."}, status: :not_found
            end
    end

    def update
        food = current_user.foods.find_by_id(params[:id])
        if food
          food.update(food_params)
          render json: food
        else
          render json: { error: "Food not Found" }, status: :not_found
        end
end

    private

    def current_user
        @current_user = User.find_by(id: session[:user_id])
    end

    def admin
        @admin_user = User.find_by(id: 1)
    end

    def food_params
        params.require(:food).permit(:name, :food_type, :age, :nutrition_rating, :common_allergen, :full_desc, :image_url, :user_id)
    end

end