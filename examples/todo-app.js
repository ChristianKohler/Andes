(function(){
	"use strict";
	
	class TodoApp extends Andes.Component {
		createdCallback() {
			this.setState({ items: [], text: '' });
			
			this.addEventListener('submit', this.onSubmit);
      		this.addEventListener('change', this.onChange);
		}
		
		onSubmit(e) {
			e.preventDefault();
			var nextItems = this.state.items.concat([{ id:0, desc: this.state.text } ]);
			var nextText = '';
			this.setState({items: nextItems, text: nextText});
		}
	
  		onChange(e) {
			this.setState({text: e.target.value});
		}
		
		render() {
			return `
				<div>
					<h2>TODOS</h2>
					<ul>
						${this.state.items.map(this.renderTodo).join("")}
					</ul>
					<form>
						<input value="${this.state.text}" />
						<button>Add</button>
					</form>
				</div>
			`;	
		}
		
		renderTodo(item) {
			return `
				<li><b>${item.id}</b> ${item.desc}</li>
			`;
		}
	}
	
	Andes.AppRegistry.registerComponent('todo-app', () => TodoApp);
})();