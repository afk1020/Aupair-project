class CreateAupairs < ActiveRecord::Migration[5.2]
  def change
    create_table :aupairs do |t|
			t.string :name
			t.integer :age
			t.integer :years_of_experience
      		t.string :nationality
		end 
  end
end
