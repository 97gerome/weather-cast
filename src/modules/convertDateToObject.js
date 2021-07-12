const convertDateToObject = (dt) => {
    const daysArr = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];
    const dtObj = new Date(dt* 1000);
    return ({
        day: daysArr[dtObj.getDay()],
        date: `${dtObj.getDate()}`,
        month: `${dtObj.getMonth()}`
    });
};

export default convertDateToObject;