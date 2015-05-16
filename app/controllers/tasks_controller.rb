class TasksController < ApplicationController
  def index
    render json: list.tasks
  end

  private

  def list
    List.find(params[:list_id])
  end
end
