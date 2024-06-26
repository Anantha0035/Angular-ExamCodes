angular.module('serviceApp',[]).controller('serviceController',['$scope',function($scope){
    $scope.services=[];
    $scope.newService={
        name:'',
        description:'',
        date:''
    };
    $scope.addService=function(){
        if($scope.newService.name && $scope.newService.description && $scope.newService.date)
            {
                $scope.services.push({
                    name:$scope.newService.name,
                    description:$scope.newService.description,
                    date:$scope.newService.date
                });
                $scope.newService.name='';
                $scope.newService.description='';
                $scope.newService.time='';
            }
    };
    
}]);