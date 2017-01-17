class Review < ApplicationRecord
  validates :rating, :body, :author_id, :restaurant_id, presence: true
  validates :rating, numericality: { greater_than: 0, less_than: 6 }

  belongs_to(
    :author,
    class_name: :User,
    foreign_key: :author_id,
    primary_key: :id
  )

  belongs_to(
    :restaurant,
    class_name: :Restaurant,
    foreign_key: :restaurant_id,
    primary_key: :id
  )
end
