(function(){
	"use strict";
	
	class Timer extends Andes.Component {
		createdCallback() {
			this.setState({ elapsed: 0 });
		}
		
		attachedCallback() {
			this.started = new Date();
			this.timer = setInterval(() => this.tick(), 50);
		}
		
		detachedCallback() {
			clearInterval(this.timer);
		}
		
		tick() {
        	this.setState({ elapsed: new Date() - this.started });
		}
				
		render() {
			var elapsed = Math.round(this.state.elapsed / 100);
			var seconds = (elapsed / 10).toFixed(1);
			 
			return `
				<p>This example was started <b>${seconds} seconds</b> ago.</p>
			`;	
		}
	}
	
	Andes.AppRegistry.registerComponent('timer-example', () => Timer);
})();