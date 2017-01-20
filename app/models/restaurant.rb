class Restaurant < ApplicationRecord
  CATEGORIES = [
    'American', 'British', 'Caribbean', 'Chinese', 'French', 'Greek',
    'Indian', 'Italian', 'Japanese', 'Mediterranean', 'Mexican',
    'Moroccan', 'Spanish', 'Thai', 'Turkish', 'Vietnamese'
  ]

  STATES = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI',
    'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI',
    'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC',
    'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
    'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ]

  validates :name, :address, :city, :state, :zip_code, :category,
    :description, :price, :image_urls, :owner_id, presence: true
  validates :price, numericality: { greater_than: 0, less_than: 6 }
  validates :phone_num, length: { is: 10 }, allow_blank: true
  validates :state, inclusion: { in: STATES }
  validates :category, inclusion: { in: CATEGORIES }

  belongs_to(
    :owner,
    class_name: :User,
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many(
    :reviews,
    class_name: :Review,
    foreign_key: :restaurant_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :reservations,
    class_name: :Reservation,
    foreign_key: :restaurant_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :favorites,
    class_name: :Favorite,
    foreign_key: :restaurant_id,
    primary_key: :id,
    dependent: :destroy
  )
end
