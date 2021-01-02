var app = angular
 .module("myModule",[])
 .controller("myController", function($scope){
     var Tasks = [];
     $scope.Tasks=Tasks;
     $scope.addtask=(name)=>{
         Tasks.push({tname:name,tcompleted:false});
         console.log(Tasks);
         $scope.taskname="";
     }
     $scope.remove = function() {
        var oldList = $scope.Tasks;
        $scope.Tasks = [];
        angular.forEach(oldList, function(x) {
            if (!x.tcompleted) $scope.Tasks.push(x);
        });
    };
 });