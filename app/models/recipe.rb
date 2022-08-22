class Recipe < ApplicationRecord
  belongs_to :user
  has_many :ingredients, dependent: :destroy
  has_many :foods, through: :ingredients
  accepts_nested_attributes_for :ingredients
  validates :title, presence: true
  validates :directions, presence: true

  def self.sorted_recipes
    self.order(:title)
  end

  # def self.most_ingredients
  #   self.preload(:ingredients).all.max_by{ |r| r.ingredients.length}
  # end

end