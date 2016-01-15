'use strict';


angular.module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'ui.utils',
    'ui.load',
    'ui.jq',
    'oc.lazyLoad',
    'pascalprecht.translate'
]);
// config

var app =  
angular.module('app')
  .config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
        
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
    }
  ])
  .config(['$translateProvider', function($translateProvider){
    // Register a loader for the static files
    // So, the module will search missing translation tables under the specified urls.
    // Those urls are [prefix][langKey][suffix].
    $translateProvider.useStaticFilesLoader({
      prefix: 'l10n/',
      suffix: '.js'
    });
    // Tell the module what language to use by default
    $translateProvider.preferredLanguage('en');
    // Tell the module to store the language in the local storage
    $translateProvider.useLocalStorage();
  }]);
// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   '../shared-jslibs/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
      sparkline:      [   '../shared-jslibs/jquery.sparkline/dist/jquery.sparkline.retina.js'],
      plot:           [   '../shared-jslibs/flot/jquery.flot.js',
                          '../shared-jslibs/flot/jquery.flot.pie.js', 
                          '../shared-jslibs/flot/jquery.flot.resize.js',
                          '../shared-jslibs/flot/jquery.flot.spline.js',
                          '../shared-jslibs/flot.tooltip/js/jquery.flot.tooltip.js',
                          '../shared-jslibs/flot.orderbars/js/jquery.flot.orderBars.js'],
      moment:         [   '../shared-jslibs/moment/moment.js'],
      screenfull:     [   '../shared-jslibs/screenfull/dist/screenfull.min.js'],
      slimScroll:     [   '../shared-jslibs/slimscroll/jquery.slimscroll.min.js'],
      sortable:       [   '../shared-jslibs/html5sortable/jquery.sortable.js'],
      nestable:       [   '../shared-jslibs/nestable/jquery.nestable.js',
                          '../shared-jslibs/nestable/jquery.nestable.css'],
      filestyle:      [   '../shared-jslibs/bootstrap-filestyle/src/bootstrap-filestyle.js'],
      slider:         [   '../shared-jslibs/bootstrap-slider/bootstrap-slider.js',
                          '../shared-jslibs/bootstrap-slider/bootstrap-slider.css'],
      chosen:         [   '../shared-jslibs/chosen/chosen.jquery.js',
                          '../shared-jslibs/bootstrap-chosen/bootstrap-chosen.css'],
      TouchSpin:      [   '../shared-jslibs/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js',
                          '../shared-jslibs/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.css'],
      wysiwyg:        [   '../shared-jslibs/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          '../shared-jslibs/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      dataTable:      [   '../shared-jslibs/datatables/media/js/jquery.dataTables.js',
                          '../shared-jslibs/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          '../shared-jslibs/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      vectorMap:      [   '../shared-jslibs/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          '../shared-jslibs/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          '../shared-jslibs/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          '../shared-jslibs/bower-jvectormap/jquery-jvectormap-1.2.2.css'],
      footable:       [   '../shared-jslibs/footable/js/footable.js',
                          '../shared-jslibs/footable/css/footable.core.css'],
      fullcalendar:   [   '../shared-jslibs/moment/moment.js',
                          '../shared-jslibs/fullcalendar/dist/fullcalendar.js',
                          '../shared-jslibs/fullcalendar/dist/fullcalendar.css',
                          '../shared-jslibs/fullcalendar/dist/fullcalendar.theme.css'],
      daterangepicker:[   '../shared-jslibs/moment/moment.js',
                          '../shared-jslibs/bootstrap-daterangepicker/daterangepicker.js',
                          '../shared-jslibs/bootstrap-daterangepicker/daterangepicker-bs3.css'],
      tagsinput:      [   '../shared-jslibs/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          '../shared-jslibs/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']
                      
    }
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  true,
          events: true,
          modules: [
              {
                  name: 'ngGrid',
                  files: [
                      '../shared-jslibs/ng-grid/build/ng-grid.js',
                      '../shared-jslibs/ng-grid/ng-grid.css',
                      '../shared-jslibs/ng-grid/ng-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.grid',
                  files: [
                      '../shared-jslibs/angular-ui-grid/ui-grid.js',
                      '../shared-jslibs/angular-ui-grid/ui-grid.css',
                      '../shared-jslibs/angular-ui-grid/ui-grid.bootstrap.css'
                  ]
              },
              {
                  name: 'ui.select',
                  files: [
                      '../shared-jslibs/angular-ui-select/dist/select.js',
                      '../shared-jslibs/angular-ui-select/dist/select.css'
                  ]
              },
              {
                  name:'angularFileUpload',
                  files: [
                    '../shared-jslibs/angular-file-upload/angular-file-upload.js'
                  ]
              },
              {
                  name:'ui.calendar',
                  files: ['../shared-jslibs/angular-ui-calendar/src/calendar.js']
              },
              {
                  name: 'ngImgCrop',
                  files: [
                      '../shared-jslibs/ngImgCrop/compile/minified/ng-img-crop.js',
                      '../shared-jslibs/ngImgCrop/compile/minified/ng-img-crop.css'
                  ]
              },
              {
                  name: 'angularBootstrapNavTree',
                  files: [
                      '../shared-jslibs/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                      '../shared-jslibs/angular-bootstrap-nav-tree/dist/abn_tree.css'
                  ]
              },
              {
                  name: 'toaster',
                  files: [
                      '../shared-jslibs/angularjs-toaster/toaster.js',
                      '../shared-jslibs/angularjs-toaster/toaster.css'
                  ]
              },
              {
                  name: 'textAngular',
                  files: [
                      '../shared-jslibs/textAngular/src/textAngular-sanitize.js',
                      '../shared-jslibs/textAngular/src/textAngular.js',
                      '../shared-jslibs/textAngular/src/textAngularSetup.js'
                  ]
              },
              {
                  name: 'vr.directives.slider',
                  files: [
                      '../shared-jslibs/venturocket-angular-slider/build/angular-slider.js',
                      '../shared-jslibs/venturocket-angular-slider/build/angular-slider.css'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular',
                  files: [
                      '../shared-jslibs/videogular/videogular.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.controls',
                  files: [
                      '../shared-jslibs/videogular-controls/controls.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.buffering',
                  files: [
                      '../shared-jslibs/videogular-buffering/buffering.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.overlayplay',
                  files: [
                      '../shared-jslibs/videogular-overlay-play/overlay-play.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.poster',
                  files: [
                      '../shared-jslibs/videogular-poster/poster.min.js'
                  ]
              },
              {
                  name: 'com.2fdevs.videogular.plugins.imaads',
                  files: [
                      '../shared-jslibs/videogular-ima-ads/ima-ads.min.js'
                  ]
              },
              {
                  name: 'xeditable',
                  files: [
                      '../shared-jslibs/angular-xeditable/dist/js/xeditable.js',
                      '../shared-jslibs/angular-xeditable/dist/css/xeditable.css'
                  ]
              },
              {
                  name: 'smart-table',
                  files: [
                      '../shared-jslibs/angular-smart-table/dist/smart-table.min.js'
                  ]
              }
          ]
      });
  }])
;

'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG) {
          
          $urlRouterProvider
              .otherwise('/app/dashboard-v1');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'tpl/app.html'
              })
              .state('app.dashboard-v1', {
                  url: '/dashboard-v1',
                  templateUrl: 'tpl/app_dashboard_v1.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
                  }
              })
              .state('app.measure', {
                  url: '/measure',
                  templateUrl: 'js/app/measure/measure.html'
              })
              .state('app.dashboard-v2', {
                  url: '/dashboard-v2',
                  templateUrl: 'tpl/app_dashboard_v2.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                      function( $ocLazyLoad ){
                        return $ocLazyLoad.load(['js/controllers/chart.js']);
                    }]
                  }
              })
              .state('app.ui', {
                  url: '/ui',
                  template: '<div ui-view class="fade-in-up"></div>'
              })
              .state('app.ui.buttons', {
                  url: '/buttons',
                  templateUrl: 'tpl/ui_buttons.html'
              })
              .state('app.ui.icons', {
                  url: '/icons',
                  templateUrl: 'tpl/ui_icons.html'
              })
              .state('app.ui.grid', {
                  url: '/grid',
                  templateUrl: 'tpl/ui_grid.html'
              })
              .state('app.ui.widgets', {
                  url: '/widgets',
                  templateUrl: 'tpl/ui_widgets.html'
              })          
              .state('app.ui.bootstrap', {
                  url: '/bootstrap',
                  templateUrl: 'tpl/ui_bootstrap.html'
              })
              .state('app.ui.sortable', {
                  url: '/sortable',
                  templateUrl: 'tpl/ui_sortable.html'
              })
              .state('app.ui.scroll', {
                  url: '/scroll',
                  templateUrl: 'tpl/ui_scroll.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad){
                          return uiLoad.load('js/controllers/scroll.js');
                      }]
                  }
              })
              .state('app.ui.portlet', {
                  url: '/portlet',
                  templateUrl: 'tpl/ui_portlet.html'
              })
              .state('app.ui.timeline', {
                  url: '/timeline',
                  templateUrl: 'tpl/ui_timeline.html'
              })
              .state('app.ui.tree', {
                  url: '/tree',
                  templateUrl: 'tpl/ui_tree.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('angularBootstrapNavTree').then(
                              function(){
                                 return $ocLazyLoad.load('js/controllers/tree.js');
                              }
                          );
                        }
                      ]
                  }
              })
              .state('app.ui.toaster', {
                  url: '/toaster',
                  templateUrl: 'tpl/ui_toaster.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load('toaster').then(
                              function(){
                                 return $ocLazyLoad.load('js/controllers/toaster.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.ui.jvectormap', {
                  url: '/jvectormap',
                  templateUrl: 'tpl/ui_jvectormap.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load('js/controllers/vectormap.js');
                      }]
                  }
              })
              .state('app.ui.googlemap', {
                  url: '/googlemap',
                  templateUrl: 'tpl/ui_googlemap.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( [
                            'js/app/map/load-google-maps.js',
                            'js/app/map/ui-map.js',
                            'js/app/map/map.js'] ).then(
                              function(){
                                return loadGoogleMaps(); 
                              }
                            );
                      }]
                  }
              })
              .state('app.chart', {
                  url: '/chart',
                  templateUrl: 'tpl/ui_chart.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad){
                          return uiLoad.load('js/controllers/chart.js');
                      }]
                  }
              })
              // table
              .state('app.table', {
                  url: '/table',
                  template: '<div ui-view></div>'
              })
              .state('app.table.static', {
                  url: '/static',
                  templateUrl: 'tpl/table_static.html'
              })
              .state('app.table.datatable', {
                  url: '/datatable',
                  templateUrl: 'tpl/table_datatable.html'
              })
              .state('app.table.footable', {
                  url: '/footable',
                  templateUrl: 'tpl/table_footable.html'
              })
              .state('app.table.grid', {
                  url: '/grid',
                  templateUrl: 'tpl/table_grid.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('ngGrid').then(
                              function(){
                                  return $ocLazyLoad.load('js/controllers/grid.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.table.uigrid', {
                  url: '/uigrid',
                  templateUrl: 'tpl/table_uigrid.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('ui.grid').then(
                              function(){
                                  return $ocLazyLoad.load('js/controllers/uigrid.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.table.editable', {
                  url: '/editable',
                  templateUrl: 'tpl/table_editable.html',
                  controller: 'XeditableCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('xeditable').then(
                              function(){
                                  return $ocLazyLoad.load('js/controllers/xeditable.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.table.smart', {
                  url: '/smart',
                  templateUrl: 'tpl/table_smart.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('smart-table').then(
                              function(){
                                  return $ocLazyLoad.load('js/controllers/table.js');
                              }
                          );
                      }]
                  }
              })
              // form
              .state('app.form', {
                  url: '/form',
                  template: '<div ui-view class="fade-in"></div>',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load('js/controllers/form.js');
                      }]
                  }
              })
              .state('app.form.components', {
                  url: '/components',
                  templateUrl: 'tpl/form_components.html',
                  resolve: {
                      deps: ['uiLoad', '$ocLazyLoad',
                        function( uiLoad, $ocLazyLoad ){
                          return uiLoad.load( JQ_CONFIG.daterangepicker )
                          .then(
                              function(){
                                return uiLoad.load('js/controllers/form.components.js');
                              }
                          ).then(
                              function(){
                                return $ocLazyLoad.load('ngBootstrap');
                              }
                          );
                        }
                      ]
                  }
              })
              .state('app.form.elements', {
                  url: '/elements',
                  templateUrl: 'tpl/form_elements.html'
              })
              .state('app.form.validation', {
                  url: '/validation',
                  templateUrl: 'tpl/form_validation.html'
              })
              .state('app.form.wizard', {
                  url: '/wizard',
                  templateUrl: 'tpl/form_wizard.html'
              })
              .state('app.form.fileupload', {
                  url: '/fileupload',
                  templateUrl: 'tpl/form_fileupload.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load('angularFileUpload').then(
                              function(){
                                 return $ocLazyLoad.load('js/controllers/file-upload.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.form.imagecrop', {
                  url: '/imagecrop',
                  templateUrl: 'tpl/form_imagecrop.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad){
                          return $ocLazyLoad.load('ngImgCrop').then(
                              function(){
                                 return $ocLazyLoad.load('js/controllers/imgcrop.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.form.select', {
                  url: '/select',
                  templateUrl: 'tpl/form_select.html',
                  controller: 'SelectCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('ui.select').then(
                              function(){
                                  return $ocLazyLoad.load('js/controllers/select.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.form.slider', {
                  url: '/slider',
                  templateUrl: 'tpl/form_slider.html',
                  controller: 'SliderCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('vr.directives.slider').then(
                              function(){
                                  return $ocLazyLoad.load('js/controllers/slider.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.form.editor', {
                  url: '/editor',
                  templateUrl: 'tpl/form_editor.html',
                  controller: 'EditorCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('textAngular').then(
                              function(){
                                  return $ocLazyLoad.load('js/controllers/editor.js');
                              }
                          );
                      }]
                  }
              })
              .state('app.form.xeditable', {
                  url: '/xeditable',
                  templateUrl: 'tpl/form_xeditable.html',
                  controller: 'XeditableCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load('xeditable').then(
                              function(){
                                  return $ocLazyLoad.load('js/controllers/xeditable.js');
                              }
                          );
                      }]
                  }
              })
              // pages
              .state('app.page', {
                  url: '/page',
                  template: '<div ui-view class="fade-in-down"></div>'
              })
              .state('app.page.profile', {
                  url: '/profile',
                  templateUrl: 'tpl/page_profile.html'
              })
              .state('app.page.post', {
                  url: '/post',
                  templateUrl: 'tpl/page_post.html'
              })
              .state('app.page.search', {
                  url: '/search',
                  templateUrl: 'tpl/page_search.html'
              })
              .state('app.page.invoice', {
                  url: '/invoice',
                  templateUrl: 'tpl/page_invoice.html'
              })
              .state('app.page.price', {
                  url: '/price',
                  templateUrl: 'tpl/page_price.html'
              })
              .state('app.docs', {
                  url: '/docs',
                  templateUrl: 'tpl/docs.html'
              })
              // others
              .state('lockme', {
                  url: '/lockme',
                  templateUrl: 'tpl/page_lockme.html'
              })
              .state('access', {
                  url: '/access',
                  template: '<div ui-view class="fade-in-right-big smooth"></div>'
              })
              .state('access.signin', {
                  url: '/signin',
                  templateUrl: 'tpl/page_signin.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/controllers/signin.js'] );
                      }]
                  }
              })
              .state('access.signup', {
                  url: '/signup',
                  templateUrl: 'tpl/page_signup.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/controllers/signup.js'] );
                      }]
                  }
              })
              .state('access.forgotpwd', {
                  url: '/forgotpwd',
                  templateUrl: 'tpl/page_forgotpwd.html'
              })
              .state('access.404', {
                  url: '/404',
                  templateUrl: 'tpl/page_404.html'
              })

              // fullCalendar
              .state('app.calendar', {
                  url: '/calendar',
                  templateUrl: 'tpl/app_calendar.html',
                  // use resolve to load other dependences
                  resolve: {
                      deps: ['$ocLazyLoad', 'uiLoad',
                        function( $ocLazyLoad, uiLoad ){
                          return uiLoad.load(
                            JQ_CONFIG.fullcalendar.concat('js/app/calendar/calendar.js')
                          ).then(
                            function(){
                              return $ocLazyLoad.load('ui.calendar');
                            }
                          )
                      }]
                  }
              })

              // mail
              .state('app.mail', {
                  abstract: true,
                  url: '/mail',
                  templateUrl: 'tpl/mail.html',
                  // use resolve to load other dependences
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/app/mail/mail.js',
                                               'js/app/mail/mail-service.js',
                                               JQ_CONFIG.moment] );
                      }]
                  }
              })
              .state('app.mail.list', {
                  url: '/inbox/{fold}',
                  templateUrl: 'tpl/mail.list.html'
              })
              .state('app.mail.detail', {
                  url: '/{mailId:[0-9]{1,4}}',
                  templateUrl: 'tpl/mail.detail.html'
              })
              .state('app.mail.compose', {
                  url: '/compose',
                  templateUrl: 'tpl/mail.new.html'
              })

              .state('layout', {
                  abstract: true,
                  url: '/layout',
                  templateUrl: 'tpl/layout.html'
              })
              .state('layout.fullwidth', {
                  url: '/fullwidth',
                  views: {
                      '': {
                          templateUrl: 'tpl/layout_fullwidth.html'
                      },
                      'footer': {
                          templateUrl: 'tpl/layout_footer_fullwidth.html'
                      }
                  },
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/controllers/vectormap.js'] );
                      }]
                  }
              })
              .state('layout.mobile', {
                  url: '/mobile',
                  views: {
                      '': {
                          templateUrl: 'tpl/layout_mobile.html'
                      },
                      'footer': {
                          templateUrl: 'tpl/layout_footer_mobile.html'
                      }
                  }
              })
              .state('layout.app', {
                  url: '/app',
                  views: {
                      '': {
                          templateUrl: 'tpl/layout_app.html'
                      },
                      'footer': {
                          templateUrl: 'tpl/layout_footer_fullwidth.html'
                      }
                  },
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/controllers/tab.js'] );
                      }]
                  }
              })
              .state('apps', {
                  abstract: true,
                  url: '/apps',
                  templateUrl: 'tpl/layout.html'
              })
              .state('apps.note', {
                  url: '/note',
                  templateUrl: 'tpl/apps_note.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/app/note/note.js',
                                               JQ_CONFIG.moment] );
                      }]
                  }
              })
              .state('apps.contact', {
                  url: '/contact',
                  templateUrl: 'tpl/apps_contact.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/app/contact/contact.js'] );
                      }]
                  }
              })
              .state('app.weather', {
                  url: '/weather',
                  templateUrl: 'tpl/apps_weather.html',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load(
                              {
                                  name: 'angular-skycons',
                                  files: ['js/app/weather/skycons.js',
                                          'js/app/weather/angular-skycons.js',
                                          'js/app/weather/ctrl.js',
                                          JQ_CONFIG.moment ] 
                              }
                          );
                      }]
                  }
              })
              .state('app.todo', {
                  url: '/todo',
                  templateUrl: 'tpl/apps_todo.html',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad ){
                          return uiLoad.load( ['js/app/todo/todo.js',
                                               JQ_CONFIG.moment] );
                      }]
                  }
              })
              .state('app.todo.list', {
                  url: '/{fold}'
              })
              .state('music', {
                  url: '/music',
                  templateUrl: 'tpl/music.html',
                  controller: 'MusicCtrl',
                  resolve: {
                      deps: ['$ocLazyLoad',
                        function( $ocLazyLoad ){
                          return $ocLazyLoad.load([
                            'com.2fdevs.videogular', 
                            'com.2fdevs.videogular.plugins.controls', 
                            'com.2fdevs.videogular.plugins.overlayplay',
                            'com.2fdevs.videogular.plugins.poster',
                            'com.2fdevs.videogular.plugins.buffering',
                            'js/app/music/ctrl.js', 
                            'js/app/music/theme.css'
                          ]);
                      }]
                  }
              })
                .state('music.home', {
                    url: '/home',
                    templateUrl: 'tpl/music.home.html'
                })
                .state('music.genres', {
                    url: '/genres',
                    templateUrl: 'tpl/music.genres.html'
                })
                .state('music.detail', {
                    url: '/detail',
                    templateUrl: 'tpl/music.detail.html'
                })
                .state('music.mtv', {
                    url: '/mtv',
                    templateUrl: 'tpl/music.mtv.html'
                })
                .state('music.mtvdetail', {
                    url: '/mtvdetail',
                    templateUrl: 'tpl/music.mtv.detail.html'
                })
                .state('music.playlist', {
                    url: '/playlist/{fold}',
                    templateUrl: 'tpl/music.playlist.html'
                })
      }
    ]
  );

'use strict';

/* Controllers */

angular.module('app')
  .controller('AppCtrl', ['$scope', '$translate', '$localStorage', '$window', 
    function(              $scope,   $translate,   $localStorage,   $window ) {
      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');

      // config
      $scope.app = {
        name: 'StitchIt',
        version: '0.0.1',
        // for chart colors
        color: {
          primary: '#7266ba',
          info:    '#23b7e5',
          success: '#27c24c',
          warning: '#fad733',
          danger:  '#f05050',
          light:   '#e8eff0',
          dark:    '#3a3f51',
          black:   '#1c2b36'
        },
        settings: {
          themeID: 1,
          navbarHeaderColor: 'bg-black',
          navbarCollapseColor: 'bg-white-only',
          asideColor: 'bg-black',
          headerFixed: true,
          asideFixed: false,
          asideFolded: false,
          asideDock: false,
          container: false
        }
      }

      // save settings to local storage
      if ( angular.isDefined($localStorage.settings) ) {
        $scope.app.settings = $localStorage.settings;
      } else {
        $localStorage.settings = $scope.app.settings;
      }
      $scope.$watch('app.settings', function(){
        if( $scope.app.settings.asideDock  &&  $scope.app.settings.asideFixed ){
          // aside dock and fixed must set the header fixed.
          $scope.app.settings.headerFixed = true;
        }
        // save to local storage
        $localStorage.settings = $scope.app.settings;
      }, true);

      // angular translate
      $scope.lang = { isopen: false };
      $scope.langs = {en:'English', de_DE:'German', it_IT:'Italian'};
      $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
      $scope.setLang = function(langKey, $event) {
        // set the current lang
        $scope.selectLang = $scope.langs[langKey];
        // You can change the language during runtime
        $translate.use(langKey);
        $scope.lang.isopen = !$scope.lang.isopen;
      };

      function isSmartDevice( $window )
      {
          // Adapted from http://www.detectmobilebrowsers.com
          var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
          // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
          return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      }

  }]);

'use strict';

/* Controllers */

  // bootstrap controller
  app.controller('AccordionDemoCtrl', ['$scope', function($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
      {
        title: 'Accordion group header - #1',
        content: 'Dynamic group body - #1'
      },
      {
        title: 'Accordion group header - #2',
        content: 'Dynamic group body - #2'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
  }])
  ; 
  app.controller('AlertDemoCtrl', ['$scope', function($scope) {
    $scope.alerts = [
      { type: 'success', msg: 'Well done! You successfully read this important alert message.' },
      { type: 'info', msg: 'Heads up! This alert needs your attention, but it is not super important.' },
      { type: 'warning', msg: 'Warning! Best check yo self, you are not looking too good...' }
    ];

    $scope.addAlert = function() {
      $scope.alerts.push({type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'});
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
  }])
  ; 
  app.controller('ButtonsDemoCtrl', ['$scope', function($scope) {
    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
      left: false,
      middle: true,
      right: false
    };
  }])
  ; 
  app.controller('CarouselDemoCtrl', ['$scope', function($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      slides.push({
        image: 'img/c' + slides.length + '.jpg',
        text: ['Carousel text #0','Carousel text #1','Carousel text #2','Carousel text #3'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }
  }])
  ; 
  app.controller('DropdownDemoCtrl', ['$scope', function($scope) {
    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      //console.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };
  }])
  ; 
  app.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'items', function($scope, $modalInstance, items) {
    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };

    $scope.ok = function () {
      $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }])
  ; 
  app.controller('ModalDemoCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.open = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  }])
  ; 
  app.controller('PaginationDemoCtrl', ['$scope', '$log', function($scope, $log) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.info('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
  }])
  ; 
  app.controller('PopoverDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicPopover = 'Hello, World!';
    $scope.dynamicPopoverTitle = 'Title';
  }])
  ; 
  app.controller('ProgressDemoCtrl', ['$scope', function($scope) {
    $scope.max = 200;

    $scope.random = function() {
      var value = Math.floor((Math.random() * 100) + 1);
      var type;

      if (value < 25) {
        type = 'success';
      } else if (value < 50) {
        type = 'info';
      } else if (value < 75) {
        type = 'warning';
      } else {
        type = 'danger';
      }

      $scope.showWarning = (type === 'danger' || type === 'warning');

      $scope.dynamic = value;
      $scope.type = type;
    };
    $scope.random();

    $scope.randomStacked = function() {
      $scope.stacked = [];
      var types = ['success', 'info', 'warning', 'danger'];

      for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
          var index = Math.floor((Math.random() * 4));
          $scope.stacked.push({
            value: Math.floor((Math.random() * 30) + 1),
            type: types[index]
          });
      }
    };
    $scope.randomStacked();
  }])
  ; 
  app.controller('TabsDemoCtrl', ['$scope', function($scope) {
    $scope.tabs = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];
  }])
  ; 
  app.controller('RatingDemoCtrl', ['$scope', function($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };
  }])
  ; 
  app.controller('TooltipDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicTooltip = 'Hello, World!';
    $scope.dynamicTooltipText = 'dynamic';
    $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
  }])
  ; 
  app.controller('TypeaheadDemoCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.selected = undefined;
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    // Any function returning a promise object can be used to load values asynchronously
    $scope.getLocation = function(val) {
      return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: val,
          sensor: false
        }
      }).then(function(res){
        var addresses = [];
        angular.forEach(res.data.results, function(item){
          addresses.push(item.formatted_address);
        });
        return addresses;
      });
    };
  }])
  ; 
  app.controller('DatepickerDemoCtrl', ['$scope', function($scope) {
    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
      $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function(date, mode) {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1,
      class: 'datepicker'
    };

    $scope.initDate = new Date('2016-15-20');
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
  }])
  ; 
  app.controller('TimepickerDemoCtrl', ['$scope', function($scope) {
    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
      hstep: [1, 2, 3],
      mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function() {
      $scope.ismeridian = ! $scope.ismeridian;
    };

    $scope.update = function() {
      var d = new Date();
      d.setHours( 14 );
      d.setMinutes( 0 );
      $scope.mytime = d;
    };

    $scope.changed = function () {
      //console.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function() {
      $scope.mytime = null;
    };
  }]);
'use strict';

/* Controllers */

app
  // Flot Chart controller 
  .controller('FlotChartDemoCtrl', ['$scope', function($scope) {
    $scope.d = [ [1,6.5],[2,6.5],[3,7],[4,8],[5,7.5],[6,7],[7,6.8],[8,7],[9,7.2],[10,7],[11,6.8],[12,7] ];

    $scope.d0_1 = [ [0,7],[1,6.5],[2,12.5],[3,7],[4,9],[5,6],[6,11],[7,6.5],[8,8],[9,7] ];

    $scope.d0_2 = [ [0,4],[1,4.5],[2,7],[3,4.5],[4,3],[5,3.5],[6,6],[7,3],[8,4],[9,3] ];

    $scope.d1_1 = [ [10, 120], [20, 70], [30, 70], [40, 60] ];

    $scope.d1_2 = [ [10, 50],  [20, 60], [30, 90],  [40, 35] ];

    $scope.d1_3 = [ [10, 80],  [20, 40], [30, 30],  [40, 20] ];

    $scope.d2 = [];

    for (var i = 0; i < 20; ++i) {
      $scope.d2.push([i, Math.round( Math.sin(i)*100)/100] );
    }   

    $scope.d3 = [ 
      { label: "iPhone5S", data: 40 }, 
      { label: "iPad Mini", data: 10 },
      { label: "iPad Mini Retina", data: 20 },
      { label: "iPhone4S", data: 12 },
      { label: "iPad Air", data: 18 }
    ];

    $scope.refreshData = function(){
      $scope.d0_1 = $scope.d0_2;
    };

    $scope.getRandomData = function() {
      var data = [],
      totalPoints = 150;
      if (data.length > 0)
        data = data.slice(1);
      while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50,
          y = prev + Math.random() * 10 - 5;
        if (y < 0) {
          y = 0;
        } else if (y > 100) {
          y = 100;
        }
        data.push(Math.round(y*100)/100);
      }
      // Zip the generated y values with the x values
      var res = [];
      for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
      }
      return res;
    }

    $scope.d4 = $scope.getRandomData();
  }]);
app.controller('EditorCtrl', function($scope) {
  $scope.htmlVariable = '<h3>Try me!</h3><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li style="color: blue;">Super Easy <b>Theming</b> Options</li><li>Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li>Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><b>Code at GitHub:</b> <a href="https://github.com/fraywing/textAngular">Here</a> </p>';
});
app.controller('FileUploadCtrl', ['$scope', 'FileUploader', function($scope, FileUploader) {
    var uploader = $scope.uploader = new FileUploader({
        url: 'js/controllers/upload.php'
    });

    // FILTERS

    uploader.filters.push({
        name: 'customFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            return this.queue.length < 10;
        }
    });

    // CALLBACKS

    uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function(fileItem) {
        console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function(addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function(item) {
        console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function(fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function(progress) {
        console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
        console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function(fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function(fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function() {
        console.info('onCompleteAll');
    };

    console.info('uploader', uploader);
}]);
'use strict';

/* Controllers */

  // Form controller
app.controller('FormDemoCtrl', ['$scope', function($scope) {
    $scope.notBlackListed = function(value) {
      var blacklist = ['bad@domain.com','verybad@domain.com'];
      return blacklist.indexOf(value) === -1;
    }

    $scope.val = 15;
    var updateModel = function(val){
      $scope.$apply(function(){
        $scope.val = val;
      });
    };
    angular.element("#slider").on('slideStop', function(data){
      updateModel(data.value);
    });

    $scope.select2Number = [
      {text:'First',  value:'One'},
      {text:'Second', value:'Two'},
      {text:'Third',  value:'Three'}
    ];

    $scope.list_of_string = ['tag1', 'tag2']
    $scope.select2Options = {
        'multiple': true,
        'simple_tags': true,
        'tags': ['tag1', 'tag2', 'tag3', 'tag4']  // Can be empty list.
    };

    angular.element("#LinkInput").bind('click', function (event) {
      event.stopPropagation();
    });

    $scope.datePicker = function (start, end, label) {
      
    }
}]);

app.controller('GridDemoCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.filterOptions = {
        filterText: "",
        useExternalFilter: true
    }; 
    $scope.totalServerItems = 0;
    $scope.pagingOptions = {
        pageSizes: [250, 500, 1000],
        pageSize: 250,
        currentPage: 1
    };  
    $scope.setPagingData = function(data, page, pageSize){  
        var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
        $scope.myData = pagedData;
        $scope.totalServerItems = data.length;
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    };
    $scope.getPagedDataAsync = function (pageSize, page, searchText) {
        setTimeout(function () {
            var data;
            if (searchText) {
                var ft = searchText.toLowerCase();
                $http.get('js/controllers/largeLoad.json').success(function (largeLoad) {    
                    data = largeLoad.filter(function(item) {
                        return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
                    });
                    $scope.setPagingData(data,page,pageSize);
                });            
            } else {
                $http.get('js/controllers/largeLoad.json').success(function (largeLoad) {
                    $scope.setPagingData(largeLoad,page,pageSize);
                });
            }
        }, 100);
    };

    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

    $scope.$watch('pagingOptions', function (newVal, oldVal) {
        if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);
    $scope.$watch('filterOptions', function (newVal, oldVal) {
        if (newVal !== oldVal) {
          $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
        }
    }, true);

    $scope.gridOptions = {
        data: 'myData',
        enablePaging: true,
        showFooter: true,
        rowHeight: 36,
        headerRowHeight: 36,
        totalServerItems: 'totalServerItems',
        pagingOptions: $scope.pagingOptions,
        filterOptions: $scope.filterOptions
    };
}]);

app.controller('ImgCropCtrl', ['$scope', function($scope) {
    $scope.myImage='';
    $scope.myCroppedImage='';
    $scope.cropType="circle";

    var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage=evt.target.result;
        });
      };
      reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
}]);
app.controller('ScrollController', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.datasource = {
		get : function(index, count, success) {
            return $timeout(function() {
                var i, result, _i, _ref;
                result = [];
                for (i = _i = index, _ref = index + count - 1; index <= _ref ? _i <= _ref : _i >= _ref; i = index <= _ref ? ++_i : --_i) {
                    result.push('item #' + i);
                }
                return success(result);
            }, 100);
         }
	};
}]);

// this is a lazy load controller, 
// so start with "app." to register this controller

app.filter('propsFilter', function() {
    return function(items, props) {
        var out = [];

        if (angular.isArray(items)) {
          items.forEach(function(item) {
            var itemMatches = false;

            var keys = Object.keys(props);
            for (var i = 0; i < keys.length; i++) {
              var prop = keys[i];
              var text = props[prop].toLowerCase();
              if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                itemMatches = true;
                break;
              }
            }

            if (itemMatches) {
              out.push(item);
            }
          });
        } else {
          // Let the output be the input untouched
          out = items;
        }

        return out;
    };
})
app.controller('SelectCtrl', function($scope, $http, $timeout) {
        $scope.disabled = undefined;
        $scope.searchEnabled = undefined;

        $scope.enable = function() {
        $scope.disabled = false;
        };

        $scope.disable = function() {
        $scope.disabled = true;
        };

        $scope.enableSearch = function() {
        $scope.searchEnabled = true;
        }

        $scope.disableSearch = function() {
        $scope.searchEnabled = false;
        }

        $scope.clear = function() {
        $scope.person.selected = undefined;
        $scope.address.selected = undefined;
        $scope.country.selected = undefined;
        };

        $scope.someGroupFn = function (item){

        if (item.name[0] >= 'A' && item.name[0] <= 'M')
            return 'From A - M';

        if (item.name[0] >= 'N' && item.name[0] <= 'Z')
            return 'From N - Z';

        };

        $scope.personAsync = {selected : "wladimir@email.com"};
        $scope.peopleAsync = [];

        $timeout(function(){
        $scope.peopleAsync = [
            { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
            { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
            { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
            { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
            { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
            { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
            { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
            { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
            { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
            { name: 'Nicolás',   email: 'nicole@email.com',    age: 43, country: 'Colombia' }
          ];
        },3000);

        $scope.counter = 0;
        $scope.someFunction = function (item, model){
        $scope.counter++;
        $scope.eventResult = {item: item, model: model};
        };

        $scope.removed = function (item, model) {
        $scope.lastRemoved = {
            item: item,
            model: model
        };
        };

        $scope.person = {};
        $scope.people = [
        { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
        { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
        { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
        { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
        { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
        { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
        { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
        { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
        { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
        { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
        ];

        $scope.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

        $scope.multipleDemo = {};
        $scope.multipleDemo.colors = ['Blue','Red'];
        $scope.multipleDemo.selectedPeople = [$scope.people[5], $scope.people[4]];
        $scope.multipleDemo.selectedPeopleWithGroupBy = [$scope.people[8], $scope.people[6]];
        $scope.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];


        $scope.address = {};
        $scope.refreshAddresses = function(address) {
        var params = {address: address, sensor: false};
        return $http.get(
          'http://maps.googleapis.com/maps/api/geocode/json',
          {params: params}
        ).then(function(response) {
          $scope.addresses = response.data.results;
        });
        };

        $scope.country = {};
        $scope.countries = [ // Taken from https://gist.github.com/unceus/6501985
        {name: 'Afghanistan', code: 'AF'},
        {name: 'Åland Islands', code: 'AX'},
        {name: 'Albania', code: 'AL'},
        {name: 'Algeria', code: 'DZ'},
        {name: 'American Samoa', code: 'AS'},
        {name: 'Andorra', code: 'AD'},
        {name: 'Angola', code: 'AO'},
        {name: 'Anguilla', code: 'AI'},
        {name: 'Antarctica', code: 'AQ'},
        {name: 'Antigua and Barbuda', code: 'AG'},
        {name: 'Argentina', code: 'AR'},
        {name: 'Armenia', code: 'AM'},
        {name: 'Aruba', code: 'AW'},
        {name: 'Australia', code: 'AU'},
        {name: 'Austria', code: 'AT'},
        {name: 'Azerbaijan', code: 'AZ'},
        {name: 'Bahamas', code: 'BS'},
        {name: 'Bahrain', code: 'BH'},
        {name: 'Bangladesh', code: 'BD'},
        {name: 'Barbados', code: 'BB'},
        {name: 'Belarus', code: 'BY'},
        {name: 'Belgium', code: 'BE'},
        {name: 'Belize', code: 'BZ'},
        {name: 'Benin', code: 'BJ'},
        {name: 'Bermuda', code: 'BM'},
        {name: 'Bhutan', code: 'BT'},
        {name: 'Bolivia', code: 'BO'},
        {name: 'Bosnia and Herzegovina', code: 'BA'},
        {name: 'Botswana', code: 'BW'},
        {name: 'Bouvet Island', code: 'BV'},
        {name: 'Brazil', code: 'BR'},
        {name: 'British Indian Ocean Territory', code: 'IO'},
        {name: 'Brunei Darussalam', code: 'BN'},
        {name: 'Bulgaria', code: 'BG'},
        {name: 'Burkina Faso', code: 'BF'},
        {name: 'Burundi', code: 'BI'},
        {name: 'Cambodia', code: 'KH'},
        {name: 'Cameroon', code: 'CM'},
        {name: 'Canada', code: 'CA'},
        {name: 'Cape Verde', code: 'CV'},
        {name: 'Cayman Islands', code: 'KY'},
        {name: 'Central African Republic', code: 'CF'},
        {name: 'Chad', code: 'TD'},
        {name: 'Chile', code: 'CL'},
        {name: 'China', code: 'CN'},
        {name: 'Christmas Island', code: 'CX'},
        {name: 'Cocos (Keeling) Islands', code: 'CC'},
        {name: 'Colombia', code: 'CO'},
        {name: 'Comoros', code: 'KM'},
        {name: 'Congo', code: 'CG'},
        {name: 'Congo, The Democratic Republic of the', code: 'CD'},
        {name: 'Cook Islands', code: 'CK'},
        {name: 'Costa Rica', code: 'CR'},
        {name: 'Cote D\'Ivoire', code: 'CI'},
        {name: 'Croatia', code: 'HR'},
        {name: 'Cuba', code: 'CU'},
        {name: 'Cyprus', code: 'CY'},
        {name: 'Czech Republic', code: 'CZ'},
        {name: 'Denmark', code: 'DK'},
        {name: 'Djibouti', code: 'DJ'},
        {name: 'Dominica', code: 'DM'},
        {name: 'Dominican Republic', code: 'DO'},
        {name: 'Ecuador', code: 'EC'},
        {name: 'Egypt', code: 'EG'},
        {name: 'El Salvador', code: 'SV'},
        {name: 'Equatorial Guinea', code: 'GQ'},
        {name: 'Eritrea', code: 'ER'},
        {name: 'Estonia', code: 'EE'},
        {name: 'Ethiopia', code: 'ET'},
        {name: 'Falkland Islands (Malvinas)', code: 'FK'},
        {name: 'Faroe Islands', code: 'FO'},
        {name: 'Fiji', code: 'FJ'},
        {name: 'Finland', code: 'FI'},
        {name: 'France', code: 'FR'},
        {name: 'French Guiana', code: 'GF'},
        {name: 'French Polynesia', code: 'PF'},
        {name: 'French Southern Territories', code: 'TF'},
        {name: 'Gabon', code: 'GA'},
        {name: 'Gambia', code: 'GM'},
        {name: 'Georgia', code: 'GE'},
        {name: 'Germany', code: 'DE'},
        {name: 'Ghana', code: 'GH'},
        {name: 'Gibraltar', code: 'GI'},
        {name: 'Greece', code: 'GR'},
        {name: 'Greenland', code: 'GL'},
        {name: 'Grenada', code: 'GD'},
        {name: 'Guadeloupe', code: 'GP'},
        {name: 'Guam', code: 'GU'},
        {name: 'Guatemala', code: 'GT'},
        {name: 'Guernsey', code: 'GG'},
        {name: 'Guinea', code: 'GN'},
        {name: 'Guinea-Bissau', code: 'GW'},
        {name: 'Guyana', code: 'GY'},
        {name: 'Haiti', code: 'HT'},
        {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
        {name: 'Holy See (Vatican City State)', code: 'VA'},
        {name: 'Honduras', code: 'HN'},
        {name: 'Hong Kong', code: 'HK'},
        {name: 'Hungary', code: 'HU'},
        {name: 'Iceland', code: 'IS'},
        {name: 'India', code: 'IN'},
        {name: 'Indonesia', code: 'ID'},
        {name: 'Iran, Islamic Republic Of', code: 'IR'},
        {name: 'Iraq', code: 'IQ'},
        {name: 'Ireland', code: 'IE'},
        {name: 'Isle of Man', code: 'IM'},
        {name: 'Israel', code: 'IL'},
        {name: 'Italy', code: 'IT'},
        {name: 'Jamaica', code: 'JM'},
        {name: 'Japan', code: 'JP'},
        {name: 'Jersey', code: 'JE'},
        {name: 'Jordan', code: 'JO'},
        {name: 'Kazakhstan', code: 'KZ'},
        {name: 'Kenya', code: 'KE'},
        {name: 'Kiribati', code: 'KI'},
        {name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
        {name: 'Korea, Republic of', code: 'KR'},
        {name: 'Kuwait', code: 'KW'},
        {name: 'Kyrgyzstan', code: 'KG'},
        {name: 'Lao People\'s Democratic Republic', code: 'LA'},
        {name: 'Latvia', code: 'LV'},
        {name: 'Lebanon', code: 'LB'},
        {name: 'Lesotho', code: 'LS'},
        {name: 'Liberia', code: 'LR'},
        {name: 'Libyan Arab Jamahiriya', code: 'LY'},
        {name: 'Liechtenstein', code: 'LI'},
        {name: 'Lithuania', code: 'LT'},
        {name: 'Luxembourg', code: 'LU'},
        {name: 'Macao', code: 'MO'},
        {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
        {name: 'Madagascar', code: 'MG'},
        {name: 'Malawi', code: 'MW'},
        {name: 'Malaysia', code: 'MY'},
        {name: 'Maldives', code: 'MV'},
        {name: 'Mali', code: 'ML'},
        {name: 'Malta', code: 'MT'},
        {name: 'Marshall Islands', code: 'MH'},
        {name: 'Martinique', code: 'MQ'},
        {name: 'Mauritania', code: 'MR'},
        {name: 'Mauritius', code: 'MU'},
        {name: 'Mayotte', code: 'YT'},
        {name: 'Mexico', code: 'MX'},
        {name: 'Micronesia, Federated States of', code: 'FM'},
        {name: 'Moldova, Republic of', code: 'MD'},
        {name: 'Monaco', code: 'MC'},
        {name: 'Mongolia', code: 'MN'},
        {name: 'Montserrat', code: 'MS'},
        {name: 'Morocco', code: 'MA'},
        {name: 'Mozambique', code: 'MZ'},
        {name: 'Myanmar', code: 'MM'},
        {name: 'Namibia', code: 'NA'},
        {name: 'Nauru', code: 'NR'},
        {name: 'Nepal', code: 'NP'},
        {name: 'Netherlands', code: 'NL'},
        {name: 'Netherlands Antilles', code: 'AN'},
        {name: 'New Caledonia', code: 'NC'},
        {name: 'New Zealand', code: 'NZ'},
        {name: 'Nicaragua', code: 'NI'},
        {name: 'Niger', code: 'NE'},
        {name: 'Nigeria', code: 'NG'},
        {name: 'Niue', code: 'NU'},
        {name: 'Norfolk Island', code: 'NF'},
        {name: 'Northern Mariana Islands', code: 'MP'},
        {name: 'Norway', code: 'NO'},
        {name: 'Oman', code: 'OM'},
        {name: 'Pakistan', code: 'PK'},
        {name: 'Palau', code: 'PW'},
        {name: 'Palestinian Territory, Occupied', code: 'PS'},
        {name: 'Panama', code: 'PA'},
        {name: 'Papua New Guinea', code: 'PG'},
        {name: 'Paraguay', code: 'PY'},
        {name: 'Peru', code: 'PE'},
        {name: 'Philippines', code: 'PH'},
        {name: 'Pitcairn', code: 'PN'},
        {name: 'Poland', code: 'PL'},
        {name: 'Portugal', code: 'PT'},
        {name: 'Puerto Rico', code: 'PR'},
        {name: 'Qatar', code: 'QA'},
        {name: 'Reunion', code: 'RE'},
        {name: 'Romania', code: 'RO'},
        {name: 'Russian Federation', code: 'RU'},
        {name: 'Rwanda', code: 'RW'},
        {name: 'Saint Helena', code: 'SH'},
        {name: 'Saint Kitts and Nevis', code: 'KN'},
        {name: 'Saint Lucia', code: 'LC'},
        {name: 'Saint Pierre and Miquelon', code: 'PM'},
        {name: 'Saint Vincent and the Grenadines', code: 'VC'},
        {name: 'Samoa', code: 'WS'},
        {name: 'San Marino', code: 'SM'},
        {name: 'Sao Tome and Principe', code: 'ST'},
        {name: 'Saudi Arabia', code: 'SA'},
        {name: 'Senegal', code: 'SN'},
        {name: 'Serbia and Montenegro', code: 'CS'},
        {name: 'Seychelles', code: 'SC'},
        {name: 'Sierra Leone', code: 'SL'},
        {name: 'Singapore', code: 'SG'},
        {name: 'Slovakia', code: 'SK'},
        {name: 'Slovenia', code: 'SI'},
        {name: 'Solomon Islands', code: 'SB'},
        {name: 'Somalia', code: 'SO'},
        {name: 'South Africa', code: 'ZA'},
        {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
        {name: 'Spain', code: 'ES'},
        {name: 'Sri Lanka', code: 'LK'},
        {name: 'Sudan', code: 'SD'},
        {name: 'Suriname', code: 'SR'},
        {name: 'Svalbard and Jan Mayen', code: 'SJ'},
        {name: 'Swaziland', code: 'SZ'},
        {name: 'Sweden', code: 'SE'},
        {name: 'Switzerland', code: 'CH'},
        {name: 'Syrian Arab Republic', code: 'SY'},
        {name: 'Taiwan, Province of China', code: 'TW'},
        {name: 'Tajikistan', code: 'TJ'},
        {name: 'Tanzania, United Republic of', code: 'TZ'},
        {name: 'Thailand', code: 'TH'},
        {name: 'Timor-Leste', code: 'TL'},
        {name: 'Togo', code: 'TG'},
        {name: 'Tokelau', code: 'TK'},
        {name: 'Tonga', code: 'TO'},
        {name: 'Trinidad and Tobago', code: 'TT'},
        {name: 'Tunisia', code: 'TN'},
        {name: 'Turkey', code: 'TR'},
        {name: 'Turkmenistan', code: 'TM'},
        {name: 'Turks and Caicos Islands', code: 'TC'},
        {name: 'Tuvalu', code: 'TV'},
        {name: 'Uganda', code: 'UG'},
        {name: 'Ukraine', code: 'UA'},
        {name: 'United Arab Emirates', code: 'AE'},
        {name: 'United Kingdom', code: 'GB'},
        {name: 'United States', code: 'US'},
        {name: 'United States Minor Outlying Islands', code: 'UM'},
        {name: 'Uruguay', code: 'UY'},
        {name: 'Uzbekistan', code: 'UZ'},
        {name: 'Vanuatu', code: 'VU'},
        {name: 'Venezuela', code: 'VE'},
        {name: 'Vietnam', code: 'VN'},
        {name: 'Virgin Islands, British', code: 'VG'},
        {name: 'Virgin Islands, U.S.', code: 'VI'},
        {name: 'Wallis and Futuna', code: 'WF'},
        {name: 'Western Sahara', code: 'EH'},
        {name: 'Yemen', code: 'YE'},
        {name: 'Zambia', code: 'ZM'},
        {name: 'Zimbabwe', code: 'ZW'}
        ];
});
'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
      $http.post('api/login', {email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if ( !response.data.user ) {
          $scope.authError = 'Email or Password not right';
        }else{
          $state.go('app.dashboard-v1');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
;
'use strict';

// signup controller
app.controller('SignupFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.signup = function() {
      $scope.authError = null;
      // Try to create
      $http.post('api/signup', {name: $scope.user.name, email: $scope.user.email, password: $scope.user.password})
      .then(function(response) {
        if ( !response.data.user ) {
          $scope.authError = response;
        }else{
          $state.go('app.dashboard-v1');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
 ;
app.controller('SliderCtrl', function($scope) {
  $scope.cost = 40;
  $scope.range = {
    min: 30,
    max: 60
  };
  $scope.currencyFormatting = function(value) { 
    return"$"+value.toString();
  }
});
// tab controller
app.controller('CustomTabController', ['$scope', function($scope) {
  $scope.tabs = [true, false, false];
  $scope.tab = function(index){
    angular.forEach($scope.tabs, function(i, v) {
      $scope.tabs[v] = false;
    });
    $scope.tabs[index] = true;
  }
}]);
app.controller('TableCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.rowCollectionBasic = [
      {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
      {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
      {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
  ];

  $scope.removeRow = function(row) {
      var index = $scope.rowCollectionBasic.indexOf(row);
      if (index !== -1) {
          $scope.rowCollectionBasic.splice(index, 1);
      }
  };

  $scope.predicates = ['firstName', 'lastName', 'birthDate', 'balance', 'email'];
  $scope.selectedPredicate = $scope.predicates[0];

  var firstnames = ['Laurent', 'Blandine', 'Olivier', 'Max'];
  var lastnames = ['Renard', 'Faivre', 'Frere', 'Eponge'];
  var dates = ['1987-05-21', '1987-04-25', '1955-08-27', '1966-06-06'];
  var id = 1;

  function generateRandomItem(id) {

      var firstname = firstnames[Math.floor(Math.random() * 3)];
      var lastname = lastnames[Math.floor(Math.random() * 3)];
      var birthdate = dates[Math.floor(Math.random() * 3)];
      var balance = Math.floor(Math.random() * 2000);

      return {
          id: id,
          firstName: firstname,
          lastName: lastname,
          birthDate: new Date(birthdate),
          balance: balance
      }
  }

  $scope.rowCollection = [];

  for (id; id < 5; id++) {
      $scope.rowCollection.push(generateRandomItem(id));
  }

  //copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)
  $scope.displayedCollection = [].concat($scope.rowCollection);

  //add to the real data holder
  $scope.addRandomItem = function addRandomItem() {
      $scope.rowCollection.push(generateRandomItem(id));
      id++;
  };

  //remove to the real data holder
  $scope.removeItem = function(row) {
      var index = $scope.rowCollection.indexOf(row);
      if (index !== -1) {
          $scope.rowCollection.splice(index, 1);
      }
  }

  //  pagination
  $scope.itemsByPage=10;

  $scope.rowCollectionPage = [];
  for (var j = 0; j < 200; j++) {
    $scope.rowCollectionPage.push(generateRandomItem(j));
  }

  // pip
  var promise = null;
  $scope.isLoading = false;
  $scope.rowCollectionPip = [];
  $scope.getPage = function() {
    $scope.rowCollectionPip=[];
    for (var j = 0; j < 20; j++) {
      $scope.rowCollectionPip.push(generateRandomItem(j));
    }
  }

  $scope.callServer = function getData(tableState) {
      //here you could create a query string from tableState
      //fake ajax call
      $scope.isLoading = true;

      $timeout(function () {
          $scope.getPage();
          $scope.isLoading = false;
      }, 2000);
  };

 $scope.getPage();

}]);
app.controller('ToasterDemoCtrl', ['$scope', 'toaster', function($scope, toaster) {
    $scope.toaster = {
        type: 'success',
        title: 'Title',
        text: 'Message'
    };
    $scope.pop = function(){
        toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
    };
}]);
app.controller('AbnTestController', function($scope, $timeout) {
    var apple_selected, tree, treedata_avm, treedata_geography;
    $scope.my_tree_handler = function(branch) {
      var _ref;
      $scope.output = "You selected: " + branch.label;
      if ((_ref = branch.data) != null ? _ref.description : void 0) {
        return $scope.output += '(' + branch.data.description + ')';
      }
    };
    apple_selected = function(branch) {
      return $scope.output = "APPLE! : " + branch.label;
    };
    treedata_avm = [
      {
        label: 'Animal',
        children: [
          {
            label: 'Dog',
            data: {
              description: "man's best friend"
            }
          }, {
            label: 'Cat',
            data: {
              description: "Felis catus"
            }
          }, {
            label: 'Hippopotamus',
            data: {
              description: "hungry, hungry"
            }
          }, {
            label: 'Chicken',
            children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
          }
        ]
      }, {
        label: 'Vegetable',
        data: {
          definition: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
          data_can_contain_anything: true
        },
        onSelect: function(branch) {
          return $scope.output = "Vegetable: " + branch.data.definition;
        },
        children: [
          {
            label: 'Oranges'
          }, {
            label: 'Apples',
            children: [
              {
                label: 'Granny Smith',
                onSelect: apple_selected
              }, {
                label: 'Red Delicous',
                onSelect: apple_selected
              }, {
                label: 'Fuji',
                onSelect: apple_selected
              }
            ]
          }
        ]
      }, {
        label: 'Mineral',
        children: [
          {
            label: 'Rock',
            children: ['Igneous', 'Sedimentary', 'Metamorphic']
          }, {
            label: 'Metal',
            children: ['Aluminum', 'Steel', 'Copper']
          }, {
            label: 'Plastic',
            children: [
              {
                label: 'Thermoplastic',
                children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
              }, {
                label: 'Thermosetting Polymer',
                children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
              }
            ]
          }
        ]
      }
    ];
    treedata_geography = [
      {
        label: 'North America',
        children: [
          {
            label: 'Canada',
            children: ['Toronto', 'Vancouver']
          }, {
            label: 'USA',
            children: ['New York', 'Los Angeles']
          }, {
            label: 'Mexico',
            children: ['Mexico City', 'Guadalajara']
          }
        ]
      }, {
        label: 'South America',
        children: [
          {
            label: 'Venezuela',
            children: ['Caracas', 'Maracaibo']
          }, {
            label: 'Brazil',
            children: ['Sao Paulo', 'Rio de Janeiro']
          }, {
            label: 'Argentina',
            children: ['Buenos Aires', 'Cordoba']
          }
        ]
      }
    ];
    $scope.my_data = treedata_avm;
    $scope.try_changing_the_tree_data = function() {
      if ($scope.my_data === treedata_avm) {
        return $scope.my_data = treedata_geography;
      } else {
        return $scope.my_data = treedata_avm;
      }
    };
    $scope.my_tree = tree = {};
    $scope.try_async_load = function() {
      $scope.my_data = [];
      $scope.doing_async = true;
      return $timeout(function() {
        if (Math.random() < 0.5) {
          $scope.my_data = treedata_avm;
        } else {
          $scope.my_data = treedata_geography;
        }
        $scope.doing_async = false;
        return tree.expand_all();
      }, 1000);
    };
    return $scope.try_adding_a_branch = function() {
      var b;
      b = tree.get_selected_branch();
      return tree.add_branch(b, {
        label: 'New Branch',
        data: {
          something: 42,
          "else": 43
        }
      });
    };
});
app.controller('UiGridDemoCtrl', ['$scope', 'uiGridConstants', function($scope, uiGridConstants) {
    $scope.gridOptionsSimple = {
        rowHeight: 36,
        data: [
          {
              "name": "Ethel Price",
              "gender": "female",
              "company": "Enersol"
          },
          {
              "name": "Claudine Neal",
              "gender": "female",
              "company": "Sealoud"
          },
          {
              "name": "Beryl Rice",
              "gender": "female",
              "company": "Velity"
          },
          {
              "name": "Wilder Gonzales",
              "gender": "male",
              "company": "Geekko"
          },
          {
              "name": "Georgina Schultz",
              "gender": "female",
              "company": "Suretech"
          },
          {
              "name": "Carroll Buchanan",
              "gender": "male",
              "company": "Ecosys"
          },
          {
              "name": "Valarie Atkinson",
              "gender": "female",
              "company": "Hopeli"
          },
          {
              "name": "Schroeder Mathews",
              "gender": "male",
              "company": "Polarium"
          },
          {
              "name": "Lynda Mendoza",
              "gender": "female",
              "company": "Dogspa"
          },
          {
              "name": "Sarah Massey",
              "gender": "female",
              "company": "Bisba"
          },
          {
              "name": "Robles Boyle",
              "gender": "male",
              "company": "Comtract"
          },
          {
              "name": "Evans Hickman",
              "gender": "male",
              "company": "Parleynet"
          },
          {
              "name": "Dawson Barber",
              "gender": "male",
              "company": "Dymi"
          },
          {
              "name": "Bruce Strong",
              "gender": "male",
              "company": "Xyqag"
          },
          {
              "name": "Nellie Whitfield",
              "gender": "female",
              "company": "Exospace"
          },
          {
              "name": "Jackson Macias",
              "gender": "male",
              "company": "Aquamate"
          },
          {
              "name": "Pena Pena",
              "gender": "male",
              "company": "Quarx"
          },
          {
              "name": "Lelia Gates",
              "gender": "female",
              "company": "Proxsoft"
          },
          {
              "name": "Letitia Vasquez",
              "gender": "female",
              "company": "Slumberia"
          },
          {
              "name": "Trevino Moreno",
              "gender": "male",
              "company": "Conjurica"
          }
        ]
      };
      
      $scope.gridOptionsComplex = {
        enableFiltering: true,
        showFooter: true,
        rowHeight: 36,
        columnDefs: [
          { name: 'name', aggregationType: uiGridConstants.aggregationTypes.count, width: 150 },
          { name: 'gender', filter: { term: 'male' }, width: 150, enableCellEdit: false, 
            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
              if (grid.getCellValue(row,col) === 'male') {
                return 'blue';
              } else if (grid.getCellValue(row,col) === 'female') {
                return 'pink';
              }
            } 
          },
          { name: 'age', aggregationType: uiGridConstants.aggregationTypes.avg, width: 100 },
          { name: 'company', enableFiltering: false, width: 200 }
        ],
        data: [
          {
              "name": "Ethel Price",
              "gender": "female",
              "company": "Enersol",
              "age": 25
          },
          {
              "name": "Claudine Neal",
              "gender": "female",
              "company": "Sealoud",
              "age": 19
          },
          {
              "name": "Beryl Rice",
              "gender": "female",
              "company": "Velity",
              "age": 44
          },
          {
              "name": "Wilder Gonzales",
              "gender": "male",
              "company": "Geekko",
              "age": 26
          },
          {
              "name": "Georgina Schultz",
              "gender": "female",
              "company": "Suretech",
              "age": 53
          },
          {
              "name": "Carroll Buchanan",
              "gender": "male",
              "company": "Ecosys",
              "age": 64
          },
          {
              "name": "Valarie Atkinson",
              "gender": "female",
              "company": "Hopeli",
              "age": 35
          },
          {
              "name": "Schroeder Mathews",
              "gender": "male",
              "company": "Polarium",
              "age": 29
          },
          {
              "name": "Lynda Mendoza",
              "gender": "female",
              "company": "Dogspa",
              "age": 49
          },
          {
              "name": "Sarah Massey",
              "gender": "female",
              "company": "Bisba",
              "age": 40
          },
          {
              "name": "Robles Boyle",
              "gender": "male",
              "company": "Comtract",
              "age": 32
          },
          {
              "name": "Evans Hickman",
              "gender": "male",
              "company": "Parleynet",
              "age": 38
          },
          {
              "name": "Dawson Barber",
              "gender": "male",
              "company": "Dymi",
              "age": 21
          },
          {
              "name": "Bruce Strong",
              "gender": "male",
              "company": "Xyqag",
              "age": 61
          },
          {
              "name": "Nellie Whitfield",
              "gender": "female",
              "company": "Exospace",
              "age": 54
          },
          {
              "name": "Jackson Macias",
              "gender": "male",
              "company": "Aquamate",
              "age": 49
          },
          {
              "name": "Pena Pena",
              "gender": "male",
              "company": "Quarx",
              "age": 25
          },
          {
              "name": "Lelia Gates",
              "gender": "female",
              "company": "Proxsoft",
              "age": 54
          },
          {
              "name": "Alfred Oscar",
              "gender": "male",
              "company": "Transprop",
              "age": 34
          },
          {
              "name": "John Alfred",
              "gender": "male",
              "company": "Haymans",
              "age": 70
          },
          {
              "name": "Leonie Warren",
              "gender": "female",
              "company": "Hilltop",
              "age": 25
          },
          {
              "name": "Belinda Gosford",
              "gender": "female",
              "company": "Archison",
              "age": 42
          },
          {
              "name": "Tracey Misoni",
              "gender": "female",
              "company": "Verizona",
              "age": 34
          },
          {
              "name": "Trevino Moreno",
              "gender": "male",
              "company": "Conjurica",
              "age": 31
          }
        ]
      };
}]);

'use strict';

// jVectorMap controller
app.controller('JVectorMapDemoCtrl', ['$scope', function($scope) {
    $scope.world_markers = [
      {latLng: [41.90, 12.45], name: 'Vatican City'},
      {latLng: [43.73, 7.41], name: 'Monaco'},
      {latLng: [-0.52, 166.93], name: 'Nauru'},
      {latLng: [-8.51, 179.21], name: 'Tuvalu'},
      {latLng: [43.93, 12.46], name: 'San Marino'},
      {latLng: [47.14, 9.52], name: 'Liechtenstein'},
      {latLng: [7.11, 171.06], name: 'Marshall Islands'},
      {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
      {latLng: [3.2, 73.22], name: 'Maldives'},
      {latLng: [35.88, 14.5], name: 'Malta'},
      {latLng: [12.05, -61.75], name: 'Grenada'},
      {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
      {latLng: [13.16, -59.55], name: 'Barbados'},
      {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
      {latLng: [-4.61, 55.45], name: 'Seychelles'},
      {latLng: [7.35, 134.46], name: 'Palau'},
      {latLng: [42.5, 1.51], name: 'Andorra'},
      {latLng: [14.01, -60.98], name: 'Saint Lucia'},
      {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
      {latLng: [1.3, 103.8], name: 'Singapore'},
      {latLng: [1.46, 173.03], name: 'Kiribati'},
      {latLng: [-21.13, -175.2], name: 'Tonga'},
      {latLng: [15.3, -61.38], name: 'Dominica'},
      {latLng: [-20.2, 57.5], name: 'Mauritius'},
      {latLng: [26.02, 50.55], name: 'Bahrain'},
      {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
    ];

    $scope.usa_markers = [
      {latLng: [40.71, -74.00], name: 'New York'},
      {latLng: [34.05, -118.24], name: 'Los Angeles'},
      {latLng: [41.87, -87.62], name: 'Chicago'},
      {latLng: [29.76, -95.36], name: 'Houston'},
      {latLng: [39.95, -75.16], name: 'Philadelphia'},
      {latLng: [38.90, -77.03], name: 'Washington'},
      {latLng: [37.36, -122.03], name: 'Silicon Valley'}
    ];
  }])
;
app.controller('XeditableCtrl', ['$scope', '$filter', '$http', 'editableOptions', 'editableThemes', 
  function($scope, $filter, $http, editableOptions, editableThemes){
    editableThemes.bs3.inputClass = 'input-sm';
    editableThemes.bs3.buttonsClass = 'btn-sm';
    editableOptions.theme = 'bs3';

    $scope.html5 = {
      email: 'email@example.com',
      tel: '123-45-67',
      number: 29,
      range: 10,
      url: 'http://example.com',
      search: 'blabla',
      color: '#6a4415',
      date: null,
      time: '12:30',
      datetime: null,
      month: null,
      week: null
    };

    $scope.user = {
    	name: 'awesome',
    	desc: 'Awesome user \ndescription!',
      status: 2,
      agenda: 1,
      remember: false
    }; 

    $scope.statuses = [
      {value: 1, text: 'status1'},
      {value: 2, text: 'status2'},
      {value: 3, text: 'status3'}
    ];

    $scope.agenda = [
      {value: 1, text: 'male'},
      {value: 2, text: 'female'}
    ];

    $scope.showStatus = function() {
      var selected = $filter('filter')($scope.statuses, {value: $scope.user.status});
      return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
    };

    $scope.showAgenda = function() {
      var selected = $filter('filter')($scope.agenda, {value: $scope.user.agenda});
      return ($scope.user.agenda && selected.length) ? selected[0].text : 'Not set';
    };

    // editable table
    $scope.users = [
      {id: 1, name: 'awesome user1', status: 2, group: 4, groupName: 'admin'},
      {id: 2, name: 'awesome user2', status: undefined, group: 3, groupName: 'vip'},
      {id: 3, name: 'awesome user3', status: 2, group: null}
    ];

    $scope.groups = [];
    $scope.loadGroups = function() {
      return $scope.groups.length ? null : $http.get('api/groups').success(function(data) {
        $scope.groups = data;
      });
    };

    $scope.showGroup = function(user) {
      if(user.group && $scope.groups.length) {
        var selected = $filter('filter')($scope.groups, {id: user.group});
        return selected.length ? selected[0].text : 'Not set';
      } else {
        return user.groupName || 'Not set';
      }
    };

    $scope.showStatus = function(user) {
      var selected = [];
      if(user && user.status) {
        selected = $filter('filter')($scope.statuses, {value: user.status});
      }
      return selected.length ? selected[0].text : 'Not set';
    };

    $scope.checkName = function(data, id) {
      if (id === 2 && data !== 'awesome') {
        return "Username 2 should be `awesome`";
      }
    };

    $scope.saveUser = function(data, id) {
      //$scope.user not updated yet
      angular.extend(data, {id: id});
      // return $http.post('api/saveUser', data);
    };

    // remove user
    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };

    // add user
    $scope.addUser = function() {
      $scope.inserted = {
        id: $scope.users.length+1,
        name: '',
        status: null,
        group: null 
      };
      $scope.users.push($scope.inserted);
    };

}]);

angular.module('app')
  .directive('setNgAnimate', ['$animate', function ($animate) {
    return {
        link: function ($scope, $element, $attrs) {
            $scope.$watch( function() {
                return $scope.$eval($attrs.setNgAnimate, $scope);
            }, function(valnew, valold){
                $animate.enabled(!!valnew, $element);
            });
        }
    };
  }]);
angular.module('app')
  .directive('uiButterbar', ['$rootScope', '$anchorScroll', function($rootScope, $anchorScroll) {
     return {
      restrict: 'AC',
      template:'<span class="bar"></span>',
      link: function(scope, el, attrs) {        
        el.addClass('butterbar hide');
        scope.$on('$stateChangeStart', function(event) {
          $anchorScroll();
          el.removeClass('hide').addClass('active');
        });
        scope.$on('$stateChangeSuccess', function( event, toState, toParams, fromState ) {
          event.targetScope.$watch('$viewContentLoaded', function(){
            el.addClass('hide').removeClass('active');
          })
        });
      }
     };
  }]);
angular.module('app')
  .directive('uiFocus', function($timeout, $parse) {
    return {
      link: function(scope, element, attr) {
        var model = $parse(attr.uiFocus);
        scope.$watch(model, function(value) {
          if(value === true) {
            $timeout(function() {
              element[0].focus();
            });
          }
        });
        element.bind('blur', function() {
           scope.$apply(model.assign(scope, false));
        });
      }
    };
  });
 angular.module('app')
  .directive('uiFullscreen', ['uiLoad', 'JQ_CONFIG', '$document', '$window', function(uiLoad, JQ_CONFIG, $document, $window) {
    return {
      restrict: 'AC',
      template:'<i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',
      link: function(scope, el, attr) {
        el.addClass('hide');
        uiLoad.load(JQ_CONFIG.screenfull).then(function(){
          // disable on ie11
          if (screenfull.enabled && !navigator.userAgent.match(/Trident.*rv:11\./)) {
            el.removeClass('hide');
          }
          el.on('click', function(){
            var target;
            attr.target && ( target = $(attr.target)[0] );            
            screenfull.toggle(target);
          });
          $document.on(screenfull.raw.fullscreenchange, function () {
            if(screenfull.isFullscreen){
              el.addClass('active');
            }else{
              el.removeClass('active');
            }
          });
        });
      }
    };
  }]);

'use strict';

/**
 * 0.1.1
 * General-purpose jQuery wrapper. Simply pass the plugin name as the expression.
 *
 * It is possible to specify a default set of parameters for each jQuery plugin.
 * Under the jq key, namespace each plugin by that which will be passed to ui-jq.
 * Unfortunately, at this time you can only pre-define the first parameter.
 * @example { jq : { datepicker : { showOn:'click' } } }
 *
 * @param ui-jq {string} The $elm.[pluginName]() to call.
 * @param [ui-options] {mixed} Expression to be evaluated and passed as options to the function
 *     Multiple parameters can be separated by commas
 * @param [ui-refresh] {expression} Watch expression and refire plugin on changes
 *
 * @example <input ui-jq="datepicker" ui-options="{showOn:'click'},secondParameter,thirdParameter" ui-refresh="iChange">
 */
angular.module('ui.jq', ['ui.load']).
  value('uiJqConfig', {}).
  directive('uiJq', ['uiJqConfig', 'JQ_CONFIG', 'uiLoad', '$timeout', function uiJqInjectingFunction(uiJqConfig, JQ_CONFIG, uiLoad, $timeout) {

  return {
    restrict: 'A',
    compile: function uiJqCompilingFunction(tElm, tAttrs) {

      if (!angular.isFunction(tElm[tAttrs.uiJq]) && !JQ_CONFIG[tAttrs.uiJq]) {
        throw new Error('ui-jq: The "' + tAttrs.uiJq + '" function does not exist');
      }
      var options = uiJqConfig && uiJqConfig[tAttrs.uiJq];

      return function uiJqLinkingFunction(scope, elm, attrs) {

        function getOptions(){
          var linkOptions = [];

          // If ui-options are passed, merge (or override) them onto global defaults and pass to the jQuery method
          if (attrs.uiOptions) {
            linkOptions = scope.$eval('[' + attrs.uiOptions + ']');
            if (angular.isObject(options) && angular.isObject(linkOptions[0])) {
              linkOptions[0] = angular.extend({}, options, linkOptions[0]);
            }
          } else if (options) {
            linkOptions = [options];
          }
          return linkOptions;
        }

        // If change compatibility is enabled, the form input's "change" event will trigger an "input" event
        if (attrs.ngModel && elm.is('select,input,textarea')) {
          elm.bind('change', function() {
            elm.trigger('input');
          });
        }

        // Call jQuery method and pass relevant options
        function callPlugin() {
          $timeout(function() {
            elm[attrs.uiJq].apply(elm, getOptions());
          }, 0, false);
        }

        function refresh(){
          // If ui-refresh is used, re-fire the the method upon every change
          if (attrs.uiRefresh) {
            scope.$watch(attrs.uiRefresh, function() {
              callPlugin();
            });
          }
        }

        if ( JQ_CONFIG[attrs.uiJq] ) {
          uiLoad.load(JQ_CONFIG[attrs.uiJq]).then(function() {
            callPlugin();
            refresh();
          }).catch(function() {
            
          });
        } else {
          callPlugin();
          refresh();
        }
      };
    }
  };
}]);
angular.module('app')
  .directive('uiModule', ['MODULE_CONFIG','uiLoad', '$compile', function(MODULE_CONFIG, uiLoad, $compile) {
    return {
      restrict: 'A',
      compile: function (el, attrs) {
        var contents = el.contents().clone();
        return function(scope, el, attrs){
          el.contents().remove();
          uiLoad.load(MODULE_CONFIG[attrs.uiModule])
          .then(function(){
            $compile(contents)(scope, function(clonedElement, scope) {
              el.append(clonedElement);
            });
          });
        }
      }
    };
  }]);
angular.module('app')
  .directive('uiNav', ['$timeout', function($timeout) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        var _window = $(window), 
        _mb = 768, 
        wrap = $('.app-aside'), 
        next, 
        backdrop = '.dropdown-backdrop';
        // unfolded
        el.on('click', 'a', function(e) {
          next && next.trigger('mouseleave.nav');
          var _this = $(this);
          _this.parent().siblings( ".active" ).toggleClass('active');
          _this.next().is('ul') &&  _this.parent().toggleClass('active') &&  e.preventDefault();
          // mobile
          _this.next().is('ul') || ( ( _window.width() < _mb ) && $('.app-aside').removeClass('show off-screen') );
        });

        // folded & fixed
        el.on('mouseenter', 'a', function(e){
          next && next.trigger('mouseleave.nav');
          $('> .nav', wrap).remove();
          if ( !$('.app-aside-fixed.app-aside-folded').length || ( _window.width() < _mb ) || $('.app-aside-dock').length) return;
          var _this = $(e.target)
          , top
          , w_h = $(window).height()
          , offset = 50
          , min = 150;

          !_this.is('a') && (_this = _this.closest('a'));
          if( _this.next().is('ul') ){
             next = _this.next();
          }else{
            return;
          }
         
          _this.parent().addClass('active');
          top = _this.parent().position().top + offset;
          next.css('top', top);
          if( top + next.height() > w_h ){
            next.css('bottom', 0);
          }
          if(top + min > w_h){
            next.css('bottom', w_h - top - offset).css('top', 'auto');
          }
          next.appendTo(wrap);

          next.on('mouseleave.nav', function(e){
            $(backdrop).remove();
            next.appendTo(_this.parent());
            next.off('mouseleave.nav').css('top', 'auto').css('bottom', 'auto');
            _this.parent().removeClass('active');
          });

          $('.smart').length && $('<div class="dropdown-backdrop"/>').insertAfter('.app-aside').on('click', function(next){
            next && next.trigger('mouseleave.nav');
          });

        });

        wrap.on('mouseleave', function(e){
          next && next.trigger('mouseleave.nav');
          $('> .nav', wrap).remove();
        });
      }
    };
  }]);
angular.module('app')
  .directive('uiScrollTo', ['$location', '$anchorScroll', function($location, $anchorScroll) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.on('click', function(e) {
          $location.hash(attr.uiScrollTo);
          $anchorScroll();
        });
      }
    };
  }]);

angular.module('app')
  .directive('uiShift', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, el, attr) {
        // get the $prev or $parent of this el
        var _el = $(el),
            _window = $(window),
            prev = _el.prev(),
            parent,
            width = _window.width()
            ;

        !prev.length && (parent = _el.parent());
        
        function sm(){
          $timeout(function () {
            var method = attr.uiShift;
            var target = attr.target;
            _el.hasClass('in') || _el[method](target).addClass('in');
          });
        }
        
        function md(){
          parent && parent['prepend'](el);
          !parent && _el['insertAfter'](prev);
          _el.removeClass('in');
        }

        (width < 768 && sm()) || md();

        _window.resize(function() {
          if(width !== _window.width()){
            $timeout(function(){
              (_window.width() < 768 && sm()) || md();
              width = _window.width();
            });
          }
        });
      }
    };
  }]);
angular.module('app')
  .directive('uiToggleClass', ['$timeout', '$document', function($timeout, $document) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.on('click', function(e) {
          e.preventDefault();
          var classes = attr.uiToggleClass.split(','),
              targets = (attr.target && attr.target.split(',')) || Array(el),
              key = 0;
          angular.forEach(classes, function( _class ) {
            var target = targets[(targets.length && key)];            
            ( _class.indexOf( '*' ) !== -1 ) && magic(_class, target);
            $( target ).toggleClass(_class);
            key ++;
          });
          $(el).toggleClass('active');

          function magic(_class, target){
            var patt = new RegExp( '\\s' + 
                _class.
                  replace( /\*/g, '[A-Za-z0-9-_]+' ).
                  split( ' ' ).
                  join( '\\s|\\s' ) + 
                '\\s', 'g' );
            var cn = ' ' + $(target)[0].className + ' ';
            while ( patt.test( cn ) ) {
              cn = cn.replace( patt, ' ' );
            }
            $(target)[0].className = $.trim( cn );
          }
        });
      }
    };
  }]);
'use strict';

/* Filters */
// need load the moment.js to use this filter. 
angular.module('app')
  .filter('fromNow', function() {
    return function(date) {
      return moment(date).fromNow();
    }
  });
'use strict';

/**
 * 0.1.1
 * Deferred load js/css file, used for ui-jq.js and Lazy Loading.
 * 
 * @ flatfull.com All Rights Reserved.
 * Author url: http://themeforest.net/user/flatfull
 */

angular.module('ui.load', [])
	.service('uiLoad', ['$document', '$q', '$timeout', function ($document, $q, $timeout) {

		var loaded = [];
		var promise = false;
		var deferred = $q.defer();

		/**
		 * Chain loads the given sources
		 * @param srcs array, script or css
		 * @returns {*} Promise that will be resolved once the sources has been loaded.
		 */
		this.load = function (srcs) {
			srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
			var self = this;
			if(!promise){
				promise = deferred.promise;
			}
      angular.forEach(srcs, function(src) {
      	promise = promise.then( function(){
      		return src.indexOf('.css') >=0 ? self.loadCSS(src) : self.loadScript(src);
      	} );
      });
      deferred.resolve();
      return promise;
		}

		/**
		 * Dynamically loads the given script
		 * @param src The url of the script to load dynamically
		 * @returns {*} Promise that will be resolved once the script has been loaded.
		 */
		this.loadScript = function (src) {
			if(loaded[src]) return loaded[src].promise;

			var deferred = $q.defer();
			var script = $document[0].createElement('script');
			script.src = src;
			script.onload = function (e) {
				$timeout(function () {
					deferred.resolve(e);
				});
			};
			script.onerror = function (e) {
				$timeout(function () {
					deferred.reject(e);
				});
			};
			$document[0].body.appendChild(script);
			loaded[src] = deferred;

			return deferred.promise;
		};

		/**
		 * Dynamically loads the given CSS file
		 * @param href The url of the CSS to load dynamically
		 * @returns {*} Promise that will be resolved once the CSS file has been loaded.
		 */
		this.loadCSS = function (href) {
			if(loaded[href]) return loaded[href].promise;

			var deferred = $q.defer();
			var style = $document[0].createElement('link');
			style.rel = 'stylesheet';
			style.type = 'text/css';
			style.href = href;
			style.onload = function (e) {
				$timeout(function () {
					deferred.resolve(e);
				});
			};
			style.onerror = function (e) {
				$timeout(function () {
					deferred.reject(e);
				});
			};
			$document[0].head.appendChild(style);
			loaded[href] = deferred;

			return deferred.promise;
		};
}]);
/**
 * calendarDemoApp - 0.1.3
 */

app.controller('FullcalendarCtrl', ['$scope', function($scope) {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* event source that pulls from google.com */
    $scope.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };

    /* event source that contains custom events on the scope */
    $scope.events = [
      {title:'All Day Event', start: new Date(y, m, 1), className: ['b-l b-2x b-info'], location:'New York', info:'This a all day event that will start from 9:00 am to 9:00 pm, have fun!'},
      {title:'Dance class', start: new Date(y, m, 3), end: new Date(y, m, 4, 9, 30), allDay: false, className: ['b-l b-2x b-danger'], location:'London', info:'Two days dance training class.'},
      {title:'Game racing', start: new Date(y, m, 6, 16, 0), className: ['b-l b-2x b-info'], location:'Hongkong', info:'The most big racing of this year.'},
      {title:'Soccer', start: new Date(y, m, 8, 15, 0), className: ['b-l b-2x b-info'], location:'Rio', info:'Do not forget to watch.'},
      {title:'Family', start: new Date(y, m, 9, 19, 30), end: new Date(y, m, 9, 20, 30), className: ['b-l b-2x b-success'], info:'Family party'},
      {title:'Long Event', start: new Date(y, m, d - 5), end: new Date(y, m, d - 2), className: ['bg-success bg'], location:'HD City', info:'It is a long long event'},
      {title:'Play game', start: new Date(y, m, d - 1, 16, 0), className: ['b-l b-2x b-info'], location:'Tokyo', info:'Tokyo Game Racing'},
      {title:'Birthday Party', start: new Date(y, m, d + 1, 19, 0), end: new Date(y, m, d + 1, 22, 30), allDay: false, className: ['b-l b-2x b-primary'], location:'New York', info:'Party all day'},
      {title:'Repeating Event', start: new Date(y, m, d + 4, 16, 0), alDay: false, className: ['b-l b-2x b-warning'], location:'Home Town', info:'Repeat every day'},      
      {title:'Click for Google', start: new Date(y, m, 28), end: new Date(y, m, 29), url: 'http://google.com/', className: ['b-l b-2x b-primary']},
      {title:'Feed cat', start: new Date(y, m+1, 6, 18, 0), className: ['b-l b-2x b-info']}
    ];

    /* alert on dayClick */
    $scope.precision = 400;
    $scope.lastClickTime = 0;
    $scope.alertOnEventClick = function( date, jsEvent, view ){
      var time = new Date().getTime();
      if(time - $scope.lastClickTime <= $scope.precision){
          $scope.events.push({
            title: 'New Event',
            start: date,
            className: ['b-l b-2x b-info']
          });
      }
      $scope.lastClickTime = time;
    };
    /* alert on Drop */
    $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };

    $scope.overlay = $('.fc-overlay');
    $scope.alertOnMouseOver = function( event, jsEvent, view ){
      $scope.event = event;
      $scope.overlay.removeClass('left right top').find('.arrow').removeClass('left right top pull-up');
      var wrap = $(jsEvent.target).closest('.fc-event');
      var cal = wrap.closest('.calendar');
      var left = wrap.offset().left - cal.offset().left;
      var right = cal.width() - (wrap.offset().left - cal.offset().left + wrap.width());
      var top = cal.height() - (wrap.offset().top - cal.offset().top + wrap.height());
      if( right > $scope.overlay.width() ) { 
        $scope.overlay.addClass('left').find('.arrow').addClass('left pull-up')
      }else if ( left > $scope.overlay.width() ) {
        $scope.overlay.addClass('right').find('.arrow').addClass('right pull-up');
      }else{
        $scope.overlay.find('.arrow').addClass('top');
      }
      if( top < $scope.overlay.height() ) { 
        $scope.overlay.addClass('top').find('.arrow').removeClass('pull-up').addClass('pull-down')
      }
      (wrap.find('.fc-overlay').length == 0) && wrap.append( $scope.overlay );
    }

    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        dayClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventMouseover: $scope.alertOnMouseOver
      }
    };
    
    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'New Event',
        start: new Date(y, m, d),
        className: ['b-l b-2x b-info']
      });
    };

    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };

    /* Change View */
    $scope.changeView = function(view, calendar) {
      $('.calendar').fullCalendar('changeView', view);
    };

    $scope.today = function(calendar) {
      $('.calendar').fullCalendar('today');
    };

    /* event sources array*/
    $scope.eventSources = [$scope.events];
}]);
/* EOF */

app.controller('ContactCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
  $http.get('js/app/contact/contacts.json').then(function (resp) {
    $scope.items = resp.data.items;
    $scope.item = $filter('orderBy')($scope.items, 'first')[0];
    $scope.item.selected = true;
  });

  $scope.filter = '';
  $scope.groups = [
    {name: 'Coworkers'}, 
    {name: 'Family'}, 
    {name: 'Friends'}, 
    {name: 'Partners'}, 
    {name: 'Group'}
  ];

  $scope.createGroup = function(){
    var group = {name: 'New Group'};
    group.name = $scope.checkItem(group, $scope.groups, 'name');
    $scope.groups.push(group);
  };

  $scope.checkItem = function(obj, arr, key){
    var i=0;
    angular.forEach(arr, function(item) {
      if(item[key].indexOf( obj[key] ) == 0){
        var j = item[key].replace(obj[key], '').trim();
        if(j){
          i = Math.max(i, parseInt(j)+1);
        }else{
          i = 1;
        }
      }
    });
    return obj[key] + (i ? ' '+i : '');
  };

  $scope.deleteGroup = function(item){
    $scope.groups.splice($scope.groups.indexOf(item), 1);
  };

  $scope.selectGroup = function(item){    
    angular.forEach($scope.groups, function(item) {
      item.selected = false;
    });
    $scope.group = item;
    $scope.group.selected = true;
    $scope.filter = item.name;
  };

  $scope.selectItem = function(item){    
    angular.forEach($scope.items, function(item) {
      item.selected = false;
      item.editing = false;
    });
    $scope.item = item;
    $scope.item.selected = true;
  };

  $scope.deleteItem = function(item){
    $scope.items.splice($scope.items.indexOf(item), 1);
    $scope.item = $filter('orderBy')($scope.items, 'first')[0];
    if($scope.item) $scope.item.selected = true;
  };

  $scope.createItem = function(){
    var item = {
      group: 'Friends',
      avatar:'img/a0.jpg'
    };
    $scope.items.push(item);
    $scope.selectItem(item);
    $scope.item.editing = true;
  };

  $scope.editItem = function(item){
    if(item && item.selected){
      item.editing = true;
    }
  };

  $scope.doneEditing = function(item){
    item.editing = false;
  };

}]);
// A RESTful factory for retreiving mails from 'mails.json'
app.factory('mails', ['$http', function ($http) {
  var path = 'js/app/mail/mails.json';
  var mails = $http.get(path).then(function (resp) {
    return resp.data.mails;
  });

  var factory = {};
  factory.all = function () {
    return mails;
  };
  factory.get = function (id) {
    return mails.then(function(mails){
      for (var i = 0; i < mails.length; i++) {
        if (mails[i].id == id) return mails[i];
      }
      return null;
    })
  };
  return factory;
}]);
app.controller('MailCtrl', ['$scope', function($scope) {
  $scope.folds = [
    {name: 'Inbox', filter:''},
    {name: 'Starred', filter:'starred'},
    {name: 'Sent', filter:'sent'},
    {name: 'Important', filter:'important'},
    {name: 'Draft', filter:'draft'},
    {name: 'Trash', filter:'trash'}
  ];

  $scope.labels = [
    {name: 'Angular', filter:'angular', color:'#23b7e5'},
    {name: 'Bootstrap', filter:'bootstrap', color:'#7266ba'},
    {name: 'Client', filter:'client', color:'#fad733'},
    {name: 'Work', filter:'work', color:'#27c24c'}
  ];

  $scope.addLabel = function(){
    $scope.labels.push(
      {
        name: $scope.newLabel.name,
        filter: angular.lowercase($scope.newLabel.name),
        color: '#ccc'
      }
    );
    $scope.newLabel.name = '';
  }

  $scope.labelClass = function(label) {
    return {
      'b-l-info': angular.lowercase(label) === 'angular',
      'b-l-primary': angular.lowercase(label) === 'bootstrap',
      'b-l-warning': angular.lowercase(label) === 'client',
      'b-l-success': angular.lowercase(label) === 'work'      
    };
  };

}]);

app.controller('MailListCtrl', ['$scope', 'mails', '$stateParams', function($scope, mails, $stateParams) {
  $scope.fold = $stateParams.fold;
  mails.all().then(function(mails){
    $scope.mails = mails;
  });
}]);

app.controller('MailDetailCtrl', ['$scope', 'mails', '$stateParams', function($scope, mails, $stateParams) {
  mails.get($stateParams.mailId).then(function(mail){
    $scope.mail = mail;
  })
}]);

app.controller('MailNewCtrl', ['$scope', function($scope) {
  $scope.mail = {
    to: '',
    subject: '',
    content: ''
  }
  $scope.tolist = [
    {name: 'James', email:'james@gmail.com'},
    {name: 'Luoris Kiso', email:'luoris.kiso@hotmail.com'},
    {name: 'Lucy Yokes', email:'lucy.yokes@gmail.com'}
  ];
}]);

angular.module('app').directive('labelColor', function(){
  return function(scope, $el, attrs){
    $el.css({'color': attrs.color});
  }
});
/*!
 * JavaScript - loadGoogleMaps( version, apiKey, language )
 *
 * - Load Google Maps API using jQuery Deferred. 
 *   Useful if you want to only load the Google Maps API on-demand.
 * - Requires jQuery 1.5
 * 
 * Copyright (c) 2011 Glenn Baker
 * Dual licensed under the MIT and GPL licenses.
 */
/*globals window, google, jQuery*/
var loadGoogleMaps = (function($) {
	
	var now = $.now(),
	
		promise;
	
	return function( version, apiKey, language ) {
		
		if( promise ) { return promise; }
		
			//Create a Deferred Object
		var	deferred = $.Deferred(),
		
			//Declare a resolve function, pass google.maps for the done functions
			resolve = function () {
				deferred.resolve( window.google && google.maps ? google.maps : false );
			},
			
			//global callback name
			callbackName = "loadGoogleMaps_" + ( now++ ),
			
			// Default Parameters
			params = $.extend(
			 {'sensor': false}
			 , apiKey ? {"key": apiKey} : {}
			 , language ? {"language": language} : {} 
			);;
		
		//If google.maps exists, then Google Maps API was probably loaded with the <script> tag
		if( window.google && google.maps ) {
			
			resolve();
		
		//If the google.load method exists, lets load the Google Maps API in Async.
		} else if ( window.google && google.load ) {
		
			google.load("maps", version || 3, {"other_params": $.param(params) , "callback" : resolve});

		//Last, try pure jQuery Ajax technique to load the Google Maps API in Async.
		} else {
			
			//Ajax URL params
			params = $.extend( params, {
				'v': version || 3,
				'callback': callbackName
			});
			
			//Declare the global callback
			window[callbackName] = function( ) {
				
				resolve();
				
				//Delete callback
				setTimeout(function() {
					try{
						delete window[callbackName];
					} catch( e ) {}
				}, 20);
			};
			
			//Can't use the jXHR promise because 'script' doesn't support 'callback=?'
			$.ajax({
				dataType: 'script',
				data: params,
				url: 'http://maps.google.com/maps/api/js'				
			});
			
		}
	
		promise = deferred.promise(); 
		
		return promise;
	};
	
}(jQuery));

/* global console:false, google:false */
/*jshint unused:false */
'use strict';

app.controller('MapCtrl', ['$scope', function ($scope) {

    $scope.myMarkers = [];

    $scope.mapOptions = {
      center: new google.maps.LatLng(35.784, -78.670),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.addMarker = function ($event, $params) {
      $scope.myMarkers.push(new google.maps.Marker({
        map: $scope.myMap,
        position: $params[0].latLng
      }));
    };

    $scope.setZoomMessage = function (zoom) {
      $scope.zoomMessage = 'You just zoomed to ' + zoom + '!';
      console.log(zoom, 'zoomed');
    };

    $scope.openMarkerInfo = function (marker) {
      $scope.currentMarker = marker;
      $scope.currentMarkerLat = marker.getPosition().lat();
      $scope.currentMarkerLng = marker.getPosition().lng();
      $scope.myInfoWindow.open($scope.myMap, marker);
    };

    $scope.setMarkerPosition = function (marker, lat, lng) {
      marker.setPosition(new google.maps.LatLng(lat, lng));
    };
  }])
;
'use strict';

(function () {
  //Setup map events from a google map object to trigger on a given element too,
  //then we just use ui-event to catch events from an element
  function bindMapEvents(scope, eventsStr, googleObject, element) {
    angular.forEach(eventsStr.split(' '), function (eventName) {
      //Prefix all googlemap events with 'map-', so eg 'click'
      //for the googlemap doesn't interfere with a normal 'click' event
      window.google.maps.event.addListener(googleObject, eventName, function (event) {
        element.triggerHandler('map-' + eventName, event);
        //We create an $apply if it isn't happening. we need better support for this
        //We don't want to use timeout because tons of these events fire at once,
        //and we only need one $apply
        if (!scope.$$phase){ scope.$apply();}
      });
    });
  }

  app.value('uiMapConfig', {});
  app.directive('uiMap',
    ['uiMapConfig', '$parse', function (uiMapConfig, $parse) {

      var mapEvents = 'bounds_changed center_changed click dblclick drag dragend ' +
        'dragstart heading_changed idle maptypeid_changed mousemove mouseout ' +
        'mouseover projection_changed resize rightclick tilesloaded tilt_changed ' +
        'zoom_changed';
      var options = uiMapConfig || {};

      return {
        restrict: 'A',
        //doesn't work as E for unknown reason
        link: function (scope, elm, attrs) {
          var opts = angular.extend({}, options, scope.$eval(attrs.uiOptions));
          var map = new window.google.maps.Map(elm[0], opts);
          var model = $parse(attrs.uiMap);

          //Set scope variable for the map
          model.assign(scope, map);

          bindMapEvents(scope, mapEvents, map, elm);
        }
      };
    }]);

  app.value('uiMapInfoWindowConfig', {});
  app.directive('uiMapInfoWindow',
    ['uiMapInfoWindowConfig', '$parse', '$compile', function (uiMapInfoWindowConfig, $parse, $compile) {

      var infoWindowEvents = 'closeclick content_change domready ' +
        'position_changed zindex_changed';
      var options = uiMapInfoWindowConfig || {};

      return {
        link: function (scope, elm, attrs) {
          var opts = angular.extend({}, options, scope.$eval(attrs.uiOptions));
          opts.content = elm[0];
          var model = $parse(attrs.uiMapInfoWindow);
          var infoWindow = model(scope);

          if (!infoWindow) {
            infoWindow = new window.google.maps.InfoWindow(opts);
            model.assign(scope, infoWindow);
          }

          bindMapEvents(scope, infoWindowEvents, infoWindow, elm);

          /* The info window's contents dont' need to be on the dom anymore,
           google maps has them stored.  So we just replace the infowindow element
           with an empty div. (we don't just straight remove it from the dom because
           straight removing things from the dom can mess up angular) */
          elm.replaceWith('<div></div>');

          //Decorate infoWindow.open to $compile contents before opening
          var _open = infoWindow.open;
          infoWindow.open = function open(a1, a2, a3, a4, a5, a6) {
            $compile(elm.contents())(scope);
            _open.call(infoWindow, a1, a2, a3, a4, a5, a6);
          };
        }
      };
    }]);

  /*
   * Map overlay directives all work the same. Take map marker for example
   * <ui-map-marker="myMarker"> will $watch 'myMarker' and each time it changes,
   * it will hook up myMarker's events to the directive dom element.  Then
   * ui-event will be able to catch all of myMarker's events. Super simple.
   */
  function mapOverlayDirective(directiveName, events) {
    app.directive(directiveName, [function () {
      return {
        restrict: 'A',
        link: function (scope, elm, attrs) {
          scope.$watch(attrs[directiveName], function (newObject) {
            if (newObject) {
              bindMapEvents(scope, events, newObject, elm);
            }
          });
        }
      };
    }]);
  }

  mapOverlayDirective('uiMapMarker',
    'animation_changed click clickable_changed cursor_changed ' +
      'dblclick drag dragend draggable_changed dragstart flat_changed icon_changed ' +
      'mousedown mouseout mouseover mouseup position_changed rightclick ' +
      'shadow_changed shape_changed title_changed visible_changed zindex_changed');

  mapOverlayDirective('uiMapPolyline',
    'click dblclick mousedown mousemove mouseout mouseover mouseup rightclick');

  mapOverlayDirective('uiMapPolygon',
    'click dblclick mousedown mousemove mouseout mouseover mouseup rightclick');

  mapOverlayDirective('uiMapRectangle',
    'bounds_changed click dblclick mousedown mousemove mouseout mouseover ' +
      'mouseup rightclick');

  mapOverlayDirective('uiMapCircle',
    'center_changed click dblclick mousedown mousemove ' +
      'mouseout mouseover mouseup radius_changed rightclick');

  mapOverlayDirective('uiMapGroundOverlay',
    'click dblclick');

})();



'use strict';

app.controller('MeasureCtrl', ['$scope', function(){
	console.log('MeasureCtrl loaded');
}]);
app.controller('MusicCtrl',
  ["$sce",'$scope', function ($sce, $scope) {    
    $scope.API = null;
    $scope.active = 0;

    $scope.audios = [
      {
        title: "1. Lentement",
        artist:"Miaow",
        poster: "img/b0.jpg",
        sources: [
          {src: $sce.trustAsResourceUrl("http://flatfull.com/themes/assets/musics/Miaow-03-Lentement.mp3"), type: "audio/mpeg"},
          {src: $sce.trustAsResourceUrl("http://flatfull.com/themes/assets/musics/Miaow-03-Lentement.ogg"), type: "audio/ogg"}
        ]
      },
      {
        title: "2. Bubble",
        artist:"Miaow",
        poster: "img/b1.jpg",
        sources: [
          {src: $sce.trustAsResourceUrl("http://flatfull.com/themes/assets/musics/Miaow-07-Bubble.mp3"), type: "audio/mpeg"},
          {src: $sce.trustAsResourceUrl("http://flatfull.com/themes/assets/musics/Miaow-07-Bubble.ogg"), type: "audio/ogg"}
        ]
      },      
      {
        title: "3. Partir",
        artist:"Miaow",
        poster: "img/b2.jpg",
        sources: [
          {src: $sce.trustAsResourceUrl("http://flatfull.com/themes/assets/musics/Miaow-09-Partir.mp3"), type: "audio/mpeg"},
          {src: $sce.trustAsResourceUrl("http://flatfull.com/themes/assets/musics/Miaow-09-Partir.ogg"), type: "audio/ogg"}
        ]
      }
    ];

    $scope.config = {
      sources: $scope.audios[0].sources,
      title: $scope.audios[0].title,
      repeat: false,
      shuffle: false,
      autoPlay: true,
      theme: {
        url: "js/app/music/videogular.css"
      }
    };

    $scope.onPlayerReady = function(API) {
      $scope.API = API;
      if ($scope.API.currentState == 'play' || $scope.isCompleted) $scope.API.play();
      $scope.isCompleted = false;
    };

    $scope.onComplete = function() {
      $scope.isCompleted = true;
      // shuffle
      if($scope.config.shuffle){
        $scope.active = $scope.getRandom($scope.active);
      // next item
      }else{
        $scope.active++;
      }
      
      // last item
      if ($scope.active >= $scope.audios.length) {
        $scope.active = 0;
        // repeat
        if($scope.config.repeat){
          $scope.setActive($scope.active);
        }
      }else{
        $scope.setActive($scope.active);
      }
    };

    $scope.getRandom = function(index){
      var i = Math.floor( Math.random() * $scope.audios.length );
      if ( !(i-index) ){
        i = $scope.getRandom( index );
      }
      return i;
    }

    $scope.play = function(index){
      $scope.isCompleted = true;
      // get prev or next item
      index == "next" ? $scope.active++ : $scope.active--;
      if ($scope.active >= $scope.audios.length) $scope.active = 0;
      if ($scope.active == -1) $scope.active = $scope.audios.length - 1;
      // play it
      $scope.setActive($scope.active);
    };

    $scope.setActive = function(index){
      $scope.API.stop();
      $scope.config.sources = $scope.audios[index].sources;
      $scope.config.title = $scope.audios[index].title;
    };

    $scope.toggleRepeat = function(){
      $scope.config.repeat = !$scope.config.repeat;
      if ($scope.isCompleted) $scope.API.play();
    };

    $scope.toggleShuffle = function(){
      $scope.config.shuffle = !$scope.config.shuffle;
      console.log($scope.API.currentState);
      if ($scope.isCompleted) $scope.API.play();
    };

    // video
    $scope.video = {
      sources: [
        {src: $sce.trustAsResourceUrl("http://flatfull.com/themes/assets/video/big_buck_bunny_trailer.m4v"), type: "video/mp4"},
        {src: $sce.trustAsResourceUrl("http://flatfull.com/themes/assets/video/big_buck_bunny_trailer.webm"), type: "video/webm"},
        {src: $sce.trustAsResourceUrl("http://flatfull.com/themes/assets/video/big_buck_bunny_trailer.ogv"), type: "video/ogg"}
      ],
      theme: {
        url: "js/app/music/videogular.css"
      },
      plugins: {
        controls: {
          autoHide: true,
          autoHideTime: 5000
        },
        poster: "img/c1.jpg"
      }
    };

  }]
);
app.controller('NoteCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('js/app/note/notes.json').then(function (resp) {
    $scope.notes = resp.data.notes;
    // set default note
    $scope.note = $scope.notes[0];
    $scope.notes[0].selected = true;
  });

  $scope.colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark'];

  $scope.createNote = function(){
    var note = {
      content: 'New note',
      color: $scope.colors[Math.floor((Math.random()*3))],
      date: Date.now()
    };
    $scope.notes.push(note);
    $scope.selectNote(note);
  }

  $scope.deleteNote = function(note){
    $scope.notes.splice($scope.notes.indexOf(note), 1);
    if(note.selected){
      $scope.note = $scope.notes[0];
      $scope.notes.length && ($scope.notes[0].selected = true);
    }
  }

  $scope.selectNote = function(note){
    angular.forEach($scope.notes, function(note) {
      note.selected = false;
    });
    $scope.note = note;
    $scope.note.selected = true;
  }

}]);

app.factory('todoStorage', function () {
    var STORAGE_ID = 'todos';

    return {
        get: function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },

        put: function (todos) {
            localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
        }
    };
});

app.controller('TodoCtrl', ['$scope', '$location', '$filter', 'todoStorage', function($scope, $location, $filter, todoStorage) {
    var todos = $scope.todos = todoStorage.get();

    $scope.newTodo = '';
    $scope.remainingCount = $filter('filter')(todos, {completed: false}).length;


    if ($location.path() === '') {
        $location.path('/');
    }

    $scope.location = $location;

    $scope.$watch('location.path()', function (path) {
        console.log(path);
        $scope.statusFilter = { '/app/todo/active': {completed: false}, '/app/todo/completed': {completed: true} }[path];
    });

    $scope.$watch('remainingCount == 0', function (val) {
        $scope.allChecked = val;
    });

    $scope.addTodo = function () {
        var newTodo = $scope.newTodo.trim();
        if (newTodo.length === 0) {
            return;
        }

        todos.push({
            title: newTodo,
            completed: false
        });
        todoStorage.put(todos);

        $scope.newTodo = '';
        $scope.remainingCount++;
    };

    $scope.editTodo = function (todo) {
        todo.editedTodo = true;
        // Clone the original todo to restore it on demand.
        $scope.originalTodo = angular.extend({}, todo);
    };

    $scope.doneEditing = function (todo) {
        todo.editedTodo = false;
        todo.title = todo.title.trim();

        if (!todo.title) {
            $scope.removeTodo(todo);
        }

        todoStorage.put(todos);
    };

    $scope.revertEditing = function (todo) {
        todos[todos.indexOf(todo)] = $scope.originalTodo;
        $scope.doneEditing($scope.originalTodo);
    };

    $scope.removeTodo = function (todo) {
        $scope.remainingCount -= todo.completed ? 0 : 1;
        todos.splice(todos.indexOf(todo), 1);
        todoStorage.put(todos);
    };

    $scope.todoCompleted = function (todo) {
        $scope.remainingCount += todo.completed ? -1 : 1;
        todoStorage.put(todos);
    };

    $scope.clearCompletedTodos = function () {
        $scope.todos = todos = todos.filter(function (val) {
            return !val.completed;
        });
        todoStorage.put(todos);
    };

    $scope.markAll = function (completed) {
        todos.forEach(function (todo) {
            todo.completed = completed;
        });
        $scope.remainingCount = !completed ? todos.length : 0;
        todoStorage.put(todos);
    };
}]);


var angularSkycons = angular.module( 'angular-skycons', [] );


angularSkycons.directive( 'skycon', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            icon: "=",
            size: "="
        },
        link: function ( scope, element, attrs ) {

            // make a canvas for our icon
            var canvas = document.createElement( 'canvas' );

            // set the CSS class from attribute
            if ( !attrs.class ) {
                canvas.className = "";
            } else {
                canvas.className = attrs.class;
            }

            // set default color if "color" attribute not present
            var config = {};
            if ( !attrs.color ) {
                config.color = "black";
            } else {
                config.color = attrs.color;
            }

            var skycons = new Skycons( config );

            // watch the size property from the controller
            scope.$watch( "size", function ( newVal, oldVal ) {
                if ( newVal ) {
                    canvas.height = newVal;
                    canvas.width = newVal;
                } else {
                    canvas.height = scope.size || 64;
                    canvas.width = scope.size  || 64;
                }
            }, true );

            // watch the icon property from the controller
            scope.$watch( "icon", function () {
                skycons.set( canvas, scope.icon );
            }, true );

            skycons.play();

            if ( element[0].nodeType === 8 ) {
                element.replaceWith( canvas );
            } else {
                element[0].appendChild( canvas );
            }
            
            scope.$on('$destroy', function () {
                skycons.remove(canvas);
                if (skycons.list.length === 0) {
                    skycons.pause(canvas);
                }
            });
        }
    };
} );

app.controller("WeatherCtrl", ['$scope', 'yahooApi', 'geoApi', function($scope, yahooApi, geoApi) {
    $scope.userSearchText = '';
    $scope.search = {};
    $scope.forcast = {};
    $scope.place = {};
    $scope.data = {};

    // get place
    geoApi.then(function(res) {
      $scope.userSearchText = res.data.city+", "+res.data.country_code;
      $scope.getLocations();
    });
    
    // get locations
    $scope.getLocations = function () {
      var query = 'select * from geo.places where text="' + $scope.userSearchText + '"';
      yahooApi.query({'q':query,'format':'json'}, {}, function (response) {
        $scope.search = response;
        if(response.query.count === 1 && !response.query.results.channel){
          $scope.getWeather( response.query.results.place.woeid, response.query.results.place.name, response.query.results.place.country.content);
        }
      });
    };

    // get weather
    $scope.getWeather = function(woeid, city, country){
      $scope.place.city = city;
      $scope.place.country = country;
      var query = 'select item from weather.forecast where woeid=' + woeid;
      yahooApi.query({'q':query,'format':'json'}, {}, function (response) {
        response.query.results.channel.item.forecast.forEach(function(i, v) {
          i.icon = $scope.getCustomIcon(i.code);
        });
        response.query.results.channel.item.condition.icon = $scope.getCustomIcon(response.query.results.channel.item.condition.code);
        $scope.data = response;
      });
    };

    $scope.getCustomIcon = function (condition) {
      switch (condition) {
        case "0":
        case "1":
        case "2":
        case "24":
        case "25":
            return "wind";
        case "5":
        case "6":
        case "7":        
        case "18":        
            return "sleet";
        case "3":
        case "4":
        case "8":        
        case "9":
        case "10":
        case "11":
        case "12":
        case "35":
        case "37":
        case "38":
        case "39":        
        case "40":
        case "45":
        case "47":
            return "rain";
        case "13":
        case "14":
        case "15":
        case "16":
        case "17":
        case "41":
        case "42":
        case "43":
        case "46":
            return "snow";
        case "19":
        case "20":
        case "21":
        case "22":
        case "23":
            return "fog";        
        case "26":
        case "27":
        case "28":
        case "44":
            return "cloudy";
        case "29":
            return "partly-cloudy-night";
        case "30":
            return "partly-cloudy-day";
        case "31":
        case "33":
            return "clear-night";
        case "32":
        case "34":
        case "36":
            return "clear-day";
        default:
            return "";
      }
    }
  }
]);

app.factory('yahooApi', ['$resource', function($resource) {
  return $resource('http://query.yahooapis.com/v1/public/yql', {}, 
    {'query': 
      {
        method: 'GET', 
        isArray: false
      }
    }
  );
}]);

app.factory('geoApi', ['$http', function($http) {
    return $http.jsonp("http://muslimsalat.com/daily.json?callback=JSON_CALLBACK");
  }
]);

function JSON_CALLBACK(){
  // Nothing
}
(function(global) {
  "use strict";

  /* Set up a RequestAnimationFrame shim so we can animate efficiently FOR
   * GREAT JUSTICE. */
  var requestInterval, cancelInterval;

  (function() {
    var raf = global.requestAnimationFrame       ||
              global.webkitRequestAnimationFrame ||
              global.mozRequestAnimationFrame    ||
              global.oRequestAnimationFrame      ||
              global.msRequestAnimationFrame     ,
        caf = global.cancelAnimationFrame        ||
              global.webkitCancelAnimationFrame  ||
              global.mozCancelAnimationFrame     ||
              global.oCancelAnimationFrame       ||
              global.msCancelAnimationFrame      ;

    if(raf && caf) {
      requestInterval = function(fn, delay) {
        var handle = {value: null};

        function loop() {
          handle.value = raf(loop);
          fn();
        }

        loop();
        return handle;
      };

      cancelInterval = function(handle) {
        caf(handle.value);
      };
    }

    else {
      requestInterval = setInterval;
      cancelInterval = clearInterval;
    }
  }());

  /* Catmull-rom spline stuffs. */
  /*
  function upsample(n, spline) {
    var polyline = [],
        len = spline.length,
        bx  = spline[0],
        by  = spline[1],
        cx  = spline[2],
        cy  = spline[3],
        dx  = spline[4],
        dy  = spline[5],
        i, j, ax, ay, px, qx, rx, sx, py, qy, ry, sy, t;

    for(i = 6; i !== spline.length; i += 2) {
      ax = bx;
      bx = cx;
      cx = dx;
      dx = spline[i    ];
      px = -0.5 * ax + 1.5 * bx - 1.5 * cx + 0.5 * dx;
      qx =        ax - 2.5 * bx + 2.0 * cx - 0.5 * dx;
      rx = -0.5 * ax            + 0.5 * cx           ;
      sx =                   bx                      ;

      ay = by;
      by = cy;
      cy = dy;
      dy = spline[i + 1];
      py = -0.5 * ay + 1.5 * by - 1.5 * cy + 0.5 * dy;
      qy =        ay - 2.5 * by + 2.0 * cy - 0.5 * dy;
      ry = -0.5 * ay            + 0.5 * cy           ;
      sy =                   by                      ;

      for(j = 0; j !== n; ++j) {
        t = j / n;

        polyline.push(
          ((px * t + qx) * t + rx) * t + sx,
          ((py * t + qy) * t + ry) * t + sy
        );
      }
    }

    polyline.push(
      px + qx + rx + sx,
      py + qy + ry + sy
    );

    return polyline;
  }

  function downsample(n, polyline) {
    var len = 0,
        i, dx, dy;

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      len += Math.sqrt(dx * dx + dy * dy);
    }

    len /= n;

    var small = [],
        target = len,
        min = 0,
        max, t;

    small.push(polyline[0], polyline[1]);

    for(i = 2; i !== polyline.length; i += 2) {
      dx = polyline[i    ] - polyline[i - 2];
      dy = polyline[i + 1] - polyline[i - 1];
      max = min + Math.sqrt(dx * dx + dy * dy);

      if(max > target) {
        t = (target - min) / (max - min);

        small.push(
          polyline[i - 2] + dx * t,
          polyline[i - 1] + dy * t
        );

        target += len;
      }

      min = max;
    }

    small.push(polyline[polyline.length - 2], polyline[polyline.length - 1]);

    return small;
  }
  */

  /* Define skycon things. */
  /* FIXME: I'm *really really* sorry that this code is so gross. Really, I am.
   * I'll try to clean it up eventually! Promise! */
  var KEYFRAME = 500,
      STROKE = 0.08,
      TAU = 2.0 * Math.PI,
      TWO_OVER_SQRT_2 = 2.0 / Math.sqrt(2);

  function circle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, TAU, false);
    ctx.fill();
  }

  function line(ctx, ax, ay, bx, by) {
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.stroke();
  }

  function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var c = Math.cos(t * TAU),
        s = Math.sin(t * TAU);

    rmax -= rmin;

    circle(
      ctx,
      cx - s * rx,
      cy + c * ry + rmax * 0.5,
      rmin + (1 - c * 0.5) * rmax
    );
  }

  function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
    var i;

    for(i = 5; i--; )
      puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
  }

  function cloud(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.12,
        c = cw * 0.24,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  function sun(ctx, t, cx, cy, cw, s, color) {
    t /= 120000;

    var a = cw * 0.25 - s * 0.5,
        b = cw * 0.32 + s * 0.5,
        c = cw * 0.50 - s * 0.5,
        i, p, cos, sin;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(cx, cy, a, 0, TAU, false);
    ctx.stroke();

    for(i = 8; i--; ) {
      p = (t + i / 8) * TAU;
      cos = Math.cos(p);
      sin = Math.sin(p);
      line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c);
    }
  }

  function moon(ctx, t, cx, cy, cw, s, color) {
    t /= 15000;

    var a = cw * 0.29 - s * 0.5,
        b = cw * 0.05,
        c = Math.cos(t * TAU),
        p = c * TAU / -16;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    cx += c * b;

    ctx.beginPath();
    ctx.arc(cx, cy, a, p + TAU / 8, p + TAU * 7 / 8, false);
    ctx.arc(cx + Math.cos(p) * a * TWO_OVER_SQRT_2, cy + Math.sin(p) * a * TWO_OVER_SQRT_2, a, p + TAU * 5 / 8, p + TAU * 3 / 8, true);
    ctx.closePath();
    ctx.stroke();
  }

  function rain(ctx, t, cx, cy, cw, s, color) {
    t /= 1350;

    var a = cw * 0.16,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.fillStyle = color;

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a;
      y = cy + p * p * cw;
      ctx.beginPath();
      ctx.moveTo(x, y - s * 1.5);
      ctx.arc(x, y, s * 0.75, b, c, false);
      ctx.fill();
    }
  }

  function sleet(ctx, t, cx, cy, cw, s, color) {
    t /= 750;

    var a = cw * 0.1875,
        b = TAU * 11 / 12,
        c = TAU *  7 / 12,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = Math.floor(cx + ((i - 1.5) / 1.5) * (i === 1 || i === 2 ? -1 : 1) * a) + 0.5;
      y = cy + p * cw;
      line(ctx, x, y - s * 1.5, x, y + s * 1.5);
    }
  }

  function snow(ctx, t, cx, cy, cw, s, color) {
    t /= 3000;

    var a  = cw * 0.16,
        b  = s * 0.75,
        u  = t * TAU * 0.7,
        ux = Math.cos(u) * b,
        uy = Math.sin(u) * b,
        v  = u + TAU / 3,
        vx = Math.cos(v) * b,
        vy = Math.sin(v) * b,
        w  = u + TAU * 2 / 3,
        wx = Math.cos(w) * b,
        wy = Math.sin(w) * b,
        i, p, x, y;

    ctx.strokeStyle = color;
    ctx.lineWidth = s * 0.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for(i = 4; i--; ) {
      p = (t + i / 4) % 1;
      x = cx + Math.sin((p + i / 4) * TAU) * a;
      y = cy + p * cw;

      line(ctx, x - ux, y - uy, x + ux, y + uy);
      line(ctx, x - vx, y - vy, x + vx, y + vy);
      line(ctx, x - wx, y - wy, x + wx, y + wy);
    }
  }

  function fogbank(ctx, t, cx, cy, cw, s, color) {
    t /= 30000;

    var a = cw * 0.21,
        b = cw * 0.06,
        c = cw * 0.21,
        d = cw * 0.28;

    ctx.fillStyle = color;
    puffs(ctx, t, cx, cy, a, b, c, d);

    ctx.globalCompositeOperation = 'destination-out';
    puffs(ctx, t, cx, cy, a, b, c - s, d - s);
    ctx.globalCompositeOperation = 'source-over';
  }

  /*
  var WIND_PATHS = [
        downsample(63, upsample(8, [
          -1.00, -0.28,
          -0.75, -0.18,
          -0.50,  0.12,
          -0.20,  0.12,
          -0.04, -0.04,
          -0.07, -0.18,
          -0.19, -0.18,
          -0.23, -0.05,
          -0.12,  0.11,
           0.02,  0.16,
           0.20,  0.15,
           0.50,  0.07,
           0.75,  0.18,
           1.00,  0.28
        ])),
        downsample(31, upsample(16, [
          -1.00, -0.10,
          -0.75,  0.00,
          -0.50,  0.10,
          -0.25,  0.14,
           0.00,  0.10,
           0.25,  0.00,
           0.50, -0.10,
           0.75, -0.14,
           1.00, -0.10
        ]))
      ];
  */

  var WIND_PATHS = [
        [
          -0.7500, -0.1800, -0.7219, -0.1527, -0.6971, -0.1225,
          -0.6739, -0.0910, -0.6516, -0.0588, -0.6298, -0.0262,
          -0.6083,  0.0065, -0.5868,  0.0396, -0.5643,  0.0731,
          -0.5372,  0.1041, -0.5033,  0.1259, -0.4662,  0.1406,
          -0.4275,  0.1493, -0.3881,  0.1530, -0.3487,  0.1526,
          -0.3095,  0.1488, -0.2708,  0.1421, -0.2319,  0.1342,
          -0.1943,  0.1217, -0.1600,  0.1025, -0.1290,  0.0785,
          -0.1012,  0.0509, -0.0764,  0.0206, -0.0547, -0.0120,
          -0.0378, -0.0472, -0.0324, -0.0857, -0.0389, -0.1241,
          -0.0546, -0.1599, -0.0814, -0.1876, -0.1193, -0.1964,
          -0.1582, -0.1935, -0.1931, -0.1769, -0.2157, -0.1453,
          -0.2290, -0.1085, -0.2327, -0.0697, -0.2240, -0.0317,
          -0.2064,  0.0033, -0.1853,  0.0362, -0.1613,  0.0672,
          -0.1350,  0.0961, -0.1051,  0.1213, -0.0706,  0.1397,
          -0.0332,  0.1512,  0.0053,  0.1580,  0.0442,  0.1624,
           0.0833,  0.1636,  0.1224,  0.1615,  0.1613,  0.1565,
           0.1999,  0.1500,  0.2378,  0.1402,  0.2749,  0.1279,
           0.3118,  0.1147,  0.3487,  0.1015,  0.3858,  0.0892,
           0.4236,  0.0787,  0.4621,  0.0715,  0.5012,  0.0702,
           0.5398,  0.0766,  0.5768,  0.0890,  0.6123,  0.1055,
           0.6466,  0.1244,  0.6805,  0.1440,  0.7147,  0.1630,
           0.7500,  0.1800
        ],
        [
          -0.7500,  0.0000, -0.7033,  0.0195, -0.6569,  0.0399,
          -0.6104,  0.0600, -0.5634,  0.0789, -0.5155,  0.0954,
          -0.4667,  0.1089, -0.4174,  0.1206, -0.3676,  0.1299,
          -0.3174,  0.1365, -0.2669,  0.1398, -0.2162,  0.1391,
          -0.1658,  0.1347, -0.1157,  0.1271, -0.0661,  0.1169,
          -0.0170,  0.1046,  0.0316,  0.0903,  0.0791,  0.0728,
           0.1259,  0.0534,  0.1723,  0.0331,  0.2188,  0.0129,
           0.2656, -0.0064,  0.3122, -0.0263,  0.3586, -0.0466,
           0.4052, -0.0665,  0.4525, -0.0847,  0.5007, -0.1002,
           0.5497, -0.1130,  0.5991, -0.1240,  0.6491, -0.1325,
           0.6994, -0.1380,  0.7500, -0.1400
        ]
      ],
      WIND_OFFSETS = [
        {start: 0.36, end: 0.11},
        {start: 0.56, end: 0.16}
      ];

  function leaf(ctx, t, x, y, cw, s, color) {
    var a = cw / 8,
        b = a / 3,
        c = 2 * b,
        d = (t % 1) * TAU,
        e = Math.cos(d),
        f = Math.sin(d);

    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    ctx.arc(x        , y        , a, d          , d + Math.PI, false);
    ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d          , false);
    ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d          , true );
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
    ctx.stroke();
  }

  function swoosh(ctx, t, cx, cy, cw, s, index, total, color) {
    t /= 2500;

    var path = WIND_PATHS[index],
        a = (t + index - WIND_OFFSETS[index].start) % total,
        c = (t + index - WIND_OFFSETS[index].end  ) % total,
        e = (t + index                            ) % total,
        b, d, f, i;

    ctx.strokeStyle = color;
    ctx.lineWidth = s;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if(a < 1) {
      ctx.beginPath();

      a *= path.length / 2 - 1;
      b  = Math.floor(a);
      a -= b;
      b *= 2;
      b += 2;

      ctx.moveTo(
        cx + (path[b - 2] * (1 - a) + path[b    ] * a) * cw,
        cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw
      );

      if(c < 1) {
        c *= path.length / 2 - 1;
        d  = Math.floor(c);
        c -= d;
        d *= 2;
        d += 2;

        for(i = b; i !== d; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

        ctx.lineTo(
          cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
          cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
        );
      }

      else
        for(i = b; i !== path.length; i += 2)
          ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.stroke();
    }

    else if(c < 1) {
      ctx.beginPath();

      c *= path.length / 2 - 1;
      d  = Math.floor(c);
      c -= d;
      d *= 2;
      d += 2;

      ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw);

      for(i = 2; i !== d; i += 2)
        ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);

      ctx.lineTo(
        cx + (path[d - 2] * (1 - c) + path[d    ] * c) * cw,
        cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw
      );

      ctx.stroke();
    }

    if(e < 1) {
      e *= path.length / 2 - 1;
      f  = Math.floor(e);
      e -= f;
      f *= 2;
      f += 2;

      leaf(
        ctx,
        t,
        cx + (path[f - 2] * (1 - e) + path[f    ] * e) * cw,
        cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw,
        cw,
        s,
        color
      );
    }
  }

  var Skycons = function(opts) {
        this.list        = [];
        this.interval    = null;
        this.color       = opts && opts.color ? opts.color : "black";
        this.resizeClear = !!(opts && opts.resizeClear);
      };

  Skycons.CLEAR_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.CLEAR_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_DAY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sun(ctx, t, w * 0.625, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.PARTLY_CLOUDY_NIGHT = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    moon(ctx, t, w * 0.667, h * 0.375, s * 0.75, s * STROKE, color);
    cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
  };

  Skycons.CLOUDY = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    cloud(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
  };

  Skycons.RAIN = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SLEET = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    sleet(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.SNOW = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
    cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
  };

  Skycons.WIND = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h);

    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
    swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
  };

  Skycons.FOG = function(ctx, t, color) {
    var w = ctx.canvas.width,
        h = ctx.canvas.height,
        s = Math.min(w, h),
        k = s * STROKE;

    fogbank(ctx, t, w * 0.5, h * 0.32, s * 0.75, k, color);

    t /= 5000;

    var a = Math.cos((t       ) * TAU) * s * 0.02,
        b = Math.cos((t + 0.25) * TAU) * s * 0.02,
        c = Math.cos((t + 0.50) * TAU) * s * 0.02,
        d = Math.cos((t + 0.75) * TAU) * s * 0.02,
        n = h * 0.936,
        e = Math.floor(n - k * 0.5) + 0.5,
        f = Math.floor(n - k * 2.5) + 0.5;

    ctx.strokeStyle = color;
    ctx.lineWidth = k;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
    line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
  };

  Skycons.prototype = {
    _determineDrawingFunction: function(draw) {
      if(typeof draw === "string")
        draw = Skycons[draw.toUpperCase().replace(/-/g, "_")] || null;

      return draw;
    },
    add: function(el, draw) {
      var obj;

      if(typeof el === "string")
        el = document.getElementById(el);

      // Does nothing if canvas name doesn't exists
      if(el === null)
        return;

      draw = this._determineDrawingFunction(draw);

      // Does nothing if the draw function isn't actually a function
      if(typeof draw !== "function")
        return;

      obj = {
        element: el,
        context: el.getContext("2d"),
        drawing: draw
      };

      this.list.push(obj);
      this.draw(obj, KEYFRAME);
    },
    set: function(el, draw) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list[i].drawing = this._determineDrawingFunction(draw);
          this.draw(this.list[i], KEYFRAME);
          return;
        }

      this.add(el, draw);
    },
    remove: function(el) {
      var i;

      if(typeof el === "string")
        el = document.getElementById(el);

      for(i = this.list.length; i--; )
        if(this.list[i].element === el) {
          this.list.splice(i, 1);
          return;
        }
    },
    draw: function(obj, time) {
      var canvas = obj.context.canvas;

      if(this.resizeClear)
        canvas.width = canvas.width;

      else
        obj.context.clearRect(0, 0, canvas.width, canvas.height);

      obj.drawing(obj.context, time, this.color);
    },
    play: function() {
      var self = this;

      this.pause();
      this.interval = requestInterval(function() {
        var now = Date.now(),
            i;

        for(i = self.list.length; i--; )
          self.draw(self.list[i], now);
      }, 1000 / 60);
    },
    pause: function() {
      var i;

      if(this.interval) {
        cancelInterval(this.interval);
        this.interval = null;
      }
    }
  };

  global.Skycons = Skycons;
}(this));
