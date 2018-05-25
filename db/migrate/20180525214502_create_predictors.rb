class CreatePredictors < ActiveRecord::Migration[5.2]
  def change
    create_table :predictors do |t|
      t.belongs_to :career, index: true
      t.belongs_to :comparison, index: true
      t.integer :engagement
      t.integer :altruism
      t.integer :skill
      t.integer :support
      t.integer :basic_needs
      t.integer :balance
    end
  end
end
