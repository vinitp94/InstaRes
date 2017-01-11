class Restaurant < ApplicationRecord
  validates :name, :address, :city, :state, :zip_code, :category,
    :description, :price, :image_urls, :owner_id, presence: true
  validates :price, numericality: { greater_than: 0, less_than: 6 }

  belongs_to(
    :owner,
    class_name: :User,
    foreign_key: :owner_id,
    primary_key: :id
  )
end
