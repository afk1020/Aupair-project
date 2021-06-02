class Family <ActiveRecord::Base
	has_many :listings
	has_many :aupairs, through: :listings
end 