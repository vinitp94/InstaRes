class Restaurant < ApplicationRecord
  CATEGORIES = [
    'American',
    'British',
    'Caribbean',
    'Chinese',
    'French',
    'Greek',
    'Indian',
    'Italian',
    'Japanese',
    'Mediterranean',
    'Mexican',
    'Moroccan',
    'Spanish',
    'Thai',
    'Turkish',
    'Vietnamese'
  ]

  validates :name, :address, :city, :state, :zip_code, :category,
    :description, :price, :image_urls, :owner_id, presence: true
  validates :price, numericality: { greater_than: 0, less_than: 5 }
  validates :phone_num, length: { is: 10 }, allow_nil: true
  validates :category, inclusion: { in: CATEGORIES }

  belongs_to(
    :owner,
    class_name: :User,
    foreign_key: :owner_id,
    primary_key: :id
  )
end
