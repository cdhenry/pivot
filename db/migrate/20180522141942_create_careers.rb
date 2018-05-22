class CreateCareers < ActiveRecord::Migration[5.2]
  def change
    create_table :careers do |t|
      t.belongs_to :job_zone, index: true
      t.string :title
      t.string :href
      t.boolean :bright_outlook
      t.boolean :green
      t.boolean :apprenticeship
    end
  end
end
