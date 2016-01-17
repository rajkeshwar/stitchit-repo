
app.directive("owlCarousel", function($timeout) {
  return {
    restrict: 'E',
    transclude: false,
    require: '?ngModel',
    scope: true,
    link: function (scope, el, attr, ngModel) {
      scope.initCarousel = function(element) {
        // provide any default options you want
        var defaultOptions = {
        };
        var customOptions = scope.$eval($(element).attr('data-options'));
        // combine the two options objects
        for(var key in customOptions) {
          defaultOptions[key] = customOptions[key];
        }
        // init carousel
        $(element).owlCarousel(defaultOptions);

        // $(element).find('.owl-item').css('width', 'initial');
        // $(element).find('.owl-item').each(function(){
        //   var _$element = $(this);
        //   $timeout(function(){
        //      var width = _$element.find('img').width();
        //     console.log('width ', width);
        //     _$element.css('width', width + 'px');
        //   }, 1000);
         
        // });

        $(element).find('img').click(function(){
          $(element).find('.item').removeClass('active-item');
          $(this).parent().toggleClass('active-item');
        });
      };
    }
  };
})
.directive('owlCarouselItem', [function() {
  return {
    restrict: 'A',
    transclude: false,
    link: function(scope, element) {
      // wait for the last item in the ng-repeat then call init
      if(scope.$last) {
        scope.initCarousel(element.parent());
      }
    }
  };
}]);


app.directive('stcSlider', ['$timeout', function($timeout) {
  return {
    restrict: 'EA',
    require: '?ngModel',
    transclude: false,
    link: function(scope, el, attr, ngModel) {

      function updateSliderValue(){
        el.find('input').val(ngModel.$viewValue);
      }

      ngModel.$viewChangeListeners.push(function(){
        $timeout(updateSliderValue, 0);      
      });

      el.find('input').on('change input mousemove', function(){
        ngModel.$setViewValue(this.value);
      });

      ngModel.$render = function() {
        $timeout(updateSliderValue, 0);
      };

      $timeout(updateSliderValue, 0);
      stylishRangeSlider();

    }
  };
}]);

function stylishRangeSlider(){
  var range_els = document.querySelectorAll('input[type=range]'), 
        n = range_els.length, 
        style_el = document.createElement('style'), 
        styles = [], 
        track_sel = [
          '::-moz-range-track', 
          '::-webkit-slider-runnable-track', ' /deep/ #track'], 
        thumb_sel = ['::-webkit-slider-thumb', ' /deep/ #thumb'], 
        a = ':after', b = ':before', 
        s = ['', '%', '%'];

    document.body.appendChild(style_el);

    for(var i = 0; i < n; i++) {
      styles.push('');
      
      range_els[i].addEventListener('input', function() {
        var idx = this.id.split('r')[1] - 1, 
            base_sel = '.js #' + this.id, 
            str = '', 
            min = this.min || 0, max = this.max || 100, 
            c_style, u, edge_w, val;
        
        this.setAttribute('value', this.value);
        
        if(this.classList.contains('tip')) {
          str += base_sel + thumb_sel[0] + a + ',' + 
            base_sel + thumb_sel[1] + a + 
            '{content:"' + this.value + s[idx] + '"}';
        }
        
        if(this.classList.contains('fill')) {
          if(idx == 0) {
            c_style = getComputedStyle(this);
            u = c_style.backgroundSize.split(' ')[0].split('px')[0];
            edge_w = (c_style.width.split('px')[0] - u*(max - min))/2;
            val = ((this.value - min)*u + edge_w) + 'px';
          }
          else {
            val = this.value + '%';
          }
          
          if(this.classList.contains('fill-replace')) {
            str += base_sel + track_sel[0] + '{background-size:' + val + '}';
          }
          
          str += base_sel + track_sel[1] + a + ',' + 
            base_sel + track_sel[2] + a + '{width:' + val + '}';
        }
        
        styles[idx] = str;
        style_el.textContent = styles.join('');
      }, false);
    }
}
app.directive('autoWidth', ['$timeout', function($timeout) {

    function setAutoWidth( sliders ){
      for (var i = 0; i < sliders.length; i++) {
        var slider = sliders[i];
        if(!slider.hasAttribute('justified')) {
          slider.style.width = '75%';
          slider.setAttribute('justified', '');
          break;
        }; 
      };
    }
    return function linkFunction(scope, el, attr) {          
      var interval = setInterval(function(){
      var sliders = document.querySelectorAll('div.slider-horizontal');

        if (sliders.length !== 0) {
          setAutoWidth( sliders );
          clearInterval(interval);
        };
        
      }, 100);
    }
}]);

