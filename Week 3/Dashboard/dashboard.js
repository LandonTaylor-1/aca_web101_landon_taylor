
  var myLocation = document.getElementById("fail");

  function getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayPosition, error)
    } else {
      myLocation.innerHTML = "Unable to Locate"
    }
  }

  function displayPosition(position) {
    myLocation.innerHTML = " Longitude: " + position.coords.longitude + " Latitude: " + position.coords.latitude
  }

  function error(position) {
    myLocation.innerHTML = "You have blocked this feature"
  }