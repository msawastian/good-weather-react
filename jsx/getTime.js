const getTime = () => {

    let date = new Date(),
        time = {
            hours: date.getHours(),
            minutes: date.getMinutes()
        };

    if (time.hours < 10) {
        time.hours = '0' + time.hours;
    }

    if (time.minutes < 10) {
        time.minutes = '0' + time.minutes;
    }

    return time.hours + ':' + time.minutes;
};


export default getTime;