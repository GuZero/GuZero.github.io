define(['jquery', '_util', 'axios', 'template'], function ($, _util, axios, template) {
    var mod = {},
        data = {};
    mod.filterData = function (data) {
        var array = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].status != 2) {
                if (data[i].category == '') {
                    data[i].category = '自定义';
                }
                switch (data[i].status) {
                    case 1:
                        data[i].value = '等待审核';
                        break;
                    case 11:
                        data[i].value = '通过审核';
                        break;
                    case 12:
                        data[i].value = '审核拒绝';
                        break;
                    case 31:
                        data[i].value = '等待支付';
                        break;
                    case 32:
                        data[i].value = '付款中';
                        break;
                    case 33:
                        data[i].value = '付款中';
                        break;
                    case 34:
                        data[i].value = '付款中';
                        break;
                    case 35:
                        data[i].value = '等待审核';
                        break;
                    case 36:
                        data[i].value = '付款中';
                        break;
                    case 37:
                        data[i].value = '付款中';
                        break;
                    case 41:
                        data[i].value = '未通过';
                        break;
                    case 42:
                        data[i].value = '未通过';
                        break;
                    case 43:
                        data[i].value = '未通过';
                        break;
                    default:
                        data[i].value = '等待审核';
                        break;
                }
                array.push(data[i])
            }
        }
        return array;
    };
    mod.getTemplate = function (items) {
        $.ajax({
            type: "GET",
            url: "../template/layout.html",
            dataType: "html",
            success: function (data) {
                var _html = template.render(data, items);
                console.log(_html);
            }
        });
    };
    mod.getUserInfo = function () {
        _util.axios({
            url: '/media/adinteraction'
        }, function (res) {
           if(res.status==0){
            data.items = mod.filterData(res.data.adinteractions);
            mod.getTemplate(data);
           }
        })
    }
    $(document).ready(function () {
        mod.getUserInfo();
    })
});