$(document).ready(function() {
  $('body').on('click', '#download', function(e) {
  	//don't go to the actual link
  	e.preventDefault();
  	
    //Hold the download link
    var downloadLink = $(this);
    
    //show loading message
    downloadLink.add($('#loading')).toggle();
    
    //Max of 30 tries; 15 second timeout.
    var attempts = 30;
    
    //check the cookie to see if controller has set it yet (Max of 30 tries; 15 second timeout)
    var checkDownloadCookie = function() {
	  	if (getCookie('download_token') == downloadLink.data('token') || attempts == 0) {
	  		//if it has (or timeout), unblock the loading message
	  		downloadLink.add($('#loading')).toggle();
	  		attempts--;
	  	}
	  	else {
	  		//otherwise, try again in half a second
	  		setTimeout(checkDownloadCookie, 500);  
	  	}
	 };
    
    //navigate to download page (will not actually change pages if it's a .csv file)
    document.location.href = downloadLink.attr('href');
    
    //kick off initial check
    checkDownloadCookie();
  });
  
});

//I stole this from here: http://stackoverflow.com/questions/1106377/detect-when-browser-receives-file-download
function getCookie( name ) {
	var parts = document.cookie.split(name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}