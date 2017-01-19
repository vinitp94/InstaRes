class CreateReservations < ActiveRecord::Migration[5.0]
  def change
    create_table :reservations do |t|
      t.datetime :slot, null: false
      t.integer :party_size, null: false
      t.integer :user_id, null: false, index: true
      t.integer :restaurant_id, null: false, index: true

      t.timestamps
    end
  end
end
