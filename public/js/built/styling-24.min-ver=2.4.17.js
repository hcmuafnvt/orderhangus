(function() {
    var panelsStyles = {"fullContainer":"body"};
    jQuery(function(t){var e=t(panelsStyles.fullContainer);0===e.length&&(e=t("body"));var r=function(){t(".siteorigin-panels-stretch.panel-row-style").each(function(){var r=t(this);r.css({"margin-left":0,"margin-right":0,"padding-left":0,"padding-right":0});var i=r.offset().left-e.offset().left,n=e.outerWidth()-i-r.parent().outerWidth();r.css({"margin-left":-i,"margin-right":-n,"padding-left":"full"===r.data("stretch-type")?i:0,"padding-right":"full"===r.data("stretch-type")?n:0});var a=r.find("> .panel-grid-cell");"full-stretched"===r.data("stretch-type")&&1===a.length&&a.css({"padding-left":0,"padding-right":0}),r.css({"border-left":0,"border-right":0})}),t(".siteorigin-panels-stretch.panel-row-style").length&&t(window).trigger("panelsStretchRows")};t(window).resize(r),r()});
})();
