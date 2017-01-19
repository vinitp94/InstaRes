class Api::ReservationsController < ApplicationController
  def create
    debugger
    @reservation = Reservation.new(reservation_params)

    if @reservation.save
      render :show
    else
      render json: @reservation.errors.full_messages, status: 422
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])

    if @reservation.destroy
      render :show
    else
      render json: ['Not found'], status: 404
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:slot, :party_size, :user_id,
      :restaurant_id)
  end
end
