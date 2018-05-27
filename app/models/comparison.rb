class Comparison < ActiveRecord::Base
  has_many :predictors
  has_many :careers, through: :predictors
  accepts_nested_attributes_for :predictors

  def predictors_attributes=(predictors)
    predictors.each do |predictor_attributes|
      self.predictors.build(predictor_attributes)
    end
  end
end
