class Actor < ActiveRecord::Base
  has_many :actor_movies
  has_many :movies, through: :actor_movies
  validates :first_name, :last_name, presence: true
end
