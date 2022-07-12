class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :title, :directions, :source

  has_many :ingredients, include_nested_associations: true
end

