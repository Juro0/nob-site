
$(document).ready(() => {

	setTimeout(() => {
			$(".loading").addClass("loadHide")
		}, 400
	)
	setTimeout(() => {
			$(".loading").hide()
		}, 850
	)

    // NAVBAR

    $(".navbar-logo").click(() => {

		goto('#hero');
		$(".mobile-menu").addClass("menu-close")
		$(".toggle-menu").removeClass("hamburger-focus")

	});
	$(".goHome").click(() => {

		goto('#home');
		$(".mobile-menu").addClass("menu-close")
		$(".toggle-menu").removeClass("hamburger-focus")

	});
	$(".goDrinklist").click(() => {

		goto('#drinklist');
		$(".mobile-menu").addClass("menu-close")
		$(".toggle-menu").removeClass("hamburger-focus")

	});
	$(".goNews").click(() => {

		goto('#news');
		$(".mobile-menu").addClass("menu-close")
		$(".toggle-menu").removeClass("hamburger-focus")

	});
	$(".goCont").click(() => {

		goto('#contacts');
		$(".mobile-menu").addClass("menu-close")
		$(".toggle-menu").removeClass("hamburger-focus")

	});

	// MOBILE MENU

	$(".toggle-menu").click(() => {
		
		$(".toggle-menu").toggleClass("hamburger-focus")
		$(".mobile-menu").toggleClass("menu-close")
		
	});

    // CONTACTS

    $(".goLocation").click(() => {

		goto('https://www.google.com/maps?ll=44.113426,9.960716&z=16&t=m&hl=it&gl=IT&mapclient=embed&cid=17862516065255363414');

	});
    $("#goInsta").click(() => {

		goto('https://www.instagram.com/nobsarzana/');

	});
    $("#goFacebook").click(() => {

		goto('https://www.facebook.com/nobsarzana');

	});
    $("#goMail").click(() => {

		goto('mailto:nob.sarzana@gmail.com');

	});
    $("#goCell").click(() => {

		copyClipboard("+39 3342303651");

		$(".popup").removeClass("pop-hide");
		$(".popup").addClass("pop-show");
		setTimeout(
			() => {
				$(".popup").removeClass("pop-show");
				$(".popup").addClass("pop-hide");
			}, 1500
			);
	});

	// FOOTER

	$(".goAuthor").click(() => {
		
		goto('http://juro0.github.io/');

	});

});