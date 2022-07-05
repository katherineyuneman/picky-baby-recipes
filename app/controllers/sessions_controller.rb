class SessionsController < ApplicationController

    #login
    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            puts session
            render json: user, status: :ok
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    #logout
    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            session.delete(:user_id)
            head :no_content
        else
            render json: {errors: ["User should be logged in"]}, status: :unauthorized
        end
        # session.clear
    end

    private
    def login_params
        
    end
end
