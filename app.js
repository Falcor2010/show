// Alticator 2020

var slideAmount = 0;
var slideNumber = 0;
var screen2On = false;
var screen2SlideAmount = 0;
var screen2SlideNumber = 0;
var mouseVisible = true;
var watermarkVisible = false;
var logoWatermarkVisible = false;
var screen2WatermarkVisible = false;
var screen2LogoWatermarkVisible = false;
var lightbar1Visible = false;
var lightbar2Visible = false;
var lightbar3Visible = false;
var screen2Lightbar1Visible = false;
var screen2Lightbar2Visible = false;
var screen2Lightbar3Visible = false;
var lightbar2States = [0, 0, 0, 0, 0, 0, 0, 0];
var screen2;

document.onkeydown = keyPress;

function startPresentation(numberOfSlides, screen2NumberOfSlides) {
	slideAmount = numberOfSlides;
	screen2SlideAmount = screen2NumberOfSlides;
	$("*").css("cursor", "none");
	mouseVisible = false;
	$("#startScreen").hide();
	$("#slide-1").show();
	if (screen2On) {
		$(screen2.document.getElementById("startScreen")).hide();
		$(screen2.document.getElementById("slide-1")).show();
	}
	slideNumber = 1;
}

function nextSlide(screenNumber) {
	if (screenNumber === 2) {
		if (screen2SlideNumber < screen2SlideAmount) {
			screen2SlideNumber++;
			$(screen2.document.getElementsByClassName("slide")).hide();
			$(screen2.document.getElementById("slide-" + screen2SlideNumber)).show();
			screen2SlideFunctions();
		}
	}
	else {
		if (slideNumber < slideAmount) {
			slideNumber++;
			$("#slide-" + (slideNumber - 1)).addClass("off-screen");
			delay500(function() {
				$(".slide").hide();
				$(".slide").removeClass("off-screen");
				$("#slide-" + slideNumber).addClass("transparent");
				$("#slide-" + slideNumber).show();
				$(".slide").removeClass("transparent");
				slideFunctions();
			});
		}
	}
}

function delay500(code) {
	setTimeout(code, 500);
}

function nextSlide$2() {
	nextSlide(2);
}

function previousSlide(screenNumber) {
	if (screenNumber === 2) {
		console.log("Screen 2 Selected");
		if (screen2SlideNumber > 1) {
			screen2SlideNumber--;
			$(screen2.document.getElementsByClassName("slide")).hide();
			$(screen2.document.getElementById("slide-" + screen2SlideNumber)).show();
			screen2SlideFunctions();
		}
	}
	else {
		if (slideNumber > 1) {
			slideNumber--;
			$(".slide").hide();
			$("#slide-" + slideNumber).show();
			slideFunctions();
		}
	}
}

function slideFunctions() {
	if (slideNumber == 4) {
		document.getElementById("slide-4-video").play();
	}
}

function screen2SlideFunctions() {
	if (screen2SlideNumber == 4) {
		screen2.document.getElementById("slide-4-video").play();
	}
}

function openModal() {
	$("#modal-embed").show();
	$(".slide").addClass("blur");
}

function closeModal() {
	$("#modal-embed").hide();
	$(".slide").removeClass("blur");
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
	else if (event.key == ".") {
		nextSlide(2);
	}
	else if (event.key == ",") {
		previousSlide(2);
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
	else if (event.key == "q") {
		if (screen2On) {
			if (screen2WatermarkVisible) {
				$(screen2.document.getElementById("watermark")).hide();
				screen2WatermarkVisible = false;
			}
			else {
				$(screen2.document.getElementById("watermark")).show();
				screen2WatermarkVisible = true;
			}
		}
	}
	else if (event.key == ";") {
		if (screen2On) {
			if (screen2LogoWatermarkVisible) {
				$(screen2.document.getElementById("logo-watermark")).hide();
				screen2LogoWatermarkVisible = false;
			}
			else {
				$(screen2.document.getElementById("logo-watermark")).show();
				screen2LogoWatermarkVisible = true;
			}
		}
	}
	else if (event.key == "1") {
		if (lightbar1Visible == false) {
			$("#lightbar1").show();
			lightbar1Visible = true;
		}
		else if (lightbar1Visible) {
			$("#lightbar1").hide();
			lightbar1Visible = false;
		}
	}
	else if (event.key == "2") {
		if (lightbar2Visible == false) {
			$("#lightbar2").show();
			lightbar2Visible = true;
		}
		else if (lightbar2Visible) {
			lightbar2States = [0, 0, 0, 0, 0, 0, 0, 0];
			updateLightbar2States();
			$("#lightbar2").hide();
			lightbar2Visible = false;
		}
	}
	else if (event.key == "3") {
		if (lightbar3Visible == false) {
			$("#lightbar3").show();
			lightbar3Visible = true;
		}
		else if (lightbar3Visible) {
			$("#lightbar3").hide();
			lightbar3Visible = false;
		}
	}
	else if (event.key == "4") {
		if (screen2Lightbar1Visible == false) {
			$(screen2.document.getElementById("lightbar1")).show();
			screen2Lightbar1Visible = true;
		}
		else if (screen2Lightbar1Visible) {
			$(screen2.document.getElementById("lightbar1")).hide();
			screen2Lightbar1Visible = false;
		}
	}
	else if (event.key == "5") {
		if (screen2Lightbar2Visible == false) {
			$(screen2.document.getElementById("lightbar2")).show();
			screen2Lightbar2Visible = true;
		}
		else if (screen2Lightbar2Visible) {
			$(screen2.document.getElementById("lightbar2")).hide();
			screen2Lightbar2Visible = false;
		}
	}
	else if (event.key == "6") {
		if (screen2Lightbar3Visible == false) {
			$(screen2.document.getElementById("lightbar3")).show();
			screen2Lightbar3Visible = true;
		}
		else if (screen2Lightbar3Visible) {
			$(screen2.document.getElementById("lightbar3")).hide();
			screen2Lightbar3Visible = false;
		}
	}
	else if (event.key == "s") {
		if (screen2 = window.open("second-screen.html", "Second Screen", "height=500, width=1000")) {
			screen2On = true;
			screen2SlideNumber = 1;
			if (screen2On) {
				screen2.document.getElementById("slide-4-video").onended = nextSlide$2;
			}
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
	if (screen2Lightbar2Visible) {
		for (var i = 0; i < 8; i++) {
			if (lightbar2States[i] == 1) {
				$(screen2.document.getElementById("lightbar2-light" + (i+1))).css("visibility", "visible");
			}
			else if (lightbar2States[i] == 0) {
				$(screen2.document.getElementById("lightbar2-light" + (i+1))).css("visibility", "hidden");
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