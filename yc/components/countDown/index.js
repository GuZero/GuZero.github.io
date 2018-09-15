// components/countDown/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        end_time: {
            type: Number,
            value: 0
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        countDownDay: '00',
        countDownHour: '00',
        countDownMinute: '00',
        countDownSecond: '00',
        _interval:null
    },
    attached: function() {
        this.coujntDown()
    },
    moved:function(){
        clearInterval(this.data.__interval);
    },
    detached:function(){
        clearInterval(this.data._interval);
    },

    /**
     * 组件的方法列表
     */
    methods: {
        coujntDown: function() {
            if ((this.data.end_time - (new Date()).getTime()) < 0) return false;
            var totalSecond = (this.data.end_time - (new Date()).getTime()) / 1000;
            let _day = Math.floor(totalSecond / 3600 / 24),
                _hr = Math.floor((totalSecond - _day * 3600 * 24) / 3600),
                _min = Math.floor((totalSecond - _day * 3600 * 24 - _hr * 3600) / 60);

            function zero(str) {
                return str.toString().length == 1 ? '0' + str.toString() : str.toString()
            }
            this.setData({
                countDownDay: zero(_day),
                countDownHour: zero(_hr),
                countDownMinute:zero(_min)
            })

            let interval = setInterval(function() {
                // 秒数
                var second = totalSecond;

                // 天数位
                var day = Math.floor(second / 3600 / 24);
                var dayStr =zero(day);

                // 小时位
                var hr = Math.floor((second - day * 3600 * 24) / 3600);
                var hrStr = zero(hr);

                // 分钟位
                var min = Math.floor((second - day * 3600 * 24 - hr * 3600) / 60);
                var minStr =zero(min);

                // 秒位
                var sec = (second - day * 3600 * 24 - hr * 3600 - min * 60).toFixed(0);
                var secStr =zero(sec);

                this.setData({
                    countDownDay: dayStr,
                    countDownHour: hrStr,
                    countDownMinute: minStr,
                    countDownSecond: secStr,
                });
                totalSecond--;
                if (totalSecond < 0) {
                    clearInterval(interval);
                    this.setData({
                        countDownDay: '00',
                        countDownHour: '00',
                        countDownMinute: '00',
                        countDownSecond: '00',
                    });
                }
            }.bind(this), 1000);
            this.setData({
                __interval:interval
            })
        }
    }
})