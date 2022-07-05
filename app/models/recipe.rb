class Recipe < ApplicationRecord
  belongs_to :user
  has_many :ingredients
  has_many :foods, through: :ingredients
end
