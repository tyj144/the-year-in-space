var heightOnLoad = "0px"
$(window).resize(function(){
	var bannerHeight = $("#banner").css("height");
	$("#space").css("height", bannerHeight);
});
window.onload = function bannerHeight(){
	heightOnLoad = $("#banner").css("height");

	$("#space").css("height", heightOnLoad);
	$("#banner").data("height", "tall");
}
$(window).scroll(function() {
	// if (num == 1) {
		// var height = bannerHeight();
	// }
	if ($(document).scrollTop() > 0) {
		if ($("#banner").data("height") == "tall") {
		$("#banner img").css("display", "none");
		$(".date").css("display", "none");
		$("#banner").data("height", "short");
		$("#banner").data("margin", "0");
			
		$("h1").stop().css("font-size", "20pt");
		$("#banner").stop().animate({
			height: "100px"
			}, 600);
			$("#space").stop().animate({
			height: "100px"
			}, 600);
		}
	}
	else {
		if ($("#banner").data("height") == "short") {
			$("#banner img").css("display", "block");
			$("#banner img").css("margin", "0 auto");
			$(".date").css("display", "block");
			$("#banner").data("height", "tall");

			$("h1").stop().css("font-size", "50pt");
			$("#banner").stop().animate({
				height: heightOnLoad
				}, 600);
			}
			$("#space").stop().animate({
				height: heightOnLoad
			}, 600);
		}
});