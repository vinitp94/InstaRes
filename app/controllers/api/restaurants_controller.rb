class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)

    if @restaurant.save
      render 'api/restaurants/show'
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def update
    @restaurant = Restaurant.find(params[:id])

    if @restaurant.update(restaurant_params)
      render 'api/restaurants/show'
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render 'api/restaurants/show'
  end

  def destroy
    @restaurant = Restaurant.find(params[:id])

    if @restaurant.destroy
      render 'api/restaurants/show'
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :city, :state,
      :zip_code, :category, :description, :price, :phone_num, :website_url,
      :image_urls)
  end
end
