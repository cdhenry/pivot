class Comparison < ActiveRecord::Base
  has_many :predictors
  has_many :careers, through: :predictors
end
