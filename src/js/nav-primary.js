$(document).ready(function() {

  // Menu behavior for smaller screens
	function togglePrimaryNav($clickTarget) {
		if ($("button.nav-toggle").parent("#navigation-primary").hasClass("COLLAPSED")) {
			$("button.nav-toggle").attr("aria-expanded","true");
			// console.log("Menu EXPANDED!");
		} else {
			$("button.nav-toggle").attr("aria-expanded","false");
			// console.log("Menu COLLAPSED!");
		}
		$("#navigation-primary").toggleClass("COLLAPSED");
	}

	// On page load, if toggle is visible (via CSS) then hide the primary nav menu.
	if($("button.nav-toggle").is(":visible")) {
		togglePrimaryNav();
	}

	$("button.nav-toggle").click(function() {
		togglePrimaryNav();
	});
	// –––––––––––––––––––––––––––––––––––––––––––––––––––––

});
