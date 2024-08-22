class User < ApplicationRecord
  has_secure_password
  
  has_many :blogs, dependent: :destroy
  has_many :reviews, dependent: :destroy

  validates :email, presence: true, uniqueness: true
  
  before_save { self.email = email.downcase }

  def full_name
    "#{first_name} #{last_name}"
  end
end
