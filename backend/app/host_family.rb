class HostFamily <ActiveRecord::Base
	has_many :aupairs, through: :listings
end 