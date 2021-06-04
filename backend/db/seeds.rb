Aupair.destroy_all
Family.destroy_all

10.times do 
 Aupair.create(name: Faker::Name.name_with_middle, age: rand(18..45), nationality: Faker::Address.country, years_of_experience: rand(0..5))
end 	

5.times do 
Family.create(fullname: Faker::Name.name, aupair_name: Faker::Name.name_with_middle, salary: rand(12000..45000), start: Faker::Date.forward(days: 23), number_of_children: rand(2..3), isApproved: false)
end 