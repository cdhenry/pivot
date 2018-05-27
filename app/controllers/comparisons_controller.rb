class ComparisonsController < ApplicationController
  before_action :set_comparison, only: [:show, :edit, :update, :destroy]

  def index
    @comparisons = Comparison.all
    render json: @comparisons
  end

  def show
    render json: @comparison
  end

  def new
    @comparison = Comparison.new
  end

  def create
    @comparison = Comparison.new(comparison_params)
    @comparison.save
    render json: @comparison, status: 201
  end

  def destroy
    if @comparison.destroy
      render json: { success_message: 'Successfully deleted!' }, status: 200
    end
  end

  def update
    @comparison.update(comparison_params)
    render json: @comparison
  end

  private

    def set_comparison
      @comparison = Comparison.find(params[:id])
    end

    def comparison_params
      params.require(:comparison).permit(predictors_attributes:[
        :career_id, :engagement, :altruism, :skill, :support, :basic_needs,
        :balance
      ])
    end

end
