/* Your Code Here */
function createEmployeeRecord(employeeRawData){
    return {
        firstName: employeeRawData[0],
        familyName: employeeRawData[1],
        title: employeeRawData[2],
        payPerHour: employeeRawData[3],
        timeInEvents: [],
        timeOutEvents: [], 
    }
}
function createEmployeeRecords(arrayOfEmployees){
    return arrayOfEmployees.map(employee => createEmployeeRecord(employee))
}
function createTimeInEvent(dateStamp){
    let [date,hour] = dateStamp.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour,10),
        date,
    })
    return this
}
function createTimeOutEvent(dateStamp){
    let [date,hour] = dateStamp.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour,10),
        date,
    })
    return this
}
function hoursWorkedOnDate(date){
    let inEvent = this.timeInEvents.find((e)=> e.date === date);
    let outEvent = this.timeOutEvents.find((e) => e.date === date);
    return (outEvent.hour - inEvent.hour) /100
}
function wagesEarnedOnDate(date){
    let rawWage = hoursWorkedOnDate.call(this, date) * this.payPerHour
    return parseFloat(rawWage.toString())
}
function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(e=> e.firstName === firstName)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(employeeRecordsArray){
    // const allEmployeeWages = employeeRecordsArray.map(employee => { return allWagesFor.call(employee)})
    // return allEmployeeWages.reduce((total, wage) => {
    //     return total + wage
    // }, 0 )
    return employeeRecordsArray.reduce( (total, employee) => {return total + allWagesFor.call(employee)},0)
}

