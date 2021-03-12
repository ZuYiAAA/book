
//判断手机类型
window.onload = function () {
    //alert($(window).height());
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
    } else if (u.indexOf('iPhone') > -1) {//苹果手机
        //屏蔽ios下上下弹性
        $(window).on('scroll.elasticity', function (e) {
            e.preventDefault();
        }).on('touchmove.elasticity', function (e) {
            e.preventDefault();
        });
    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
    }
    var aImgs=$(".title img");
    for(var i=0;i<aImgs.length;i++){
            aImgs[i].className="on";
        }
    loading();
}

document.addEventListener('DOMContentLoaded',function (){
    function audioAutoPlay(){
        just_play();
        document.addEventListener("WeixinJSBridgeReady", function () {
                just_play();
        }, false);
    }
    audioAutoPlay();
});


var date_start;
var date_end;
date_start = getNowFormatDate();
//加载图片
var loading_img_url = [
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0001.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0002.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0003.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0004.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0005.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0006.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0007.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0008.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0009.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0010.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0011.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0012.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0013.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0014.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0015.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0016.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0017.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0018.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0019.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0020.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0021.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0022.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0023.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0024.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0025.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0026.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0027.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0028.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0029.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0030.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0031.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0032.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0033.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0034.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0035.jpg",
        // "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0036.jpg",
        // "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0037.jpg",
        // "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0038.jpg",
        // "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0039.jpg",
        // "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0040.jpg",
        // "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/0041.jpg",
];

var load_content = [
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0001.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0002.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0003.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0004.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0005.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0006.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0007.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0008.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0009.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0010.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0011.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0012.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0013.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0014.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0015.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0016.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0017.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0018.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0019.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0020.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0021.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0022.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0023.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0024.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0025.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0026.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0027.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0028.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0029.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0030.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0031.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0032.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0033.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0034.jpg",
        "https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/content/0035.jpg",
]

//加载页面
function loading() {
    var numbers = 0;
    var length = loading_img_url.length;

    for (var i = 0; i < length; i++) {
        var img = new Image();
        img.src = loading_img_url[i];
        img.onerror = function () {
            numbers += (1 / length) * 100;
        }
        img.onload = function () {
            numbers += (1 / length) * 100;
            $('.number').html(parseInt(numbers) + "%");
            console.log(numbers);
            if (Math.round(numbers) == 100) {
                //$('.number').hide();
                date_end = getNowFormatDate();
                var loading_time = date_end - date_start;
                //预加载图片
                $(function progressbar() {
                    //拼接图片
                    $('.shade').hide();
                    var tagHtml = "";
                    for (var i = 1; i <= 35; i++) {
                        if (i == 1) {
                            tagHtml += ' <div id="first" style="background:url(https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/00' + (i < 10 ? '0' + i : i) + '.jpg) center top no-repeat;background-size:100%"></div>';
                        } else if (i == 35) {
                            tagHtml += ' <div id="end" style="background:url(https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/00' + (i < 10 ? '0' + i : i) + '.jpg) center top no-repeat;background-size:100%"></div>';
                        } else {
                            tagHtml += ' <div style="background:url(https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/00' + (i < 10 ? '0' + i : i) + '.jpg) center top no-repeat;background-size:100%"></div>';
                        }
                    }
                    $(".flipbook").append(tagHtml);
                    var w = $(".graph").width();
                    $(".flipbook-viewport").show();
                });
                //配置turn.js
                function loadApp() {
                    var w = $(window).width();
                    var h = $(window).height();
                    $('.flipboox').width(w).height(h);
                    $(window).resize(function () {
                        w = $(window).width();
                        h = $(window).height();
                        $('.flipboox').width(w).height(h);
                    });

                    $('.flipbook').turn({
                        // Width
                        width: w,
                        // Height
                        height: h,
                        // Elevation
                        elevation: 50,
                        display: 'single',
                        // Enable gradients
                        gradients: true,
                        // Auto center this flipbook
                        autoCenter: true,
                        when: {
                            turning: function (e, page, view) {
                                $("#content").find("img").attr("src",load_content[page-1]);
                                $(".showPage").css("display","none");
                                $(".showPage").html("- "+[page]+" -");
                                if (page == 1) {
                                    $(".index").css("display", "block");
                                    $(".showPage").css("display", "none");
                                    $("#contentControl").css("display", "none");
                                    // $(".mark").css("display", "block");
                                } else {
                                    // $(".btnImg").css("display", "block");
                                     $(".index").css("display", "none");
                                     $(".showPage").css("display", "block");
                                     $("#contentControl").css("display", "block");

                                }
                                if (page == 35) {
                                    $("#contentControl").css("display", "none");
                                    $(".showPage").css("display", "none");
                                } else {
                                    $("#contentControl").css("display", "block");
                                    $(".showPage").css("display", "block");
                                }
                            },
                            turned: function (e, page, view) {
                                //console.log(page);
                                $("#content").find("img").attr("src",load_content[page-1]);
                                $(".showPage").fadeIn("slow");
                                $(".showPage").html("- "+[page]+" -");
                                if (page == 1) {
                                    $(".index").css("display", "block");
                                    $(".showPage").css("display", "none");
                                    // $(".mark").css("display", "block");
                                } else {
                                    // $(".btnImg").css("display", "block");
                                     $(".index").css("display", "none");
                                     $(".showPage").css("display", "block");
                                     
                                }
                                if (page == 35) {
                                   $(".showPage").css("display", "none");
                                } else {
                                    $(".showPage").css("display", "block");
                                }
                            }
                        }
                    })
                }
                yepnope({
                    test: Modernizr.csstransforms,
                    yep: ['js/turn.js'],
                    complete: loadApp
                });
            }
            ;
        }
    }
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "";
    var seperator2 = "";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + "" + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}

function getNumber(obj){
  var arr=[];
  var re=/\d+/g;
  arr.push(obj.match(re));
  return arr;
};

function next(){
    $("#main").fadeOut("slow");
    $("#hide").css("display","block");
    $("#book").css("display","block");
    $(".index li").bind("click",function(){
            $(".flipbook").turn("page",getNumber($(this).html()));
            event.stopPropagation();
             
    });
}

function hide(){
    $("#hide").fadeOut("slow");
}

function show(){
    if($("#content").is(':hidden')){　
        $("#content").fadeIn("slow");
        $('#contentControl').find("img").attr('src','https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/function/back.png');
    }else{
            $("#content").fadeOut("slow");
            $('#contentControl').find("img").attr('src','https://cdn.jsdelivr.net/gh/zuyiaaa/book/image/function/next.png');
    }
}

function play_music(){
        if ($('#mc_play').hasClass('on')){
            $('#mc_play audio').get(0).pause();
            $('#mc_play').attr('class','stop');
        }else{
            $('#mc_play audio').get(0).play();
            $('#mc_play').attr('class','on');
        }
        $('#music_play_filter').hide();
        event.stopPropagation(); //阻止冒泡
    }
function just_play(id){
        $('#mc_play audio').get(0).play();
        $('#mc_play').attr('class','on');
        if (typeof(id)!='undefined'){
            $('#music_play_filter').hide();
        }
        event.stopPropagation(); //阻止冒泡
    }
function is_weixn(){
        return false;
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
            return true;
        } else {
            return false;
        }
    }
    var play_filter=document.getElementById('music_play_filter');
    play_filter.addEventListener('click', function(){
        just_play(1);
    });
    play_filter.addEventListener('touchstart', function(){
        just_play(1);
    });
    play_filter.addEventListener('touchend', function(){
        just_play(1);
    });
    play_filter.addEventListener('touchmove', function(){
        just_play(1);
    });
    play_filter.addEventListener('mousedown', function(){
        just_play(1);
    });
    play_filter.addEventListener('mouseup', function(){
        just_play(1);
    });
    play_filter.addEventListener('mousemove',function(){
        just_play(1);
    });
