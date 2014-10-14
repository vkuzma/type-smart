/* global Cursor */

'use strict';

(function () {

	var SmartText = function() {
		this.$text = $('#text');
		this.init();

		this.commandMap = [{
			name: 'Title',
			command: '<Title>',
			action: function() {
				console.log("OK");
			} 
		}, {
			name: 'text',
			command: 'text',
			action: function() {
				console.log("OK");
			} 
		}];
	};




	SmartText.prototype = {
		init: function() {
			this.cursor = new Cursor(this.$text);
			this.cursor.startBlinking();

			this.commandPreview = new CommandPreview(this.$text);

			this.$currentLine = $('<div>');
			this.$currentSpan = $('<span>');
			this.$currentLine.append(this.$currentSpan);

			this.$text.append(this.$currentLine);
			$(window).keypress($.proxy(function(event) {
				// enter pressed
				var pressedChar = String.fromCharCode(event.which);
				var textBefore = self.$currentLine.text();
				
				event.preventDefault();

				// press enter
				if(event.which == 13) {
					if(this.possibleCommands && this.possibleCommands.length) {
						this.addCommand(this.possibleCommands.shift());
					}
					else {
						this.addNewline();
					}
				}
				else if(event.which == 38) {

				}
				else if(event.which == 40) {

				}
				// del pressed
				else if(event.which == 127) {

				}
				// whitespace pressed
				else if(event.which == 32) {
					if(textBefore[textBefore.length - 1] != ' ') {
						this.addChar(pressedChar);
						this.addSpan();
					}
				}
				else {
					this.addChar(pressedChar);
				}

				var textAfter = self.$currentLine.children();
				this.possibleCommands = self.searchForCommands(textAfter);
				this.commandPreview.displayCommands(this.possibleCommands);
				this.commandPreview.setToCursor(this.cursor);
			}, this));

			var self = this;
			this.$text.on('click', '> div', function(event) {
				self.$currentLine = $(this);
				self.cursor.moveTo(self.$currentLine, true);
			});
		},
		parseCommandContext: function(command) {
			var startVariable = command.search('<'); 
			var endVariable = command.search('>');
			var input = command.substring(startVariable + 1, endVariable);
			var inputHtml = $('<span class="command overwrite">' + input + '</span>');
			this.$currentLine.append(inputHtml).append('&nbsp;');
			this.cursor.moveTo(inputHtml);
			this.$currentSpan = inputHtml;
		},
		searchForCommands: function(text) {
			var lastCommand = text.last().text();
			var possibleCommands = [];
			for(var key in this.commandMap) {
				var command = this.commandMap[key];
				var commandName = command.command;
				if(commandName.search(lastCommand) != -1 && lastCommand) {
					possibleCommands.push(command);
				}
			}
			return possibleCommands;
		},
		addNewline: function() {
			this.$currentLine = $('<div>&nbsp;</div>');
			this.$text.append(this.$currentLine);
			this.cursor.moveTo(this.$currentLine);
		},
		addCommand: function(command) {
			this.$currentLine.find('span').last().remove();
			this.parseCommandContext(command.command);
			//this.addSpan();
			//command.action();
		},
		addChar: function(char) {
			if(this.$currentLine.html() == '&nbsp;') {
				this.$currentLine.html('');
				this.addSpan();
			}
			if(this.$currentSpan.hasClass('overwrite')) {
				this.$currentSpan.removeClass('overwrite').text('');
			}

			this.$currentSpan.append(char);
			this.cursor.moveForward();
		},
		addSpan: function() {
			this.$currentSpan = $('<span>');
			this.$currentLine.append(this.$currentSpan);
		}
	};

	var smartText = new SmartText();
})();