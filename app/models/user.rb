class User < ApplicationRecord
    has_secure_password
    validates :email, :password, :password_confirmation, presence: true
    validates :email, uniqueness: true
    

    has_many :recipes
    has_many :foods

end