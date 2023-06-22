class Toc {
	
	constructor(elem, options = {}) {

		// Get options
		let { level, listStyle, listClass } = Object.assign({
			level     : 'h2',
			listStyle : 'ul',
			listClass : ''
		}, options);
		
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
	}
}

// An instance with default settings
let toc = new Toc('[data-toc]');

// Another one, scoped to a different element
let toc2 = new Toc('#toc-two', {
	level: '#some-elem h3',
	listClass: 'list-inline'
});
