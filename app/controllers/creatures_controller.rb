class CreaturesController < ApplicationController
  
  def index
    @creatures = Creature.all
    render json: @creatures
  end

  def create
    @creature = Creature.create!(artist_params)
    redirect_to artist_path(@artist)
  end

  def show
    @creature = Creature.find(params[:id])
    render json: @creature
  end

  def update
    @creature = Creature.find(params[:id])
    @creature.update!(creature_params)
    redirect_to creature_path(@creature)
  end

end
