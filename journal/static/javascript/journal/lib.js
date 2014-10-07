var Cursor = function($container) {
	this.$container = $container
	this.init();
};

Cursor.prototype = {
	init: function() {
		this.$cursor = $('<div class="cursor"></div>');
		this.$cursor.css('left', 0).css('top', 0);
		this.$container.append(this.$cursor);
	},
	startBlinking: function() {
		this._blink();
	},
	moveForward: function() {
		this.$cursor.css('left', this.$cursor.position().left + 8.4);

	},
	moveTo: function($item, toEnd) {
		this.$cursor.css('top', $item.position().top);
		if(toEnd) {
			console.log($item.text());
			this.$cursor.css('left', $item.text().length * 8.4);
		}
		else {
			this.$cursor.css('left', 0);
		}
	},
	_blink: function(isVisible) {
		var self = this;
		if(isVisible) {
			this.$cursor.css('visibility', 'hidden');
		}
		else {
			this.$cursor.css('visibility', 'visible');
		}

		isVisible = !isVisible;
		setTimeout(function() {
			self._blink(isVisible);
		}, 300);
	}
}