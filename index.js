import { diff, create, patch } from 'virtual-dom';
import virtualHTML from 'virtual-html';

export class Component extends HTMLElement {
	setState(state) {
		this.state = this.state || {};
		
		for(let stateProp in state) {
			this.state[stateProp] = state[stateProp];
		}
		
		if(!this.render) {
			return;
		}
		
		let nextTree = virtualHTML(this.render());
		
		if(this._rootNode) {
			patch(this._rootNode, diff(this._currentTree, nextTree));
		} else {
			this._rootNode = create(nextTree);
			this.appendChild(this._rootNode);
		}
		
		[].slice.call(this._rootNode.querySelectorAll('[data-bind-state]')).forEach(node => {
			node.setState(this.state);
		});
		
		this._currentTree = nextTree;
	}
}

export class AppRegistry {
	static registerComponent(selector, componentProvider) {
		document.registerElement(selector, {
  			prototype: componentProvider().prototype
		});
	}
}