/**
 * 日期格式化
 * @param data
 * @returns {string}
 */
function getFormatData(data) {
    return data ? [data.getFullYear(), is2length(data.getMonth() + 1), is2length(data.getDate())].join('-') : ''
}

/**
 * 判断长度
 * @param numb
 * @returns {string}
 * 返回2位
 */
function is2length(numb) {
    return numb.toString().length == 2 ? numb : (0 + '' + numb)
}

/**
 * 转为整数
 * @param numb
 * @returns {Number}
 * 返回10进制
 */
function getIntager(numb) {
    return parseInt(numb, 10)
}

/**
 * 返回日期
 * @param arg
 * @returns {number}
 */
function getDate(arg) {
    var oneDay = 24 * 60 * 60 * 1000,
        beforeAndAfer = arg * oneDay,
        atLast = new Date().getTime() + beforeAndAfer
    if (arguments[1]) {
        atLast = arguments[1].getTime() + beforeAndAfer
    }
    return new Date(atLast)
}

/**
 * 渲染到页面：渲染日期
 * @param _parent
 * @param date
 * @param today
 */
function setVal(_parent, date, today) {
    if (arguments.length == 4) {
        _parent.find('input').eq(1).val(getFormatData(date.monday))
        _parent.find('input').eq(2).val(getFormatData(date.sunday))
    } else {
        _parent.find('input').eq(1).val(getFormatData(date))
        _parent.find('input').eq(2).val(getFormatData(today ? today : date))
    }
}

function setValAndReqNow(arg) {
    //  今天周几
    var isNow = new Date().getDay(),
        //  通过今天计算出本周一对应的日期
        monday = getDate(-getIntager(isNow) + 1),
        //  通过今天计算出本周天对应的日期
        sunday = getDate(7 - isNow),
        diff = 0
    switch (arg) {
        case 1: //  本周
            monday = getDate(-getIntager(isNow) + 1)
            sunday = getDate(7 - isNow)
            break;
        case 2: //  第一个周
            //  计算出周天离今天还有几天
            diff = 7 - getIntager(isNow)
                //  计算出下周一日期
            monday = getDate(diff + 1)
                //  计算出下周日日期
            sunday = getDate(7 + diff)
            break;
        case 3: //  第二个周
            //  计算出周天离今天还有几天
            diff = 14 - getIntager(isNow)
                //  计算出下周一日期
            monday = getDate(diff + 1)
                //  计算出下周日日期
            sunday = getDate(7 + diff)
            break;
        case 4: //  第三个周
            //  计算出周天离今天还有几天
            diff = 21 - getIntager(isNow)
                //  计算出下周一日期
            monday = getDate(diff + 1)
                //  计算出下周日日期
            sunday = getDate(7 + diff)
            break;
        case 5: //  第四个周
            //  计算出周天离今天还有几天
            diff = 28 - getIntager(isNow)
                //  计算出下周一日期
            monday = getDate(diff + 1)
                //  计算出下周日日期
            sunday = getDate(7 + diff)
            break;

    }

    return {
        monday: monday,
        sunday: sunday
    }
}
//  获取当前月份
function getMonthMt() {
    return getIntager(new Date().getMonth()) + 1
}

/**
 * 返回准确的年月，确保上查询上一月和下一月的时候年份和月份不合适
 * @param month
 * @returns {{thisMonth: number, year: number}}
 */
function accurateYAndM(month) {
    var year = 0,
        thisMonth = 0
    if (month == 0 && arguments[1] == -1) {
        year = getYearMt() - 1
        thisMonth = 12
    } else if (month == 13 && arguments[1] == 1) {
        year = getYearMt() + 1
        thisMonth = 1
    } else {
        year = getYearMt()
        thisMonth = month
    }
    return {
        thisMonth: thisMonth,
        year: year
    }
}
//  获取当前X月初日期
function getNowMonthFrist(month) {
    var yAndM = accurateYAndM(month)
    return new Date(yAndM.year + '-' + is2length(yAndM.thisMonth) + '-01')
}
//  获取当前X月末日期
function getNowMonthEnd(month) {
    var yAndM = accurateYAndM(month)
    return new Date(yAndM.year + '-' + is2length(yAndM.thisMonth) + '-01')
}
//  获取当前年份
function getYearMt() {
    return getIntager(new Date().getFullYear())
}

export { setValAndReqNow, getFormatData };