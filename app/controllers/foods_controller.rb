class FoodsController < ApplicationController
    before_action :find_food, only: [:show, :update, :destroy]
    before_action :authorize

    def index
        if params[:search]     
            searchParam = (params[:search].capitalize)
            searched_food = multiple_user_foods.where("name LIKE ?", searchParam + "%")
            render json: searched_food, status: :ok
        else
            user_food = current_user.foods.sorted_food
            admin_food = admin.foods.sorted_food
            combined_food = (user_food | admin_food).sort_by{|food| food[:name]}
            render json: combined_food, status: :ok
        end
    end

    def show
        food = multiple_user_foods.find(params[:id])
        render json: food, status: :ok
    end

    def create
        new_food = current_user.foods.create(food_params)
        if new_food.valid?
            render json: new_food, status: :created
        else render json: {errors: new_food.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        food = current_user.foods.find_by_id(params[:id])
        if food
          food.update(food_params)
          render json: food
        else
          render json: { error: "You are not authorized to edit this food" }, status: :unauthorized
        end
end

    private

    def current_user
        @current_user = User.find_by(id: session[:user_id])
    end

    def admin
        @admin_user = User.find_by(id: 1)
    end
    
    def multiple_user_foods
        @users_food = Food.where(user_id: [1, session[:user_id]])
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end

    def find_food
        @food = Food.find(params[:id])
    end

    def food_params
        params.require(:food).permit(:name, :food_type, :age, :nutrition_rating, :common_allergen, :full_desc, :image_url, :user_id)
    end

    def search_params
        params.permit(:search, :food)
    end
end
