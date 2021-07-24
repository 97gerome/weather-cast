const convertDateToObject = (dt, timezoneOffset) => {
    const daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const localOffset = new Date().getTimezoneOffset();
    const dtObj = new Date((dt + localOffset * 60 + timezoneOffset) * 1000);
    
    return ({
        day: daysArr[dtObj.getDay()],
        date: dtObj.getDate(),
        month: dtObj.getMonth(),
        hour: dtObj.getHours()
    });
};

export default convertDateToObject;