class ExamplesController < ApplicationController

  def index
    #set the download token on page load [might have to tweak if you want multiple download buttons on the same page]
    @download_token = SecureRandom.hex(6)
    respond_to do |format|
      format.html
    end
  end
  
  def download
    sleep 3
    #once we're ready to respond with a download, set the cookie, which'll act as a hook for the JS to hide the loading message.
    cookies[:download_token] = params[:download_token]
    respond_to do |format|
      format.csv
    end
  end

end