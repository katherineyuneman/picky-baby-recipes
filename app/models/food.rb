class Food < ApplicationRecord
  belongs_to :user
  has_many :ingredients
  has_many :recipes, through: :ingredients

  validates :name, presence: true, uniqueness: true
  validates :food_type, presence: true
  validates :age, presence: true
  validates :nutrition_rating, presence: true
  validates :common_allergen, presence: true
  validates :full_desc, presence: true

end
