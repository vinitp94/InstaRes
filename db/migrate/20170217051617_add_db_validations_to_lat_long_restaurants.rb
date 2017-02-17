class AddDbValidationsToLatLongRestaurants < ActiveRecord::Migration[5.0]
  def change
    remove_column :restaurants, :lat
    remove_column :restaurants, :long
    add_column :restaurants, :lat, :float, null: false
    add_column :restaurants, :long, :float, null: false
  end
end
