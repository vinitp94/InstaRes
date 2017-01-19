class Reservation < ApplicationRecord
  validates :slot, :party_size, :user_id, :restaurant_id, presence: true
  validates :party_size, numericality: { less_than: 9 }

  belongs_to(
    :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id
  )

  belongs_to(
    :restaurant,
    class_name: :Restaurant,
    foreign_key: :restaurant_id,
    class_name: :id
  )
end
