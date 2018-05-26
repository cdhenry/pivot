class AddDescriptorsToCareers < ActiveRecord::Migration[5.2]
  def change
    add_column :careers, :aka, :string
    add_column :careers, :what_they_do, :string
    add_column :careers, :on_the_job, :string
  end
end
