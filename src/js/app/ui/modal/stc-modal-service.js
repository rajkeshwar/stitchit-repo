

app.service('modalService', 
    [         '$uibModal','$templateCache',
    function ( $uibModal,  $templateCache ) {

    var modalDefaults = {
        backdrop: true,
        keyboard: true,
        modalFade: true,
        templateUrl: 'modalDialog.tpl.html'
    };

    var modalOptions = {
        closeText: 'Close',
        okText: 'OK',
        headerText: 'Proceed?',
        bodyText: 'Perform this action?'
    };

    $templateCache.put('modalDialog.tpl.html', 
        '<div>' +
        '    <div class="modal-header">' +
        '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" data-ng-click="modalOptions.close()">&times;</button>' +
        '        <h3 class="modal-h">{{modalOptions.headerText}}</h3>' +
        '    </div>' +
        '    <div class="modal-body">' +
        '        <p>{{modalOptions.bodyText}}</p>' +
        '    </div>' +
        '    <div class="modal-footer">' +
        '        <button class="btn btn-primary" data-ng-click="modalOptions.ok()">{{modalOptions.okText}}</button>' +
        '        <button class="btn btn-info" data-ng-click="modalOptions.close()">{{modalOptions.closeText}}</button>' +
        '    </div>' +
        '</div>'
    );

    this.showModal = function (customModalDefaults, customModalOptions) {
        if (!customModalDefaults) customModalDefaults = {};
        customModalDefaults.backdrop = 'static';
        return this.show(customModalDefaults, customModalOptions);
    };

    this.show = function (customModalDefaults, customModalOptions) {
        //Create temp objects to work with since we're in a singleton service
        var tempModalDefaults = {
            size: 'login'
        };
        var tempModalOptions = {};

        //Map angular-ui modal custom defaults to modal defaults defined in service
        angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

        //Map modal.html $scope custom properties to defaults defined in service
        angular.extend(tempModalOptions, modalOptions, customModalOptions);

        if (!tempModalDefaults.controller) {
            tempModalDefaults.controller = function ($scope, $uibModalInstance) {
                $scope.modalOptions = tempModalOptions;
                $scope.modalOptions.ok = function (result) {
                    $uibModalInstance.close(result);
                };
                $scope.modalOptions.close = function (result) {
                    $uibModalInstance.dismiss('cancel');
                };
            }
        }
        return $uibModal.open(tempModalDefaults).result;
    };

}]);