(function() {

	document.addEventListener('DOMContentLoaded', function() {
		InlineSharer.init();
	}, false);


	var InlineSharer = {
		handleClick : function (e) {
			e.preventDefault();
			window.open('https://twitter.com/intent/tweet?text=' + this.getAttribute('data-text'), "_blank", "width=700, height=300");
		},
		init : function() {

			var links = document.querySelectorAll('.inline-sharer');

			[].forEach.call(links, function (el) {

				var elementIcon = document.createElement('span');
				var elementText = document.createElement('span');

				elementIcon.className = "inline-sharer__icon";
				elementText.className = "inline-sharer__copy";

				elementText.innerText = el.text;
				el.text = '';

				el.appendChild(elementText);
				el.appendChild(elementIcon);

				el.addEventListener('click', this.handleClick)

			}.bind(this));
		}
	};


}());