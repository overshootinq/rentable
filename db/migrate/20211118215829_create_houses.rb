class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :property_type
      t.string :address
      t.integer :beds
      t.integer :baths
      t.integer :price
      t.string :contact_info
      t.string :img_url

      t.timestamps
    end
  end
end
