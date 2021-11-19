class HousesController < ApplicationController
    def index
        render json: House.all
    end
    
    def show
        render json: House.find(params[:id])
    end
end
