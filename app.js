// Alticator 2020

var slideAmount = 0;
var slideNumber = 0;
var mouseVisible = true;
var watermarkVisible = false;
var logoWatermarkVisible = false;
var lightbar1Visible = false;
var lightbar2Visible = false;
var lightbar3Visible = false;
var lightbar2States = [0, 0, 0, 0, 0, 0, 0, 0];

document.onkeydown = keyPress;

//$("*").css("box-sizing", "border-box");

function startPresentation(numberOfSlides) {
	slideAmount = numberOfSlides;
	$("*").css("cursor", "none");
	mouseVisible = false;
	$("#startScreen").hide();
	$("#slide-1").show();
	slideNumber = 1;
}

function nextSlide() {
	if (slideNumber < slideAmount) {
		slideNumber++;
		$(".slide").hide();
		$("#slide-" + slideNumber).show();
		slideFunctions();
	}
}

function previousSlide() {
	if (slideNumber > 1) {
		slideNumber--;
		$(".slide").hide();
		$("#slide-" + slideNumber).show();
		slideFunctions();
	}
}

function slideFunctions() {
	if (slideNumber == 4) {
		document.getElementById("slide-4-video").play();
	}
}

function keyPress(event) {
	if (event.key == "m") {
		if (mouseVisible == false) {
			$("*").css("cursor", "initial");
			mouseVisible = true;
		}
		else if (mouseVisible) {
			$("*").css("cursor", "none");
			mouseVisible = false;
		}
	}
	else if (event.key == "ArrowRight" || event.key == "ArrowUp") {
		nextSlide();
	}
	else if (event.key == "ArrowLeft" || event.key == "ArrowDown") {
		previousSlide();
	}
	else if (event.key == "w") {
		if (watermarkVisible) {
			$("#watermark").hide();
			watermarkVisible = false;
		}
		else if (watermarkVisible == false) {
			$("#watermark").show();
			watermarkVisible = true;
		}
	}
	else if (event.key == "p") {
		if (logoWatermarkVisible) {
			$("#logo-watermark").hide();
			logoWatermarkVisible = false;
		}
		else if (logoWatermarkVisible == false) {
			$("#logo-watermark").show();
			logoWatermarkVisible = true;
		}
	}
	else if (event.key == "1") {
		if (lightbar1Visible == false) {
			$("#lightbar1").css("visibility", "visible");
			lightbar1Visible = true;
		}
		else if (lightbar1Visible) {
			$("#lightbar1").css("visibility", "hidden");
			lightbar1Visible = false;
		}
	}
	else if (event.key == "2") {
		if (lightbar2Visible == false) {
			$("#lightbar2").css("visibility", "visible");
			lightbar2Visible = true;
		}
		else if (lightbar2Visible) {
			lightbar2States = [0, 0, 0, 0, 0, 0, 0, 0];
			updateLightbar2States();
			$("#lightbar2").css("visibility", "hidden");
			lightbar2Visible = false;
		}
	}
	else if (event.key == "3") {
		if (lightbar3Visible == false) {
			$("#lightbar3").css("visibility", "visible");
			lightbar3Visible = true;
		}
		else if (lightbar3Visible) {
			$("#lightbar3").css("visibility", "hidden");
			lightbar3Visible = false;
		}
	}
}

updateLightbar2States();
changeLightbar2Color();

function changeLightbar2Color() {
	changeLightbar2ColorLoop();
}

function updateLightbar2States() {
	if (lightbar2Visible) {
		for (var i = 0; i < 8; i++) {
			if (lightbar2States[i] == 1) {
				$("#lightbar2-light" + (i+1)).css("visibility", "visible");
			}
			else if (lightbar2States[i] == 0) {
				$("#lightbar2-light" + (i+1)).css("visibility", "hidden");
			}
		}
	}
}

var lightbar2AnimationCount = 0;
var lightbar2AnimationSpeed = 50;
var lightbar2AnimationDelay = 150;

function changeLightbar2ColorLoop() {
	setTimeout(function() {
		lightbar2States[lightbar2AnimationCount] = 1;
		updateLightbar2States();
		lightbar2AnimationCount++;
		if (lightbar2AnimationCount < 9) {
			changeLightbar2ColorLoop();
		}
		else {
			setTimeout(function() {
				lightbar2States = [0, 0, 0, 0, 0, 0, 0, 0];
				lightbar2AnimationCount = 7;
				updateLightbar2States();
				changeLightbar2ColorLoopReverse();
			}, lightbar2AnimationDelay);
		}
	}, lightbar2AnimationSpeed);
}

function changeLightbar2ColorLoopReverse() {
	setTimeout(function() {
		lightbar2States[lightbar2AnimationCount] = 1;
		updateLightbar2States();
		lightbar2AnimationCount--;
		if (lightbar2AnimationCount > -2) {
			changeLightbar2ColorLoopReverse();
		}
		else {
			setTimeout(function() {
				lightbar2States = [0, 0, 0, 0, 0, 0, 0, 0];
				lightbar2AnimationCount = 0;
				updateLightbar2States();
				changeLightbar2ColorLoop();
			}, lightbar2AnimationDelay);
		}
	}, lightbar2AnimationSpeed);
}

document.getElementById("slide-4-video").onended = nextSlide;