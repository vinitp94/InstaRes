class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite.save
      render :show
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])

    if @favorite.destroy
      render :show
    else
      render json: ['Not found'], status: 404
    end
  end

  private

  def favorite_params
    params.require(:favorite).permit(:user_id, :restaurant_id)
  end
end
