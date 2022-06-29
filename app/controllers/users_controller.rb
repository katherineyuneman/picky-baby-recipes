
class UsersController < ApplicationController

    #signup
    def create
        new_user = User.create(user_params)
        byebug
        render json: :new_user
        #Create new user & login
    end

    #/me
    def show
        current_user = User.find_by_id(id: session[:user_id])
        render json: :current_user
        #Get current user & render in json
    end

    private

    def user_params
        params.require(:newUser).permit(:email, :password, :password_confirmation)
    end

end