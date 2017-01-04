# GuZero.github.io
Studio
<!doctype html>
<html>

<head>
    <meta charset="utf-8" />
    <title>CSS3轮播图效果</title>
    <link rel="stylesheet" type="text/css" href="http://css.h5course.cn/reset.css" />
    <style type="text/css">
    /*设置视口的大小样式*/
    
    .pic-focus {
        position: relative;
        overflow: hidden;
        width: 480px;
        height: 320px;
        margin: 100px auto 0;
        border: 1px solid red;
    }
    /*设置内容区的样式*/
    
    .pic-focus ul {
        position: relative;
        width: 2400px;
        animation: runing 15s linear 2s infinite;
    }
    
    .pic-focus ul li {
        overflow: hidden;
        float: left;
        width: 480px;
        height: 320px;
    }
    
    .pic-focus ul li img {
        float: left;
        display: block;
        width: 100%;
        height: 100%;
    }
    
    .pic-focus .page {
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -135px;
        padding: 10px;
    }
    
    .pic-focus .page em {
        display: inline-block;
        width: 30px;
        height: 6px;
        margin: 0 10px;
        background-color: #ccc;
        border-radius: 3px;
    }
    /*对提示的进度单独设置样式*/
    
    .pic-focus .page em:first-child {
        position: absolute;
        left: 10px;
        top: 21px;
        background-color: #f60;
        animation: runPage 15s linear 2s infinite;
    }
    /*图片轮播效果的关键帧控制*/
    
    @keyframes runing {
        0% {
            left: 0;
        }
        5% {
            left: -480px;
        }
        20% {
            left: -480px;
        }
        25% {
            left: -960px;
        }
        40% {
            left: -960px;
        }
        45% {
            left: -1440px;
        }
        60% {
            left: -1440px;
        }
        65% {
            left: -1920px;
        }
        80% {
            left: -1920px;
        }
        85% {
            left: 0;
        }
        100% {
            left: 0;
        }
    }
    /*随着图片切换，底部进度变化的关键帧控制*/
    
    @keyframes runPage {
        0% {
            left: 10px;
        }
        5% {
            left: 65px;
        }
        20% {
            left: 65px;
        }
        25% {
            left: 119px;
        }
        40% {
            left: 119px;
        }
        45% {
            left: 174px;
        }
        60% {
            left: 174px;
        }
        65% {
            left: 229px;
        }
        80% {
            left: 229px;
        }
        85% {
            left: 10px;
        }
        100% {
            left: 10px;
        }
    }
    </style>
</head>

<body>
    <!-- 效果的视口区 -->
    <div class="pic-focus">
        <!-- 图片内容区 -->
        <ul>
            <li><img src="http://img.h5course.cn/codepen/2016.12.28.1.png"></li>
            <li><img src="http://img.h5course.cn/codepen/2016.12.28.2.jpg"></li>
            <li><img src="http://img.h5course.cn/codepen/2016.12.28.1.png"></li>
            <li><img src="http://img.h5course.cn/codepen/2016.12.28.4.jpg"></li>
            <li><img src="http://img.h5course.cn/codepen/2016.12.28.5.jpg"></li>
        </ul>
        <!-- 底部进度提示 -->
        <div class="page">
            <em></em>
            <em></em>
            <em></em>
            <em></em>
            <em></em>
            <em></em>
        </div>
    </div>
</body>

</html>
