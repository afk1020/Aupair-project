class CreateFamilies < ActiveRecord::Migration[5.2]
  def change
    create_table :families do |t|
      t.string :fullname
      t.string :aupair_name
      t.integer :salary
      t.string :start
    end
  end
end
