/*
* Sunrise/sunset api returns a string - hh:mm:ss am/pm - always in UTC timezone.
* Converts string to seconds, accounts for AM/PM time format.
* */

const offsetTimezone = time => {
    const date = new Date();

    const cutTime = time.slice(0, -3);

    const splitTime = cutTime.split(':');

    let timeInSeconds;

    if (time.indexOf('PM') > -1) {
        timeInSeconds = (Number(splitTime[0]) * 3600) + (12 * 3600)+ (Number(splitTime[1]) * 60) + Number(splitTime[2]);
    } else {
        timeInSeconds = (Number(splitTime[0]) * 3600) + (Number(splitTime[1]) * 60) + Number(splitTime[2]);
    }

    const offsetTimeInSeconds = timeInSeconds - date.getTimezoneOffset() * 60;

    return new Date(offsetTimeInSeconds * 1000).toISOString().substr(11, 5)
};

export default offsetTimezone;