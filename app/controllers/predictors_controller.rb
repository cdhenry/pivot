class PredictorsController < ApplicationController

  def create
    @predictor = Predictor.new(predictor_params)
    @predictor.save
    render json: @predictor, status: 201
  end

  def update
    @predictor = Predictor.find(params[:id])
    render json: @predictor
  end

  private

    def predictor_params
      params.require(:predictor).permit(
        :career_id, :comparison_id, :engagement, :altruism, :skill, :support,
        :basic_needs, :balance
      )
    end

end
