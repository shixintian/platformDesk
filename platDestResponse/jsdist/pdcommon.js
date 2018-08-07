"use strict";

$(function () {
    var pdcommonobj = {
        init() {
            this.footerPart()
        },
        footerPart() {
            $(".pd-friendLink-show").on("click", function () {
                $(this).parents(".pd-friendLink-dt:first").siblings(".pd-friendLink-dd").slideToggle();

            })
        },
        name: ""
    };
    pdcommonobj.init();

    function resizeRem() {
        // 1440 中 1rem = 192px
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
    }
    resizeRem();

    $(window).resize(function () // 绑定到窗口的这个事件中
        {
            resizeRem();
        });

    $(document).ready(function () {

        var myFullpage = new fullpage('#fullpage-indexTop', {
            licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
            controlArrows: false,
            continuousVertical: true,
            slidesNavigation: true,
        });
    });

})