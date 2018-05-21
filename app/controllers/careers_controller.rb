class CareersController < ApplicationController
  def index
    render json: Career.all
  end

  def new
    career_title = params[:career_title]

    results = Career.search(career_title)

    render :json => results
  end
end
