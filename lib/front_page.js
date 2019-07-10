/* ALUNO: DOUGLAS BUZZANELLO TINOCO      NºUSP: 8936360 */
var first_page = angular.module('paginaInicial', []);

	first_page.controller('cadastroController', function($scope){

		$scope.cadastrados = [
			{nome: 'Pedro',
			sobrenome:'Santos',
			email:'pedro.santos@email.com',
			usuario:'pedroSantos',
			senha:'pedro123',
			/*posts: [],
			grupos: [],
			segue: [],
			seguido: []
			*/},

			{nome: 'Maria',
			sobrenome:'Silveira',
			email:'maria.silveira@email.com',
			usuario:'maria_silveira',
			senha:'maria123',
			/*posts: [],
			grupos: [],
			segue: [],
			seguido: []
			*/}
		];
		$scope.cadastrarUsuario = function (registro){
			$scope.cadastrados.push(angular.copy(registro));
			delete $scope.registro;
			$scope.registroForm.$setPristine();
		};
		$scope.verificarUsuario = function (login){
			var aux_user = login.usuario;
			var aux_senha = login.senha;

			for (var i = 0; i < $scope.cadastrados.length; i++) {
				if(($scope.cadastrados[i].usuario == aux_user) && ($scope.cadastrados[i].senha == aux_senha)){
					window.alert("Login deu certo!!\n");
					window.open(href="home_page.html", "_self");
					delete $scope.login;
					break;
				}
				else{
					window.open(href="erro_login.html", "_self");
				}
			}
		};

});

