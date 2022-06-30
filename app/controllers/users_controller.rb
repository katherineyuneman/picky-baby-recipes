
class UsersController < ApplicationController

    #signup
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user
        else  
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
        #Create new user AND login
    end

    #/me
    def show
        user = User.find_by_id(session[:user_id])
        if user
            render json: user
        else
            render json: {errors: "Not authorized"}, status: :unauthorized
        #Get current user & render in json
        end
    end

    private

    def user_params
        params.permit(:email, :password, :password_confirmation, :first_name, :last_name)
    end

end