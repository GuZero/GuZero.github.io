module.exports = {
    dateFilter: (time, type) => {
        let format = (value) => {
            return value >= 10 ? value : '0' + value
        };
        let date = new Date(time);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minuter = date.getMinutes();
        let second = date.getSeconds();
        let result;
        switch (type) {
            case 0:
                result = `${format(month)}-${format(day)}`;
                break;
            case 1:
                result = `${format(hours)}-${format(minuter)}`;
                break;
            case 3: // 2015-01-05 11:12
                result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}`;
                break;
            case 4: // 2015-01-05 11:12:06
                result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}:${format(second)}`;
                break;
        }
        return result;
    }
}