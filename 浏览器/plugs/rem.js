(function () {
    //字体比例--------18.75--------
    var fontRatio = 18.75
        , windowWidth
        , rootFontSize
        ;
    function modifyRootFontSize()
    {
        windowWidth = document.documentElement.clientWidth;  /*body对应的宽度*/
        if(windowWidth > 640) windowWidth=640;
        rootFontSize = windowWidth / 12;
        document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + rootFontSize + 'px';
    }
    modifyRootFontSize();
    window.onresize = function ()    /*窗口改变时候执行*/
    {
        modifyRootFontSize();
    }
})();