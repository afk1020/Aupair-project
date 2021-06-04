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

ActiveRecord::Schema.define(version: 2021_06_02_214416) do

  create_table "aupairs", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.integer "years_of_experience"
    t.string "nationality"
  end

  create_table "families", force: :cascade do |t|
    t.string "fullname"
    t.string "aupair_name"
    t.integer "salary"
    t.string "start"
    t.integer "number_of_children"
    t.boolean "isApproved"
  end

  create_table "favorites", force: :cascade do |t|
    t.integer "aupair_id"
    t.integer "family_id"
  end

  create_table "listings", force: :cascade do |t|
    t.integer "aupair_id"
    t.integer "family_id"
  end

end
