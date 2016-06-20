// The Briefs
var briefs = [
  "Design a the homepage of a website for a local business near you. Show them when you're done.",
  "Design a few screens for a mood-based music app.",
  "Design a small banner ad for something next to you.",
  "Design the album artwork for the song you last listened to.",
  "Mock up a new signup flow for a social network of your choice.",
  "Sketch a note-taking application that lets users collaborate on writing.",
  "Redesign the cover of a book you love.",
  "Please, don't design another weather app. Unless you realllly want to.",
  "Redesign the menu for your favorite local brunch spot. Show them when you're done.",
  "Design a tiny budgeting app that works for mobile, web, and the desktop.",
  "Recreate 3 of your favorite emoji. Or, make 3 of your own.",
  "Design a logo for a local business. Show them when you're done.",
  "Redesign the packaging for the last thing you bought.",
  "Draw icons of your three favorite foods.",
  "Design an icon set within the theme of your favorite movie.",
  "Design the controls of a video game based on your life.",
  "Design an app that controls a smart home.",
  "Make wireframes for an app that teaches kids a new language.",
  "Design a mobile app that lets people find tasty recipes.",
  "Design a website for a company that makes websites.",
  "Design an app for mobile, web and the desktop that lets users make workout routines, then do them.",
  "Design a currency exchange app for iOS.",
  "Find a newspaper. Redesign the front page.",
  "Design a responsive portfolio website for a famous artist or designer.",
  "Design a build-your-own burger app.",
  "Design an app that lets users pick their seats at an event.",
  "Redesign a website you use every day.",
  "Design a marketing page for your favorite food or drink.",
  "Redesign an app icon for an app you use every day.",
  "Design an interactive 404 page.",
  "Design an onboarding flow for an app that doesn't have one.",
  "Redesign the poster for your favorite movie(s).",
  "Design a landing page for a planet.",
  "Design a landing page for a country you want to visit.",
  "Design a landing page for a product you really want to buy.",
  "Design a mobile in-flight wifi experience.",
  "Design a mobile music-making application.",
  "Design a news app for your local newspaper. Show it to them when you're done.",
  "Design a landing page for your favorite athlete, musician or general human being.",
  "Redesign a website so it's more color-blind friendly.",
  "Design a poster for an event happening near you.",
  "Redesign the label for a drink you love.",
  "Design a landing page for an event happening near you that let's people RSVP.",
  "Design a website for a local restaurant that let's people order online.",
  "Design the homepage of a website for a hotel.",
  "Design a loading screen for an app that doesn't have one.",
  "Design a mobile meditation app.",
  "Design a thank-you card for someone in your life.",
  "Design a card to celebrate the next upcoming holiday.",
  "Design a landing page dedicated to any of the U.S. Presidents.",
  "Draw a minimal version of the front of your childhood home.",
  "Redesign the logo of your favorite sports team.",
  "Design a tour poster for your favorite musical act.",
  "Design a video-editing app for mobile.",
  "Design a video-edting app for the desktop.",
  "Design a font-making app for mobile.",
  "Design an image-editing app for the desktop and mobile.",
  "Design a map of your daily commute.",
  "Redesign the logo for the company you work for or want to work for.",
  "Redesign the layout of your favorite coffee spot.",
  "Design an app that helps people decide where to get lunch.",
  "Design an app that shows people how long their commute will be.",
  "Design a gif-making app.",
  "Design a responsive messaging app.",
  "Design a build-your-own burrito app.",
  "Design a custom t-shirt making website.",
  "Design the checkout flow for a liquor store's website.",
  "Design a build-your-own ice cream sundae app.",
  "Design a vending maching locator.",
  "Design an app that finds nearby dog parks.",
  "Design an app that finds and shows ratings for local babysitters."
];


// The Function
function loadBrief() {
	var randomBrief = briefs[Math.floor(Math.random() * briefs.length)];
  $("#currentBrief").text( randomBrief );
};
window.onkeydown = function(e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
};
document.body.onkeyup = function(e){
     if(e.keyCode == 32){
       loadBrief();
      }
};
// Scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 800);
        return false;
      }
    }
  });
});
