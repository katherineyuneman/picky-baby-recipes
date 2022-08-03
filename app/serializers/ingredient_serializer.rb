class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :amount, :measurement, :food_id

  belongs_to :food
  belongs_to :recipe
end
