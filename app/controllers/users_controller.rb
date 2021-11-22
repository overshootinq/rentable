class UsersController < ApplicationController
    before_action :authorize, only: [:show]

    def create
       user = User.create(user_params)
       if user.valid?
            session[:user_id]||=user.id 
            render json: user, status: :created
        else
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end 
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    #rescue in create and find
    def index
    end

    def loggingin

    end

    def logout
        
    end

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? user_id
    end

    def user_params
        params.permit(:username, :user, :password, :password_confirmation)
    end

end

# Create a UsersController with a create method that responds to a POST /signup request. It should: create a new user; save their hashed password in the database; save the user's ID in the session hash; and return the user object in the JSON response.

# Add a show method to your UsersController that responds to a GET /me request. If the user is authenticated, return the user object in the JSON response.

# Create a Sessions controller with a create action for logging in that responds to a POST /login request, and a destroy action for logging out that responds to a DELETE /logout request.