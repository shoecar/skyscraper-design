$j(window).on('beforeunload', function(){
 	$j(window).scrollTop(0);
});

$j(document).ready(function() {
	$j(".masterCell").height($j(".masterCell").width() * .5);
	hideCursor();
	jQuery('.parallax-layer').parallax({
		mouseport: jQuery("#parallaxWrap")
	},
	{	yorigin: '200%',
		yparallax: '20%',},
	{	yorigin: '165%',
		yparallax: '28%',},
	{	yorigin: '150%',
		yparallax: '36%',}
	);

	$j("#corpSlide").jqFancyTransitions({width: $j(".masterCell").width(), delay: 3000, });
	$j("#artSlide").jqFancyTransitions({width: $j(".masterCell").width(), delay: 3000, });
	$j("#personalSlide").jqFancyTransitions({width: $j(".masterCell").width(), delay: 3000, });
	$j("#exSlide").jqFancyTransitions({width: $j(".masterCell").width(), delay: 3000, });

});
window.onload = function() {
	blindH2();
	appearH1();
	growLogo();
	$j("#colorBG").css({"opacity": "0.0", "transition":"all 8s ease",});
	window.setTimeout(iconsTop, 2500);
	$j("#pageDown").css({"opacity": "0.8", "transition":"0.3s ease-in",});
	$j("#homeNav").css({"opacity": "0.8", "transition":"0.3s ease-in",});
	$j("#aboutNav").css({"opacity": "0.8", "transition":"0.3s ease-in",});
	$j("#projectsNav").css({"opacity": "0.8", "transition":"0.3s ease-in",});
	$j("#contactNav").css({"opacity": "0.8", "transition":"0.3s ease-in",});
	window.setTimeout(showCursor, 4000);

	$j( "#pageUp" ).click(function() {
		$j("html, body").animate({ scrollTop: $j(window).scrollTop() - $j(".window").height() }, 2000);
	});
	$j( "#pageDown" ).click(function() {
		$j("html, body").animate({ scrollTop: $j(window).scrollTop() + $j(".window").height() }, 2000);
	});
	$j( "#homeNav" ).click(function() {Effect.ScrollTo('0', {duration: 2})});
	$j( "#aboutNav" ).click(function() {Effect.ScrollTo('1', {duration: 2})});
	$j( "#projectsNav" ).click(function() {Effect.ScrollTo('2', {duration: 2})});
	$j( "#contactNav" ).click(function() {Effect.ScrollTo('3', {duration: 2})});

	$j("#card").flip({ trigger: 'manual' });
	$j( "#flipIt" ).click(function() {
		$j("#card").flip(true);
		TypingText.runAll();
	});
	$j( "#flipIt" ).click(function() {
		var nameValue = document.getElementById("name").value;
		document.getElementById("tyMsg").innerHTML = "Thank you " + nameValue + ", <br>We look forward to reading your message!";
	});
};


function hideCursor() {	
	document.body.style.cursor = 'none';
}

function showCursor() {	
	document.body.style.cursor = 'auto';
}

function growLogo() {
	Effect.BlindDown('logo', { duration: 4.0,});
}

function appearH1() {
	Effect.Appear('head1', { duration: 3.0, queue: 'front'});
}
function blindH2() {
	Effect.Appear('head2', { duration: 2.0, queue: 'front'});
}


function iconsTop() {
	$j("#icon1").css({"top": "10px", "left": "10px", "transition":"all 2s ease",});
	$j("#icon2").css({"top": "10px", "left": "90px", "transition":"all 2s ease",});
	$j("#icon3").css({"top": "10px", "left": "170px", "transition":"all 2s ease",});
	$j("#icon4").css({"top": "10px", "left": "250px", "transition":"all 2s ease",});
}
function showSideNav() {
	$j("#icon1, #icon2, #icon3, #icon4").css({"left": "10px", "transition":"all 1s ease",});
	$j("#sideNavArrow").css({"opacity": "0.0", "transition":"all 1s ease","cursor":""});
	$j("#sideNavArrow:hover").css({"cursor":""});
}
function hideSideNav() {
	$j("#icon1, #icon2, #icon3, #icon4").css({"left": "-70px", "transition":"all 1s ease",});
	$j("#sideNavArrow").css({"opacity": "0.8", "transition":"all 2s ease"});
	$j("#sideNavArrow:hover").css({"cursor":"pointer"});
}



var cycle = 0;
var cycle2 = 0;
var cycle3 = 0;
var cycle4 = 0;
var timer;
var timer2;
var timer3;
var timer4;
var downPath = [];
for (var i = 10; i < 331; i++) {
	downPath[i-10] = i;
}
var leftPath = [];
for (var i = 330; i > 9; i--) {
	for (var j = 0; j < 241 ; j++) {
		leftPath[j] = i;
	}
}
function resetCycles() {
	cycle = 0;
	cycle2 = 0;
	cycle3 = 0;
	cycle4 = 0;
}
function moveNav() {
	for (var i = 0; i < 241; i++) {
		window.setTimeout(moveIcon1, 20);
		window.setTimeout(moveIcon2, 20);
		window.setTimeout(moveIcon3, 20);
		window.setTimeout(moveIcon4, 20);
	}
}
function moveIcon1 () {
	if (cycle < 241) {
		moveIconDown('icon1', downPath[cycle]);
	}
	cycle++;
}
function moveIcon2 () {
	if (cycle2 < 81) {
		moveIconLeft('icon2', leftPath[cycle2]);
	}
	if (cycle2 < 241) {
		moveIconDown('icon2', downPath[cycle2 - 80]);
	}
	if (cycle2 == 241) {
		window.clearInterval(timer2);
	}
	cycle2++;
}
function moveIcon3 () {
	if (cycle3 < 161) {
		moveIconLeft('icon3', leftPath[cycle3]);
	}
	if (cycle3 < 241) {
		moveIconDown('icon3', downPath[cycle3 - 160]);
	}
	if (cycle3 == 241) {
		window.clearInterval(timer3);
	}
	cycle3++;
}
function moveIcon4 () {
	if (cycle4 < 241) {
		moveIconLeft('icon4', leftPath[cycle4]);
	}
	if (cycle4 == 241) {
		window.clearInterval(timer4);
	}
	cycle4++;
}
function moveIconDown(icon, top) {
	document.getElementById(icon).style.top = top + "px";
}
function moveIconLeft(icon, left) {
	document.getElementById(icon).style.left = left + "px";
}




var blackIO;
function blackIn() {
	blackIO = setTimeout(blackInTimer, 250);
}
function blackInTimer() {
	$j("#blackOut").css({"display":"inline",});
}
function blackOut() {
	$j("#blackOut").css({"display":"none"});
	clearTimeout(blackIO);
}



function slideOut(id) {
	$j("#" + id + " img.l").css({"left":"-51%", "transition":"all 2s ease",});
	$j("#" + id + " img.r").css({"left":"51%", "transition":"all 2s ease",});
}
function slideIn(id) {
	$j("#" + id + " img.l").css({"left":"0", "transition":"all 0.75s ease",});
	$j("#" + id + " img.r").css({"left":"0", "transition":"all 0.75s ease",});
}
function slideAllOut() {
	$j("img.l").css({"left":"-51%", "transition":"all 2s ease",});
	$j("img.r").css({"left":"51%", "transition":"all 2s ease",});
}
function slideAllIn() {
	$j("img.l").css({"left":"0", "transition":"all 0.75s ease",});
	$j("img.r").css({"left":"0", "transition":"all 0.75s ease",});
}



new TypingText(document.getElementById("typingText"), 80);


var window2Top = $j("#1").offset().top;
var window3Top = $j("#2").offset().top;
var window4Top = $j("#3").offset().top;
var windowBuffer = $j(window).height() * .15;

$j(document).ready(function() {

	$j(window).scroll(function () {
		var top = $j(window).scrollTop();

		if (top == 0) {
			blindH2();
			appearH1();
			growLogo();
			$j("#colorBG").css({"opacity": "0.0", "transition":"all 8s ease",});
			window.setTimeout(resetCycles, 2000);
			window.setTimeout(iconsTop, 2500);
			$j("#pageUp").css({"opacity": "0.0", "cursor":"auto", "transition":"all 1s ease",});
		}
		if (top != 0) {
		}


		if (top == window2Top) {
		}
		if (top < window2Top) {
			$j("#icon1, #icon2, #icon3, #icon4").css({"left": "10px", "transition":"all 1s ease-in",});
		}
		if (top >= window2Top) {
			$j("#icon1, #icon2, #icon3, #icon4").css({"left": "-70px", "transition":"all 1s ease-in",});
			$j("#colorBG").css({"opacity": "1.0", "transition":"all 0s",});
			$j("#logo").css({"display":"none", "margin-top": "", "transition":"all 0s",});
			$j("#head1").css({"display":"none", "opacity": "0.0", "margin-top": "", "transition":"all 0s",});
			$j("#head2").css({"display":"none", "opacity": "0.0", "margin-top": "", "transition":"all 0s",});

		}

		if (top == window4Top) {
			$j("#icon1, #icon2, #icon3, #icon4").css({"left": "10px", "transition":"all 1s ease-in",});
		}
		if (top != window4Top) {
			$j("#card").flip(false);
		}

		if (top > 0) {	
			moveNav();
			$j("#pageUp").css({"opacity": "0.8", "cursor":"pointer", "transition":"all 1s ease",});
		}

	}); //scroll functions

}); // document ready