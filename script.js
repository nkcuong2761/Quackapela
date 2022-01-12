var timeHoldPress = 0;
// const spanTime = 1;
var down = false;

var dict = {
	'2':"cB1", '3':"dB1", '5':"fB1", '6':"gB1", '7':"aB1", '9':"cB2", '0':"dB2",
	's':"fB2", 'd':"gB2", 'f':"aB2", 'q':"cW1", 'w':"dW1", 'e':"eW1", 'r':"fW1",
	't':"gW1", 'y':"aW1", 'u':"bW1", 'i':"cW2", 'o':"dW2", 'p':"eW2", 'z':"fW2",
	'x':"gW2", 'c':"aW2", 'v':"bW2"
};

var duckArr = new Array();
var quackArr = new Array();
var idx = new Array();

function preLoad() {
	for (key in dict) {
		var tmp = new Image();
		var aud = new Audio();
		tmp.src = "images/" + dict[key] + "-o.png";
		aud.src = "Pitch/" + dict[key] + ".wav";
		duckArr.push(tmp);
		quackArr.push(aud);
		idx.push(dict[key]);
	}
}

function playQuack(note) {
	note.loop = false;
	note.load();
	note.play();
}

document.addEventListener('keydown', function keyPressed(event) {
	var k = event.key, note = dict[k];
	var i = idx.indexOf(note);
	// document.getElementById(note).src = "images/" + note + "-o.png";
	document.getElementById(note).src = duckArr[i].src;
    if (down && timeHoldPress>0)
			return;
	playQuack(quackArr[i]);
	timeHoldPress += 1;
    down = true;
}, false);

document.addEventListener('keyup', function keyUnpressed(event) {
	var k = event.key, note = dict[k];
    down = false;
    document.getElementById(note).src = "images/" + note + "-l.png";
    timeHoldPress = 0;
}, false);

// function keyPressed(event) {
// 	var k = event.key, note = dict[k], quack = new Audio;
// 	document.getElementById(note).src = "images/" + note + "-o.png";
// 	quack.src = "Pitch/" + note + ".wav";
// 	playQuack(quack);
// 	timeHoldPress += 1;
// }

// function keyUnpressed(event) {
// }

function mouseClicked(id) {
	var i = idx.indexOf(id);
	// window.alert(duckArr[i].src);
	document.getElementById(id).src = duckArr[i].src;
	playQuack(quackArr[i]);
}

function mouseReleased(id) {
	document.getElementById(id).src = "images/" + String(id) + "-l.png";
}
