class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
			t.integer :aupair_id
      t.integer :family_id
      end
  end
end
