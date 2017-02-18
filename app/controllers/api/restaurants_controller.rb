class Api::RestaurantsController < ApplicationController
  def index
    search_lat, search_long = Geocoder.coordinates(params[:address])

    @restaurants = Restaurant.where('lat > ? AND lat < ? AND long > ? AND long < ?',
      search_lat - 0.05, search_lat + 0.05, search_long - 0.05, search_long + 0.05)

    if @restaurants == []
      render json: ['No restaurants found'], status: 404
    else
      render :index
    end
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)

    if @restaurant.address && @restaurant.city && @restaurant.state && @restaurant.zip_code
      coords = Geocoder.coordinates("#{@restaurant.address},#{@restaurant.city},
        #{@restaurant.state} #{@restaurant.zip_code.to_s}")
      @restaurant.lat = coords[0]
      @restaurant.long = coords[1]
    end

    if @restaurant.save
      render :show
    else
      render json: @restaurant.errors.full_messages, status: 422
    end
  end

  def update
    @restaurant = Restaurant.find(params[:id])

    @restaurant.update(restaurant_params)

    if @restaurant.address && @restaurant.city && @restaurant.state && @restaurant.zip_code
      coords = Geocoder.coordinates("#{@restaurant.address},#{@restaurant.city},
        #{@restaurant.state} #{@restaurant.zip_code.to_s}")
      @restaurant.lat = coords[0]
      @restaurant.long = coords[1]
    end

    if params[:restaurant][:image_urls] == 'empty'
      @restaurant[:image_urls] = []
    end

    if @restaurant.save
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
      :zip_code, :category, :description, :price, :phone_num, :website_url,
      {image_urls: []}, :owner_id)
  end
end
