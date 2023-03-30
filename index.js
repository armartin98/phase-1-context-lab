/* Your Code Here */

function createEmployeeRecord(employeeArray){
    const employee = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(employeeArrays){
    return employeeArrays.map(x => createEmployeeRecord(x))
}

function createTimeInEvent(timeInDate){
    const [dateIn, hour] = timeInDate.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour),
        date: dateIn
    })
    return this
}

function createTimeOutEvent(timeOutDate){
    const [dateIn, hour] = timeOutDate.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date: dateIn
    })
    return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(x => x.date === date).hour
    const timeOut = this.timeOutEvents.find(x => x.date === date).hour
    return timeOut/100 - timeIn/100
}

function wagesEarnedOnDate(date){
    return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

function findEmployeeByFirstName(collection, firstNameString){
    return collection.find(x => x.firstName === firstNameString)
}

function calculatePayroll(employeeRecords){
    const payroll = employeeRecords.map(x => allWagesFor.call(x))
    return payroll.reduce((acc, pay) => {
        return acc + pay
    }, 0)
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


