class CreateFamily < ActiveRecord::Migration[5.2]
  def change
    create_table :families do |t|
			t.string :lastname
			t.integer :number_of_children
			t.string :location
		end 
  end
end
