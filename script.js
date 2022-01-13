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
		var aud = document.getElementById("audio-" + dict[key]);
		tmp.src = "images/" + dict[key] + "-o.png";
		duckArr.push(tmp);
		quackArr.push(aud);
		idx.push(dict[key]);
	}
}

function playQuack(note) {
	// note.loop = false;
	note.currentTime = 0;
	note.play();
}

document.addEventListener('keydown', function keyPressed(event) {
	console.log("keydown");
	var k = event.key, note = dict[k];
	var i = idx.indexOf(note);
	// document.getElementById(note).src = "images/" + note + "-o.png";
	document.getElementById(note).src = duckArr[i].src;
	playQuack(quackArr[i]);
});

document.addEventListener('keyup', function keyUnpressed(event) {
	var k = event.key, note = dict[k];
  document.getElementById(note).src = "images/" + note + "-l.png";
});

function mouseClicked(id) {
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
		return
	// console.log("mouseClicked", id);
	var i = idx.indexOf(id);
	// window.alert(duckArr[i].src);
	document.getElementById(id).src = duckArr[i].src;
	playQuack(quackArr[i]);
}

function mouseReleased(id) {
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
		return
	// console.log("mouseReleased");
	document.getElementById(id).src = "images/" + String(id) + "-l.png";
}

function touched(id) {
	// console.log("touched", id);
	var i = idx.indexOf(id);
	// window.alert(duckArr[i].src);
	document.getElementById(id).src = duckArr[i].src;
	playQuack(quackArr[i]);
}

function touchRelease(id) {
	// console.log("touchRelease");
	document.getElementById(id).src = "images/" + String(id) + "-l.png";
}
