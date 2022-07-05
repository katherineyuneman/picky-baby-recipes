class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :directions
      t.string :source
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
