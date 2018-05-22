class CreateJobZones < ActiveRecord::Migration[5.2]
  def change
    create_table :job_zones do |t|
      t.string :title
      t.string :experience
      t.string :education
      t.string :job_training
    end
  end
end
