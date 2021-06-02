class AddNumberOfChildrenToFamilies < ActiveRecord::Migration[5.2]
  def change
    add_column :families, :number_of_children, :integer
  end
end
