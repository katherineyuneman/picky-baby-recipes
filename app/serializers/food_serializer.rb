class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :food_type, :age, :nutrition_rating, :full_desc, :image_url, :user_id, :common_allergen

  has_many :ingredients, include_nested_associations: true
end