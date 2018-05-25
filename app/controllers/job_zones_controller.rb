class JobZonesController < ApplicationController
  def index
    render json: JobZone.all
  end
end
