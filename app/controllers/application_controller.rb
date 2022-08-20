class ApplicationController < ActionController::API
  include ActionController::Cookies

  # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  

  # def render_not_found_response
  #   render json: { error: "Resource not found with id #{params[:id]}." }, status: :not_found
  # end

  
end
