    //自定义仿iphone弹出层
    (function ($) {
        //ios confirm box
        jQuery.fn.confirm = function (title, option, okCall, cancelCall) {
            var defaults = {
                title: null, //what text
                cancelText: '取消', //the cancel btn text
                okText: '确定' //the ok btn text
            };

            if (undefined === option) {
                option = {};
            }
            if ('function' != typeof okCall) {
                okCall = $.noop;
            }
            if ('function' != typeof cancelCall) {
                cancelCall = $.noop;
            }

            var o = $.extend(defaults, option, {title: title, okCall: okCall, cancelCall: cancelCall});

            var $dom = $(this);

            var dom = $('<div class="g-plugin-confirm">');
            var dom1 = $('<div>').appendTo(dom);
            var dom_content = $('<div>').html(o.title).appendTo(dom1);
            var dom_btn = $('<div>').appendTo(dom1);
            var btn_cancel = $('<a href="#"></a>').html(o.cancelText).appendTo(dom_btn);
            var btn_ok = $('<a href="#"></a>').html(o.okText).appendTo(dom_btn);
            btn_cancel.on('click', function (e) {
                o.cancelCall();
                dom.remove();
                e.preventDefault();
            });
            btn_ok.on('click', function (e) {
                o.okCall();
                dom.remove();
                e.preventDefault();
            });

            dom.appendTo($('body'));
            return $dom;
        };
    })(jQuery);

    //上一页
    $(".previousPage").bind("touchend", function () {
        var pageCount = $(".flipbook").turn("pages");//总页数
        var currentPage = $(".flipbook").turn("page");//当前页
        if (currentPage >= 2) {
            $(".flipbook").turn('page', currentPage - 1);
        } else {
        }
    });
    // 下一页
    $(".nextPage").bind("touchend", function () {
        var pageCount = $(".flipbook").turn("pages");//总页数
        var currentPage = $(".flipbook").turn("page");//当前页
        if (currentPage <= pageCount) {
            $(".flipbook").turn('page', currentPage + 1);
        } else {
        }
    });
    //返回到目录页
    $(".return").bind("touchend", function () {
        $(document).confirm('您确定要返回首页吗?', {}, function () {
            $(".flipbook").turn('page', 1); //跳转页数
        }, function () {
        });
    });