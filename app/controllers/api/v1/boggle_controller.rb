class Api::V1::BoggleController < Api::V1::BaseController
  def index
      render json:GameContent.all
  end
  def show
    render json:GameContent.find(params[:id])
  end
  def check
    word= params[:word]
    render json:params
  end
end
