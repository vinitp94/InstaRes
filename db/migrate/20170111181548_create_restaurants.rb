class CreateRestaurants < ActiveRecord::Migration[5.0]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip_code, null: false
      t.string :category, null: false
      t.text :description, null: false
      t.integer :price, null: false
      t.string :phone_num
      t.string :website_url
      t.string :image_urls, null: false, array: true, default: []
      t.integer :owner_id, null: false, index: true

      t.timestamps
    end
  end
end
