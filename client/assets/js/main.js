"use strict";

import Board from './board';

document.addEventListener('DOMContentLoaded', function () {

	let board = new Board();

	board.newSnake(50,50);
	board.newApple(500,350);

	board.render(board);

});
