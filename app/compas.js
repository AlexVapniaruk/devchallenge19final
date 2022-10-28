export const initCompass = () => {
    const compassWrap = document.querySelector('.compass-wrap');
    navigator.permissions.query({ name: 'accelerometer' }).then((result) => {
        if (result.state === 'granted') {
            alert('permisions granded');
            const acl = new Accelerometer({ frequency: 60 });
            acl.addEventListener("reading", () => {
                compassWrap.innerHTML(`x: ${acl.x} y:${acl.y} z:${acl.z}`);
            });

            acl.start();
        } else if (result.state === 'prompt') {
            alert('permisions not granded');
        }
        // Don't do anything if the permission was denied.
    });


}