class Recipe < ApplicationRecord
  belongs_to :user
  has_many :ingredients, dependent: :destroy
  has_many :foods, through: :ingredients
  accepts_nested_attributes_for :ingredients

  def self.sorted_recipes
    self.order(:title)
  end

  # def format_title

  # end

end
