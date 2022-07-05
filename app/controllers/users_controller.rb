
class UsersController < ApplicationController

    #signup
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else  
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
        #Create new user AND login
    end

    #/me
    def show
        @current_user = User.find_by(id: session[:user_id])
        if @current_user = @current_user || User.find_by(id: session[:user_id])
            render json: @current_user
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