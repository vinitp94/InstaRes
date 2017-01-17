class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])

    if @restaurant.destroy
      render :show
    else
      render json: ['Not found'], status: 404
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :author_id, :restaurant_id)
  end
end
