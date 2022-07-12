class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :amount, :measurement

  belongs_to :food
end
