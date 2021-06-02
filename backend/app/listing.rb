class Listing <ActiveRecord::Base

	has_many :hostfamilies
	has_many :aupairs
end 