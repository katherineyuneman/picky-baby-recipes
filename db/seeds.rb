# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(email: 'smith@johns.com', password: '1234', password_confirmation: '1234', first_name: 'John', last_name: 'Smith' )
user2 = User.create(email: 'harry@potter.com', password: '1234', password_confirmation: '1234', first_name: 'Harry', last_name: 'Potter' )

food1 = Food.create(name: 'Avocado', food_type: 'fruit', common_allergen: 0, user_id: user1.id, full_desc: 'Avocado can be introduced as soon as baby is ready to start solids, which is generally around 6 months of age.')
food2 = Food.create(name: 'Cheese', food_type: 'dairy', common_allergen: 1, user_id: user2.id, full_desc: 'Cheeses that are pasteurized (not raw) and low in sodium may be introduced as soon as baby is ready to start solids, which is usually around 6 months of age.')

recipe1 = Recipe.create(title: "Avocado Toast", directions: "Put the avocado on the toast", user_id: user1.id)
ingredient1 = Ingredient.create(amount: 1, measurement: "whole", food_id: food1.id, recipe_id: recipe1.id)
