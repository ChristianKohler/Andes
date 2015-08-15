(function(){
	"use strict";
	
	class HelloWorld extends Andes.Component {
		createdCallback() {
			this.setState({ name: 'World' });
			
			this.addEventListener('keyup', e => {
				this.setState({name: e.target.value}) 
			});
		}
		
		render() {
			return `
				<div>
					<h2>Hello ${this.state.name}</h2>
					<form>
						<input value="${this.state.name}" />
					</form>
				</div>
			`;	
		}
	}
	
	Andes.AppRegistry.registerComponent('example-helloworld', () => HelloWorld);
})();