class AddsItemsToOrder < ActiveRecord::Migration
  def change
    add_column :orders, :items, :string
  end
end
