class AddEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :address
      t.references :contact
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end