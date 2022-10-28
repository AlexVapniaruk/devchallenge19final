const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
    console.log(frontToBack, leftToRight, rotateDegrees)
};

export const initCompass = () => {
    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", (event) => {
          const rotateDegrees = event.alpha; // alpha: rotation around z-axis
          const leftToRight = event.gamma; // gamma: left to right
          const frontToBack = event.beta; // beta: front back motion
     
          handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
        }, true);
     }else{
        console.log('here');
     }
     
     
}