class LibraryUsersController < ApplicationController

  before_action :logged_in?

  def index
    @user = User.find(params[:user_id])
    @libraries = @user.libraries

    render :index
  end

  def create
    @user = current_user
    @library = Library.find(params[:library_id])
    @user.libraries.push(@library)

    redirect_to "/libraries/#{@library.id}"
  end

end
