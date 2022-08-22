class Food < ApplicationRecord
  belongs_to :user
  has_many :ingredients
  has_many :recipes, through: :ingredients
  before_save :capitalize_food
  scope :sorted_food, -> {order(:name)}

  validates :name, presence: true
  validates :food_type, presence: true
  validates :age, presence: true
  validates :nutrition_rating, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 10 }
  validates :full_desc, presence: true


  def capitalize_food
    self.name.capitalize()
  end
  
end
