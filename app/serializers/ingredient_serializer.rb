class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :amount, :measurement, :food_id

  belongs_to :food
end
