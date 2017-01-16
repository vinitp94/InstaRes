class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :rating, null: false
      t.text :body, null: false
      t.integer :author_id, null: false, index: true
      t.integer :restaurant_id, null: false, index: true

      t.timestamps
    end
  end
end
