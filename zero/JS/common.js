define(["layer"],function(layer){
    var common = {};
    //日期格式化
    common.dateFormat = function(){
        Date.prototype.format = function(format) {
            var date = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                "S+": this.getMilliseconds()
            };
            if (/(y+)/i.test(format)) {
                format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            for (var k in date) {
                if (new RegExp("(" + k + ")").test(format)) {
                    format = format.replace(RegExp.$1, RegExp.$1.length == 1
                        ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                }
            }
            return format;
        }
    };
    common.showLoading=function (text) {
        layer.open({type: 2,content:text||""});
    };
    common.hideLoading=function () {
        layer.closeAll();
    };
    common.showTips=function (text) {
        layer.open({
            content: text,
            anim:false,
            time:4,
            skin: 'msg'
        });
    },
    common.getPath=function(){
        switch (location.hostname) {
            //TODO 第一套测试环境
            case "fengchaobox.sit.sf-express.com":
                return  "http://fengchaobox.sit.sf-express.com/dropbox";
                break;
            //TODO 第二套测试环境
            case "internetweb-sit2.fcbox.com":
                return "http://internetweb-sit2.fcbox.com/dropbox";
                break;
            //TODO 第三套测试环境
            case "testedms.fcbox.com":
                return "http://testedms.fcbox.com";
                break;
            //TODO 生产环境
            case "edms.fcbox.com":
                return "http://edms.fcbox.com";
                break;
            //TODO 默认本机
            default :
                return  'http://'+location.hostname+':'+location.port
        }
    }
    return common;
});