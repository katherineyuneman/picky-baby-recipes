require 'rails_helper'

RSpec.describe Food, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  subject { Food.new(name: "Chicken Thighs", food_type: "vegetable", age: "6 months", nutrition_rating: 6, full_desc: "Much tastier and easier to eat.", user_id: 3 )}
  # it "is valid with valid attributes" do
  #   expect(subject).to be_valid
  # end

  it "is not valid without a name" do
    subject.name=nil
    expect(subject).to_not be_valid
  end
  it "is not valid without a food_type" do
    subject.food_type=nil
    expect(subject).to_not be_valid
  end
  it "should be a valid number between 1 and 10" do
    should validate_numericality_of(:nutrition_rating).
    is_less_than_or_equal_to(10).is_greater_than_or_equal_to(1)
  end

  # describe 'validations' do
  #     it { is_expected.validate_numericality_of(:nutrition_rating, :greater_than_or_equal_to => 1)}
  #     it { is_expected.validate_numericality_of(:nutrition_rating, :less_than_or_equal_to => 10)}
  # end
# it "is not valid without a phone number"    
# it "is not valid if the phone number is not 10 chars"   
# it "is not valid if the phone number is not all digits"
end
