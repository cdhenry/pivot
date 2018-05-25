class ComparisonSerializer < ActiveModel::Serializer
  attributes :id
  has_many :predictors
  has_many :careers, through: :predictors
end
