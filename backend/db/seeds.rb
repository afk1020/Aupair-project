Aupair.destroy_all

10.times do 
 Aupair.create(name: Faker::Name.name_with_middle, age: rand(18..45), nationality: Faker::Address.country, years_of_experience: rand(0..5),)
end 	

10.times do 
	HostFamily.create(lastname: Faker::Name.name, number_of_children: rand(1..5), location: Faker::Address.state)
end 