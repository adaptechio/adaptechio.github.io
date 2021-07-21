/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */

// var AnimatedHeader = (function (){
//     var lastScrollTop = 0;
// 	var docElem = document.documentElement,
// 		header = document.querySelector( '.navbar-fixed-top' )
//     // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
//     window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
//         var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//         if (st > lastScrollTop){
//             // downscroll code
//             console.log("Scrolled Down")
//             // classie.remove( header, 'navbar-shrink' );
//             classie.add( header, 'unpinned' );
//             classie.remove( header, 'pinned' );
//         } else {
//             // upscroll code
//             // classie.add( header, 'navbar-shrink' );
//             classie.remove( header, 'unpinned' );
//             classie.add( header, 'pinned' );
//             console.log("Scrolled Up")
//         }
//         lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//     }, false);
//
// })();
// var cbpAnimatedHeader = (function() {
//
// 	var docElem = document.documentElement,
// 		header = document.querySelector( '.navbar-fixed-top' ),
// 		didScroll = false,
// 		changeHeaderOn = 100;
//
// 	function init() {
// 		window.addEventListener( 'scroll', function( event ) {
// 			if( !didScroll ) {
// 				didScroll = true;
// 				setTimeout( scrollPage, 250 );
// 			}
// 		}, false );
// 	}
//
// 	function scrollPage() {
// 		var sy = scrollY();
// 		if ( sy >= changeHeaderOn ) {
// 			classie.add( header, 'navbar-shrink' );
// 		}
// 		else {
// 			classie.remove( header, 'navbar-shrink' );
// 		}
// 		didScroll = false;
// 	}
//
// 	function scrollY() {
// 		return window.pageYOffset || docElem.scrollTop;
// 	}
//
// 	init();
//
// })();