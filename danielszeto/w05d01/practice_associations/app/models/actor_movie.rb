class ActorMovie < ActiveRecord::Base
	belongs_to :actor
	belongs_to :movie

end
