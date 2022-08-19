class Food < ApplicationRecord
  belongs_to :user
  has_many :ingredients
  has_many :recipes, through: :ingredients
  before_save :capitalize_food

  validates :name, presence: true, uniqueness: true
  validates :food_type, presence: true
  validates :age, presence: true
  validates :nutrition_rating, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 10 }
  # validates :common_allergen, presence: true
  validates :full_desc, presence: true




  def self.sorted_food
    self.order(:name)
  end

  def sorted_food_instance
    self.order(:name)
  end

  def capitalize_food
    self.capitalize()
end
  

end
