class Ingredient < ApplicationRecord
  belongs_to :food
  belongs_to :recipe

  validates :food_id, presence: true
  validates :amount, presence: true, numericality: true
  validates :measurement, presence: true

end
