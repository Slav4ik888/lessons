import ShowHide from './show-hide.js';


class Toc {
	
	constructor(elem, options = {}) {

		// Get options
		let { level, listStyle, listClass } = Object.assign({
			level     : 'h2',
			listStyle : 'ul',
			listClass : ''
		}, options);

		// Define instance properties
		Object.assign(this, { elem, level, listStyle, listClass });
		
		// render the initial UI
		this.render();
	}


	#emit (name, toc) {
		console.log('#emit: ', name);

		// Create the event
		let event = new CustomEvent(`toc-${name}`, {
			bubbles    : true,
			cancelable : false
		});

		// Emit the event on the table of contents element
		toc.dispatchEvent(event);

	}


	render() {
		// Get properties from instance
		let { elem, level, listStyle, listClass } = this;

		// Get DOM elements
		let headings = document.querySelectorAll(level);
		let toc = document.querySelector(elem);

		
		// Create the list items
		let listItems = Array.from(headings).map(function (heading) {

			// If there's no ID on the heading, skip to the next one
			if (!heading.id) return;

			return `<li><a href="#${heading.id}">${heading.innerText}</a></li>`;

		}).join('');

		// Inject the table of contents into the DOM
		if (toc) toc.innerHTML = `<${listStyle} class="${listClass}">${listItems}</${listStyle}>`;

		// Emit a custom event
		this.#emit('render', toc);
	}

	destroy () {
		console.log('destroy: ', this.elem);
		let toc = document.querySelector(this.elem);
		// toc.innerHTML = '';
		this.#emit('destroy', toc);
	}
}


document.addEventListener('toc-render', function (event) {

	// The element that was rendered into
	let toc = event.target;
	console.log('event.target render: ', event.target);

	// Run some other code
	// In this example, we're initializing a show/hide script
	new ShowHide(toc);
});

document.addEventListener('toc-destroy', function (event) {

	// The element that was destroy into
	let toc = event.target;
	console.log('event.target destroy: ', event.target);

	// Run some other code
	// In this example, we're initializing a show/hide script
	new ShowHide(toc, true);
});


export default Toc;

// setTimeout(() => toc.destroy(), 2000);


// Another one, scoped to a different element
// let toc2 = new Toc('#toc-two', {
// 	level: '#some-elem h3',
// 	listClass: 'list-inline'
// });
