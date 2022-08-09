class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :food_type, :age, :nutrition_rating, :full_desc, :image_url, :common_allergen, :user_id

  # has_many :ingredients, include_nested_associations: true
end