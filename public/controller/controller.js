var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Hello World from controller");
	var refresh =function(){
			$http.get('bookContent').then(function(response) {
				console.log("I got the data I requested");
				console.log("this",$scope.bookList)
				$scope.bookList =response.data
				$scope.book = {};

			},function(error){
				console.log("here is error in refresh")
			})
    }
    refresh()








$scope.addContant=function(){
       $scope.bookList=[]
      console.log($scope.book)	
	  $http.post('/bookContent',$scope.book).then(function(response){
	  	     console.log("myBodyis",$scope.bookList)
             // console.log("Hiss",response)
              $scope.bookList .push(response.data);
              $scope.book={};
              refresh();
	  })  
};








var save=function(){
	  $http.post('/bookContent', $scope.bookList).then(function(response){
	  	     // refresh()

	  }) 
}





$scope.remove=function(id){
    var obj={}
    obj._id=id
    console.log("obj+++++++++++++",obj._id)
	$http.get('/bookContent').then(function(response){
		console.log("response----------------",response.data)
		var arr=response.data
		for(var i=0;i<arr.length;i++){
				if(arr[i]._id===obj._id){
					console.log("arr[i]._id",arr[i]._id)
					arr.splice(i,1)
	                $scope.bookList=arr;
	                $scope.book={};
				    console.log("arrssssss",arr[i])
			   }
			   else{
			   	$scope.bookList=response.data;
			   	$scope.book={};
			   }
		}
	},function(error){
		console.log("there is an erorrrrrr")
			})
   
};
     
}]);﻿
