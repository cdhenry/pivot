class ComparisonsController < ApplicationController

  def index
    render json: Comparison.all
  end

  def show
    render json: Comparison.find(params[:id])
  end

  def create
    @comparison = Comparison.create
    render json: @comparison, status: 201
  end

  def update
    @comparison = Comparison.find(params[:id])
    render json: @comparison
  end

end
