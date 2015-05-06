class AddPhoneNumbers < ActiveRecord::Migration
  def change
    create_table :phone_numbers do |t|
      t.string :number
      t.references :contact
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end