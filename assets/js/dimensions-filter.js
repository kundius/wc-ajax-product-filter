jQuery(document).ready(function($) {
  // dimensions slider
  wcapfInitDimensionsSlider = function() {
    $('.wcapf-dimensions-slider').each(function () {
      var filter_key = $(this).attr('name');

      $(this).ionRangeSlider({
        type: "double",
        grid: true,
        onFinish: function (data) {
          // remove this parameter if set value is equal to max val
          if (data.to === data.max) {
            history.pushState({}, '', wcapfRemoveQueryStringParameter('max-' + filter_key));
          } else {
            wcapfUpdateQueryStringParameter('max-' + filter_key, data.to);
          }

          // remove this parameter if set value is equal to max val
          if (data.from === data.min) {
            history.pushState({}, '', wcapfRemoveQueryStringParameter('min-' + filter_key));
          } else {
            wcapfUpdateQueryStringParameter('min-' + filter_key, data.from);
          }

          // filter products without reinitializing price slider
          wcapfFilterProducts();
        }
      });
    });
  }

  // initialize price slider
  wcapfInitDimensionsSlider();
});