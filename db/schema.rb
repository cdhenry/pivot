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

ActiveRecord::Schema.define(version: 2018_05_26_180406) do

  create_table "careers", force: :cascade do |t|
    t.integer "job_zone_id"
    t.string "title"
    t.string "href"
    t.boolean "bright_outlook"
    t.boolean "green"
    t.boolean "apprenticeship"
    t.string "aka"
    t.string "what_they_do"
    t.string "on_the_job"
    t.index ["job_zone_id"], name: "index_careers_on_job_zone_id"
  end

  create_table "comparisons", force: :cascade do |t|
  end

  create_table "job_zones", force: :cascade do |t|
    t.string "title"
    t.string "experience"
    t.string "education"
    t.string "job_training"
  end

  create_table "predictors", force: :cascade do |t|
    t.integer "career_id"
    t.integer "comparison_id"
    t.integer "engagement"
    t.integer "altruism"
    t.integer "skill"
    t.integer "support"
    t.integer "basic_needs"
    t.integer "balance"
    t.index ["career_id"], name: "index_predictors_on_career_id"
    t.index ["comparison_id"], name: "index_predictors_on_comparison_id"
  end

end
