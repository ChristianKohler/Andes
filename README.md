# Andes
A library for creating React like components with ES6 / Custom Elements and virtual-dom.

## Example
See all the examples in ./examples/

Write the component
```js
class HelloWorld extends Andes.Component {
	createdCallback() {
		this.setState({ name: 'World' });
	}
	
	render() {
		return `
			<h2>Hello ${this.state.name}</h2>
		`;	
	}
}

Andes.AppRegistry.registerComponent('example-helloworld', () => HelloWorld);
```
and then just add the newly created tag to you html file:
```html
<example-helloworld></example-helloworld>
```
## Technologies & Libraries used
* [custom-elements](http://w3c.github.io/webcomponents/spec/custom/)
* [virtual-dom](https://github.com/Matt-Esch/virtual-dom)
* [virtual-html](https://github.com/azer/virtual-html)

## Motivation / Ideas
Andes is heavily inspired by React. The motivation was the create similar components by only using modern browser features.

### Virtual Dom
I started with just taking the output of the render function and replace the current content with it. Problem was that the event listeners would have to be rebinded after every state change. 

This is why Andes uses the great virtual-dom library by Matt Esch and virtual-html by azer.  

### Event binding
There is no React like event binding on the element. Just add event listeners on createdCallback or attachedCallback. There is an example in the examples folder on how to use event binding.

The examples are very basic and it is not recommended to just add an event listener on the root element. A querySelector or event filter would be better.

## Usage
Andes works already very well but I would not recommend to use it in production.

To try it out just clone this repo and:

	npm install
	npm start
	
and then head to localhost:8080.
