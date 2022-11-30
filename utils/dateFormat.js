const addDateSuffix = (date) => {
    let DateString = date.toString();

    const lastChar = DateString.charAt(DateString.length - 1);

    if (lastChar === '1' && DateString !== '11') {
        DateString = `${DateString}st`;
    } else if
       (lastChar === '1' && DateString != '12') {
        DateString = `${DateString}nd`;
    } else if
       (lastChar === '3' && DateString !== '13') {
        DateString = `${DateString}rd`;
    } else {
        DateString = `${DateString}th`;
    }

    return DateString;
};

module.exports = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
) => {

    const months = {
        0: monthLength === 'short' ? 'Jan' : 'January',
        1: monthLength === 'short' ? 'Feb' : 'February',
        2: monthLength === 'short' ? 'Mar' : 'March',
        3: monthLength === 'short' ? 'Apr' : 'April',
        4: monthLength === 'short' ? 'May' : 'May',
        5: monthLength === 'short' ? 'Jun' : 'June',
        6: monthLength === 'short' ? 'Jul' : 'July',
        7: monthLength === 'short' ? 'Aug' : 'August',
        8: monthLength === 'short' ? 'Sep' : 'September',
        9: monthLength === 'short' ? 'Oct' : 'October',
        10: monthLength === 'short' ? 'Nov' : 'November',
        11: monthLength === 'short' ? 'Dec' : 'December',
    };

    const DateObject = new Date(timestamp);
    const shortMonth = month[DateObject.getMonth()];

    const MonthDay = dateSuffix
        ? addDateSuffix(DateObject.getDate())
        : DateObject.getDate();

    const year = DateObject.getFullYear();
    let hour = 
        DateObject.getHours() > 12
            ? Math.floor(DateObject.getHours() - 12)
            : DateObject.getHours();

    if (hour === 0) {
        hour = 12;
    }

    const minute = (DateObject.getMinutes() < 10 ? '0' : '') + DateObject.getMinutes();

    const Meridian = DateObject.getHours() >= 12 ? 'pm' : 'am';

    const formattedTime = `${shortMonth} ${MonthDay}, ${year} at ${hour}:${minute} ${Meridian}`;

    return formattedTime;
};