export function getLocation() {
  if (navigator.geolocation)
    NavigationActivation.geolocation.getCurrentPosition(
      showLocation,
      showError,
    );
  else console.log("Geolocation is not supported by youe browser.");
}

function showLocation(position) {
  console.log(
    `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`,
  );
  //   let locate = position.coords.latitude + ", " + position.coords.longitude;
  //   let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
  //   "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location imformation is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occured.");
      break;
  }
}
