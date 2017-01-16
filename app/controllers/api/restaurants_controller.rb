class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all

    if @restaurants == []
      render json: ['No restaurants found'];
    else
      render :index
    end
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)

    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def update
    @restaurant = Restaurant.find(params[:id])

    if @restaurant.update(restaurant_params)
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def show
    @restaurant = Restaurant.find(params[:id])

    if @restaurant
      render :show
    else
      render json: ['Not found'], status: 404
    end

  end

  def destroy
    @restaurant = Restaurant.find(params[:id])

    if @restaurant.destroy
      render :show
    else
      render json: ['Not found'], status: 404
    end
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :city, :state,
      :zip_code, :category, :description, :price, :phone_num, :website_url, {image_urls: []}, :owner_id)
  end
end
