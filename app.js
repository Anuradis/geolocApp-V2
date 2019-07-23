let success = (position) => {
  const currentLocation = `https://maps.googleapis.com/maps/api/staticmap?zoom=16&size=600x300&maptype=roadmap&key=AIzaSyBWsbldnMTU1lu5bGzHUxE7gEKTm6paX3k&markers=color:blue%7Clabel:A%7C${position.coords.latitude},${position.coords.longitude}`;
  document.querySelector("img").src = currentLocation;
}


let error = (err) => {
  document.querySelector("img").src = "error.png";
  // currentLocation = `ERROR(${err.code}): ${err.message}`;
}
navigator.geolocation.getCurrentPosition(success, error);