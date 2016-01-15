
app.directive("owlCarousel", function() {
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

        $(element).find('img').click(function(){
          $(element).find('.item').removeClass('active-item');
          $(this).parent().toggleClass('active-item');
          // ngModel.$setViewValue(this.value);
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
        console.log('model changed ', ngModel.$viewValue);      
      });

      el.find('input').on('change', function(){
        ngModel.$setViewValue(this.value);
      });

      ngModel.$render = function() {
        $timeout(updateSliderValue, 0);
      };

      $timeout(updateSliderValue, 0);
    }
  };
}]);

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

