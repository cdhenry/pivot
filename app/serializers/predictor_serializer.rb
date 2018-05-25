class PredictorSerializer < ActiveModel::Serializer
  attributes :id, :engagement, :altruism, :skill, :support, :basic_needs, :balance
end
