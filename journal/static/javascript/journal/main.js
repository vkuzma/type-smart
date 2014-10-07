/* global Cursor */

'use strict';

(function () {

	var $text = $('#text');

	var cursor = new Cursor($text);
	cursor.startBlinking();

	var $currentLine = $('<div>');
	$text.append($currentLine);
	$(window).keypress(function(event) {
		if(event.which == 13) {
			$currentLine = $('<div>&nbsp;</div>');
			$text.append($currentLine);
			cursor.moveTo($currentLine);
		}
		else {
			if($currentLine.html() == '&nbsp;') {
				$currentLine.html('');
			}
			$currentLine.append(String.fromCharCode(event.which));
			cursor.moveForward();
		}
	});

	$(window).keypress(function(event) {
		event.preventDefault();

		if(event.which == 38) {

		}
		else if(event.which == 40) {

		}
	});

	$text.on('click', '> div', function(event) {
		$currentLine = $(this);
		cursor.moveTo($currentLine, true);
		// $(this).css('background', 'red');
	});
})();