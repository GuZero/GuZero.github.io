//创建和初始化地图函数：
function initMap(){
    createMap();
}
    
function createMap(){
    //加载地图，调用浏览器定位服务
    var toolBar;
    var customMarker = new AMap.Marker({
        offset: new AMap.Pixel(-14, -34),//相对于基点的位置
        icon: new AMap.Icon({  //复杂图标
            size: new AMap.Size(27, 36),//图标大小
            image: "http://webapi.amap.com/images/custom_a_j.png", //大图地址
            imageOffset: new AMap.Pixel(-28, 0)//相对于大图的取图位置
        })
    });
    map = new AMap.Map('map', {
        resizeEnable: true
    });
    map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition:'RB'
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
        AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    });
    //解析定位结果
    function onComplete(data) {
        var str=['定位成功'];
        str.push('经度：' + data.position.getLng());
        str.push('纬度：' + data.position.getLat());
        if(data.accuracy){
             str.push('精度：' + data.accuracy + ' 米');
        }//如为IP精确定位结果则没有精度信息
        str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
        document.getElementById('tip').innerHTML = str.join('<br>');
    }
    //解析定位错误信息
    function onError(data) {
        document.getElementById('tip').innerHTML = '定位失败';
    }
     //地图中添加地图操作ToolBar插件
    map.plugin(["AMap.ToolBar"], function() {
        toolBar = new AMap.ToolBar({locationMarker: customMarker}); //设置地位标记为自定义标记
        map.addControl(toolBar);
    });
}   
var map, geolocation;
