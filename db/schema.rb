# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170119004844) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.integer  "restaurant_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["restaurant_id"], name: "index_favorites_on_restaurant_id", using: :btree
    t.index ["user_id"], name: "index_favorites_on_user_id", using: :btree
  end

  create_table "reservations", force: :cascade do |t|
    t.datetime "slot",          null: false
    t.integer  "party_size",    null: false
    t.integer  "user_id",       null: false
    t.integer  "restaurant_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["restaurant_id"], name: "index_reservations_on_restaurant_id", using: :btree
    t.index ["user_id"], name: "index_reservations_on_user_id", using: :btree
  end

  create_table "restaurants", force: :cascade do |t|
    t.string   "name",                     null: false
    t.string   "address",                  null: false
    t.string   "city",                     null: false
    t.string   "state",                    null: false
    t.integer  "zip_code",                 null: false
    t.string   "category",                 null: false
    t.text     "description",              null: false
    t.integer  "price",                    null: false
    t.string   "phone_num"
    t.string   "website_url"
    t.string   "image_urls",  default: [], null: false, array: true
    t.integer  "owner_id",                 null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.index ["owner_id"], name: "index_restaurants_on_owner_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "rating",        null: false
    t.text     "body",          null: false
    t.integer  "author_id",     null: false
    t.integer  "restaurant_id", null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["author_id"], name: "index_reviews_on_author_id", using: :btree
    t.index ["restaurant_id"], name: "index_reviews_on_restaurant_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
