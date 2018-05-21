class CareersController < ApplicationController
  def all_careers
    binding.pry
    render json: Career.all
  end

  def index
    career_title = params[:career_title]

    results = Career.search(career_title)

    render :json => results
  end
end
