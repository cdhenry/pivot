class JobZoneSerializer < ActiveModel::Serializer
  attributes :id, :title, :experience, :education, :job_training 
  has_many :careers
end
