PlayerDirectionEnum = {
    UP : 0,
    RIGHT : 1,
    DOWN : 2,
	LEFT : 3
}

var playerElement = document.getElementById('player');
var bulletElement = null;

var playerDirection = PlayerDirectionEnum.RIGHT;

playerElement.style.top = '50px';
playerElement.style.left = '50px';


document.body.onkeydown = function (e) {
  var KEYCODE_LEFT = 37;
  var KEYCODE_RIGHT = 39;
	
  var KEYCODE_DOWN = 40;
  var KEYCODE_UP = 38;
	
  var KEYCODE_ENTER = 13;
  var KEYCODE_SPACE = 32;

  
  if (e.keyCode == KEYCODE_LEFT) {
  	playerElement.style.left = (parseInt(playerElement.style.left) - 10) + 'px';
	playerDirection = PlayerDirectionEnum.LEFT;
  }
  else if (e.keyCode == KEYCODE_RIGHT) {
  	playerElement.style.left = (parseInt(playerElement.style.left) + 10) + 'px';
	playerDirection = PlayerDirectionEnum.RIGHT;
  }
  else if (e.keyCode == KEYCODE_DOWN) {
  	playerElement.style.top = (parseInt(playerElement.style.top) + 10) + 'px';
	playerDirection = PlayerDirectionEnum.DOWN;
  }
  else if (e.keyCode == KEYCODE_UP) {
    playerElement.style.top = (parseInt(playerElement.style.top) - 10) + 'px';
	playerDirection = PlayerDirectionEnum.UP;
  }
  else if (e.keyCode == KEYCODE_ENTER || e.keyCode == KEYCODE_SPACE) {
  	Fire();
  }
}

function Fire() {
	 if (bulletElement != null) // досі стріляємо
		 return;
	
	CreateBulletElement();
	
	setTimeout(LunchBulletElement, 0.1);
	
	setTimeout(DeleteBulletElement, 1000);
}

function CreateBulletElement() {
  bulletElement = document.createElement('div');
  bulletElement.id = 'bullet';
  bulletElement.style.top = (parseInt(playerElement.style.top) + 10) + 'px';
  bulletElement.style.left = (parseInt(playerElement.style.left) + 10) + 'px';
  document.body.appendChild(bulletElement);
}

function LunchBulletElement() {
  if (playerDirection == PlayerDirectionEnum.LEFT) {
		var curLeft = parseInt(bulletElement.style.left);
		var newLeft = curLeft - 500;
		bulletElement.style.left = newLeft + 'px';
	}
	else if (playerDirection == PlayerDirectionEnum.RIGHT) {
		var curLeft = parseInt(bulletElement.style.left);
		var newLeft = curLeft + 500;
		bulletElement.style.left = newLeft + 'px';
	}
	else if (playerDirection == PlayerDirectionEnum.UP) {
		var curTop = parseInt(bulletElement.style.top);
		var newTop = curTop - 500;
		bulletElement.style.top = newTop + 'px';
	}
	else if (playerDirection == PlayerDirectionEnum.DOWN) {
		var curTop = parseInt(bulletElement.style.top);
		var newTop = curTop + 500;
		bulletElement.style.top = newTop + 'px';
	}
}

function DeleteBulletElement() {
  document.body.removeChild(bulletElement);
  bulletElement = null;
}