Aupair.destroy_all

10.times do 
 Aupair.create(name: Faker::Name.name_with_middle, age: rand(18..45), years_of_experience: rand(0..20), nationality: Faker::Address.country)
end 