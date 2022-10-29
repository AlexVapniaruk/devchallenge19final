const worldSides = {n: 0, e: 90, s: 180, w: 270, ne: 45, se: 135, sw: 225, nw: 315};
export const initCompass = () => {
  const compass = document.querySelector('.compass-wrap')
  if ('AbsoluteOrientationSensor' in window ) {
    let sensor = new AbsoluteOrientationSensor({ frequency: 60, referenceFrame: "device" });
    sensor.stop();
    sensor.addEventListener('reading', listener)
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(saveLocation); 
    } else {
        alert("Ooops, no geolocation support!")
    }

    function listener(e) {
      const q = e.target.quaternion;
      const heading = Math.atan2(2*q[0]*q[1] + 2*q[2]*q[3], 1 - 2*q[1]*q[1] - 2*q[2]*q[2])*(180/Math.PI);
      const headingAdjusted = 270 + heading;
      localStorage.setItem('side', Math.round(heading));
      
      compass.style.Transform = 'rotate(' + headingAdjusted + 'deg)';
      compass.style.WebkitTransform = 'rotate('+ headingAdjusted + 'deg)';
    }

    sensor.start();
  } else {

  }
}

function saveLocation(position){
  const latitude = position.coords.latitude; 
  const longitude = position.coords.longitude;

  localStorage.setItem('lat', latitude);
  localStorage.setItem('lon', longitude);
}