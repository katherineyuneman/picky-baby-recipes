class SessionsController < ApplicationController

    #login
    def create
        user = User.find_by_email(params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {errors: user.errors.full_messages}, status: :unauthorized
        end
    end

    #logout
    def destroy
        session.clear
    end

    private
    def login_params
        
    end
end
