class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.string :food_type
      t.string :age
      t.integer :nutrition_rating
      t.boolean :common_allergen
      t.text :full_desc
      t.string :image_url
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
