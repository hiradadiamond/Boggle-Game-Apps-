class Api::V1::BoggleController < Api::V1::BaseController
  def index
    respond_with GameContent.all
  end
end
