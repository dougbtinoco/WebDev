/* ALUNO: DOUGLAS BUZZANELLO TINOCO      NºUSP: 8936360 */
var pagina_post = angular.module('paginaUsuario', ['paginaInicial']);

	pagina_post.controller('postsController', function($scope){

		$scope.posts = [
			{postagem: 'Caraca que rede social interessante!!!!'},
			{postagem: 'Nao consigo ficar sem postar mais!!! :O'},
			{postagem: 'Complicado ficar tanto tempo longe dessas tecnologias!!!'}
		];

		$scope.inserirPost = function(novo_post){
			$scope.posts.push(angular.copy(novo_post));
			delete $scope.novo_post;
		};

		$scope.apagarPost = function(posts, novo_post){

			var response = confirm("Deseja apagar essa postagem mesmo?");
				
			if (response == true) {
				var aux = posts.indexOf(novo_post);
				posts.splice(aux, 1);
			}
			else{
				window.alert("Cancelado!");
			}	
		};

		$scope.editarPost = function(posts, novo_post){

			var response = confirm("Deseja editar essa postagem mesmo?");

			if (response == true) {
				var aux = posts.indexOf(novo_post);
				var aux_edit = prompt("Edite a postagem:", novo_post.postagem);
				if(aux_edit != null){
					posts[aux].postagem = aux_edit;
				}
			}
			else{
				window.alert("Cancelado!");
			}
		};

		$scope.curtirPost = function(post){
			window.alert("Gostei!");
		};

		$scope.compartilharPost = function(post){
			var response = confirm("Deseja mesmo compartilhar esse post?");
			if(response == true){
				window.alert("Compartilhado!");
			}
			else{
				window.alert("Cancelado.");
			}
		};

		$scope.sairSite = function(){
			window.alert("Saindo!");
		};

		$scope.verGrupos = function(){
			window.alert("Grupos que voce pertence!");
		};

		$scope.editarPerfil = function(){
			window.alert("Editar perfil!");
		};

		$scope.pesquisar = function(){
			window.open(href="research.html", "_self");

		};



	});
