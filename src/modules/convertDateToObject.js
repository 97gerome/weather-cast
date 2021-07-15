const convertDateToObject = (dt, timezoneOffset) => {
    const daysArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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