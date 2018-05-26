class CareerSerializer < ActiveModel::Serializer
  attributes :id, :title, :href, :bright_outlook, :green, :apprenticeship,
    :aka, :what_they_do, :on_the_job
end
