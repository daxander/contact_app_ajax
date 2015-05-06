class Contact < ActiveRecord::Base
  has_many :phone_numbers
  has_many :emails
  validates :name, presence: true

end