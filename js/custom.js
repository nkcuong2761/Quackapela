const cB_low = new Audio("Pitch/cB1.wav"); const cB_nom = new Audio("Pitch/cB2.wav");
const dB_low = new Audio("Pitch/dB1.wav"); const dB_nom = new Audio("Pitch/dB2.wav");
const fB_low = new Audio("Pitch/fB1.wav"); const fB_nom = new Audio("Pitch/fB2.wav");
const gB_low = new Audio("Pitch/gB1.wav"); const gB_nom = new Audio("Pitch/gB2.wav");
const aB_low = new Audio("Pitch/aB1.wav"); const aB_nom = new Audio("Pitch/aB2.wav");
const cW_low = new Audio("Pitch/cW1.wav"); const cW_nom = new Audio("Pitch/cW2.wav");
const dW_low = new Audio("Pitch/dW1.wav"); const dW_nom = new Audio("Pitch/dW2.wav");
const eW_low = new Audio("Pitch/eW1.wav"); const eW_nom = new Audio("Pitch/eW2.wav");
const fW_low = new Audio("Pitch/fW1.wav"); const fW_nom = new Audio("Pitch/fW2.wav");
const gW_low = new Audio("Pitch/gW1.wav"); const gW_nom = new Audio("Pitch/gW2.wav");
const aW_low = new Audio("Pitch/aW1.wav"); const aW_nom = new Audio("Pitch/aW2.wav");
const bW_low = new Audio("Pitch/bW1.wav"); const bW_nom = new Audio("Pitch/bW2.wav");

var timeHoldPress = 0;
const spanTime = 10;

function keyPressed(event) {
	var k = event.key;
	switch (k) {
		case '2':
			document.getElementById("cB1").src = "images/black-o.png";
			playQuack(cB_low);
			timeHoldPress += 1;
			break;
		case '3':
			document.getElementById("dB1").src = "images/black-o.png";
			playQuack(dB_low);
			timeHoldPress += 1;
			break;
		case '5':
			document.getElementById("fB1").src = "images/black-o.png";
			playQuack(fB_low);
			timeHoldPress += 1;
			break;
		case '6':
			document.getElementById("gB1").src = "images/black-o.png";
			playQuack(gB_low);
			timeHoldPress += 1;
			break;
		case '7':
			document.getElementById("aB1").src = "images/black-o.png";
			playQuack(aB_low);
			timeHoldPress += 1;
			break;
		case '9':
			document.getElementById("cB2").src = "images/black-o.png";
			playQuack(cB_nom);
			timeHoldPress += 1;
			break;
		case '0':
			document.getElementById("dB2").src = "images/black-o.png";
			playQuack(dB_nom);
			timeHoldPress += 1;
			break;
		case 's':
			document.getElementById("fB2").src = "images/black-o.png";
			playQuack(fB_nom);
			timeHoldPress += 1;
			break;
		case 'd':
			document.getElementById("gB2").src = "images/black-o.png";
			playQuack(gB_nom);
			timeHoldPress += 1;
			break;
		case 'f':
			document.getElementById("aB2").src = "images/black-o.png";
			playQuack(aB_nom);
			timeHoldPress += 1;
			break;
		case 'q':
			document.getElementById("cW1").src = "images/white-o.png";
			playQuack(cW_low);
			timeHoldPress += 1;
			break;
		case 'w':
			document.getElementById("dW1").src = "images/white-o.png";
			playQuack(dW_low);
			timeHoldPress += 1;
			break;
		case 'e':
			document.getElementById("eW1").src = "images/white-o.png";
			playQuack(eW_low);
			timeHoldPress += 1;
			break;
		case 'r':
			document.getElementById("fW1").src = "images/white-o.png";
			playQuack(fW_low);
			timeHoldPress += 1;
			break;
		case 't':
			document.getElementById("gW1").src = "images/white-o.png";
			playQuack(gW_low);
			timeHoldPress += 1;
			break;
		case 'y':
			document.getElementById("aW1").src = "images/white-o.png";
			playQuack(aW_low);
			timeHoldPress += 1;
			break;
		case 'u':
			document.getElementById("bW1").src = "images/white-o.png";
			playQuack(bW_low);
			timeHoldPress += 1;
			break;
		case 'i':
			document.getElementById("cW2").src = "images/white-o.png";
			playQuack(cW_nom);
			timeHoldPress += 1;
			break;
		case 'o':
			document.getElementById("dW2").src = "images/white-o.png";
			playQuack(dW_nom);
			timeHoldPress += 1;
			break;
		case 'p':
			document.getElementById("eW2").src = "images/white-o.png";
			playQuack(eW_nom);
			timeHoldPress += 1;
			break;
		case 'z':
			document.getElementById("fW2").src = "images/white-o.png";
			playQuack(fW_nom);
			timeHoldPress += 1;
			break;
		case 'x':
			document.getElementById("gW2").src = "images/white-o.png";
			playQuack(gW_nom);
			timeHoldPress += 1;
			break;
		case 'c':
			document.getElementById("aW2").src = "images/white-o.png";
			playQuack(aW_nom);
			timeHoldPress += 1;
			break;
		case 'v':
			document.getElementById("bW2").src = "images/white-o.png";
			playQuack(bW_nom);
			timeHoldPress += 1;
			break;
	}
}

function playQuack(note) {
	note.loop = false;
	note.load();
	note.play();
}

function keyUnpressed(event) {
	var k = event.key;
	switch (k) {
		case '2':
			document.getElementById("cB1").src = "images/black-l.png";
			if (timeHoldPress > spanTime)
				cB_low.pause();
			break;
		case '3':
			document.getElementById("dB1").src = "images/black-l.png";
			if (timeHoldPress > spanTime)
				dB_low.pause();
			break;
		case '5':
			document.getElementById("fB1").src = "images/black-l.png";
			if (timeHoldPress > spanTime)
				fB_low.pause();
			break;
		case '6':
			document.getElementById("gB1").src = "images/black-l.png";
			if (timeHoldPress > spanTime)
				gB_low.pause();
			break;
		case '7':
			document.getElementById("aB1").src = "images/black-l.png";
			if (timeHoldPress > spanTime)
				aB_low.pause();
			break;
		case '9':
			document.getElementById("cB2").src = "images/black-l.png";
			if (timeHoldPress > spanTime)
				cB_nom.pause();
			break;
		case '0':
			document.getElementById("dB2").src = "images/black-l.png";
			if (timeHoldPress > spanTime)
				dB_nom.pause();
			break;
		case 's':
			document.getElementById("fB2").src = "images/black-l.png";
			if (timeHoldPress > spanTime)
				fB_nom.pause();
			break;
		case 'd':
			document.getElementById("gB2").src = "images/black-l.png";
			if (timeHoldPress > spanTime)
				gB_nom.pause();
			break;
		case 'f':
			document.getElementById("aB2").src = "images/black-l.png";
			if (timeHoldPress > spanTime)
				aB_nom.pause();
			break;
		case 'q':
			document.getElementById("cW1").src = "images/white-l.png";
			if (timeHoldPress > spanTime)
				cW_low.pause();
			break;
		case 'w':
			document.getElementById("dW1").src = "images/white-l.png";
			if (timeHoldPress > spanTime)
				dW_low.pause();
			break;
		case 'e':
			document.getElementById("eW1").src = "images/white-l.png";
			if (timeHoldPress > spanTime)
				eW_low.pause();
			break;
		case 'r':
			document.getElementById("fW1").src = "images/white-l.png";
			if (timeHoldPress > spanTime)
				fW_low.pause();
			break;
		case 't':
			document.getElementById("gW1").src = "images/white-l.png";
			if (timeHoldPress > spanTime)
				gW_low.pause();
			break;
		case 'y':
			document.getElementById("aW1").src = "images/white-l.png";
			if (timeHoldPress > spanTime)
				aW_low.pause();
			break;
		case 'u':
			document.getElementById("bW1").src = "images/white-l.png";
			if (timeHoldPress > spanTime)
				bW_low.pause();
			break;
		case 'i':
			document.getElementById("cW2").src = "images/white-l.png";
			if (timeHoldPress > spanTime)
				cW_nom.pause();
			break;
		case 'o':
			document.getElementById("dW2").src = "images/white-l.png";
			if (timeHoldPress > spanTime)
				dW_nom.pause();
			break;
		case 'p':
			document.getElementById("eW2").src = "images/white-l.png";
			if (timeHoldPress > spanTime)
				eW_nom.pause();
			break;
		case 'z':
			document.getElementById("fW2").src = "images/white-l.png";
			if (timeHoldPress > spanTime)
				fW_nom.pause();
			break;
		case 'x':
			document.getElementById("gW2").src = "images/white-l.png";
			if (timeHoldPress > spanTime)
				gW_nom.pause();
			break;
		case 'c':
			document.getElementById("aW2").src = "images/white-l.png";
			if (timeHoldPress > spanTime)
				aW_nom.pause();
			break;
		case 'v':
			document.getElementById("bW2").src = "images/white-l.png";
			if (timeHoldPress > spanTime)
				bW_nom.pause();
			break;
	}

	timeHoldPress = 0;
}

function mouseClicked(id) {
	var quack = new Audio;
	var n = String(id).search("W");
	quack.src = "Pitch/" + String(id) + ".wav";
	if (n==-1)
		document.getElementById(id).src = "images/black-o.png";
	else
		document.getElementById(id).src = "images/white-o.png";
	playQuack(quack);
}

function mouseReleased(id) {
	var n = String(id).search("W");
	if (n==-1)
		document.getElementById(id).src = "images/black-l.png";
	else
		document.getElementById(id).src = "images/white-l.png";
}