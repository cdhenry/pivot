class CareersController < ApplicationController
  def index
    render json: Career.all
  end

  def search
    career = Career.find(params[:id])
    if career["aka"] == nil
      results = Career.search(career.href)
      career.update(results)
      career.save
      render :json => career
    else
      render :json => career
    end
  end
end
