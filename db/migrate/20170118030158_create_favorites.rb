class CreateFavorites < ActiveRecord::Migration[5.0]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false, index: true
      t.integer :restaurant_id, null: false, index: true

      t.timestamps
    end
  end
end
