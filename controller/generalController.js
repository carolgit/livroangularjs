// nome da função deve ser o mesmo do referenciado no ng-controller na página html
// um mesmo arquivo js pode conter vários controllers
// o parâmetro scope é um ponteiro para a aplicação, ou seja, $scope = página html
// $scope cria conexão entre model e view
function simpleController($scope)
{
	$scope.user = {name: "John Doe"}
}

function countController($scope)
{
	$scope.counter = 0;
	// função dentro do controller chamar com ng-click por exemplo
	$scope.addOne = function(){
		$scope.counter++;
	}
}

function loopController($scope){
	$scope.fruits = ['banana', 'apple', 'orange'];
} 