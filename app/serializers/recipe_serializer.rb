class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :directions, :source

  has_many :ingredients
end

