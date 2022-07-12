class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :food_type, :age, :nutrition_rating, :full_desc, :image_url, :user_id, :common_allergen



  # t.string "name"
  #   t.string "food_type"
  #   t.string "age"
  #   t.integer "nutrition_rating"
  #   t.boolean "common_allergen"
  #   t.text "full_desc"
  #   t.string "image_url"
  #   t.bigint "user_id", null: false
  #   t.datetime "created_at", precision: 6, null: false
  #   t.datetime "updated_at", precision: 6, null: false
  #   t.index ["user_id"], name: "index_foods_on_user_id"

  has_many :ingredients, include_nested_associations: true
end