class CareersController < ApplicationController
  def search
    career_title = params[:career_title]

    results = Career.search(career_title)

    render :json => results
  end

  def index
    binding.pry
    render json: Career.allData
  end
end
