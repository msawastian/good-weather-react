const calculateWindDirection = degrees => {
    const cardinalDirections = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
    return cardinalDirections[Math.round((degrees % 360) / 45)] //modulo 360 doesn't allow for degrees to exceed 360
};


export default calculateWindDirection;