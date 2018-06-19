/*
* Sunrise/sunset api returns a string - hh:mm:ss am/pm - always in UTC timezone.
* Converts string to seconds, accounts for AM/PM time format.
* */

const offsetTimezone = time => {
    const date = new Date();

    const cutSplitTime = time.slice(0, -3).split(':'); //removes ' AM'/' PM' from time string, splits it into hours, minutes, seconds array.

    let timeInSeconds;

    if (time.indexOf('PM') > -1) { // converts AM/PM time to 24 hour time accounting for 12 hours PM offset
        timeInSeconds = (Number(cutSplitTime[0]) * 3600) + (12 * 3600)+ (Number(cutSplitTime[1]) * 60) + Number(cutSplitTime[2]);
    } else {
        timeInSeconds = (Number(cutSplitTime[0]) * 3600) + (Number(cutSplitTime[1]) * 60) + Number(cutSplitTime[2]);
    }

    const offsetTimeInSeconds = timeInSeconds - date.getTimezoneOffset() * 60; // getTimezoneOffset returns a negative offset

    return new Date(offsetTimeInSeconds * 1000).toISOString().substr(11, 5) //converts miliseconds to Date, formats it to ISO standard, cuts away unnecessary data from string
};

export default offsetTimezone;