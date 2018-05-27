class Comparison < ActiveRecord::Base
  has_many :predictors
  has_many :careers, through: :predictors
  accepts_nested_attributes_for :predictors
end
