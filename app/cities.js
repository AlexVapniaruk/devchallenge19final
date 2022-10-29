import cities from '../inputs/cities.json' assert {type: 'json'};

export const findClosestCityAndDistance = (lat, lon) => {
    const closestCity = findClosestCity(lat, lon);
    const distance = findDistanceBeetween2Points(
        closestCity.geometry.coordinates[1], 
        closestCity.geometry.coordinates[0],
        lat,
        lon
    );

    return { name: closestCity.properties.capital, distance: distance };
}

const findClosestCity = (lat, lon) => {
    let fountCity;
    let m;

    cities.forEach(city => {
        const k = Math.sqrt(Math.pow(city.geometry.coordinates[1] - lat, 2) + Math.pow(city.geometry.coordinates[0] - lon ,2));
        if(!fountCity || k < m) {
            fountCity = city;
            m = k;
        }
    });

    return fountCity;
}

const findDistanceBeetween2Points = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3;
    const f1 = lat1 * Math.PI/180;
    const f2 = lat2 * Math.PI/180;
    const dF = (lat2-lat1) * Math.PI/180;
    const dL = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(dF/2) * Math.sin(dF/2) +
            Math.cos(f1) * Math.cos(f2) *
            Math.sin(dL/2) * Math.sin(dL/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;

    return Math.round(d) / 1000;
}