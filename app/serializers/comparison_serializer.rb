class ComparisonSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :updated_at
  has_many :predictors
  has_many :careers, through: :predictors
end
