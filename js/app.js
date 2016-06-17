// The Briefs
var briefs = [
  "Design a website for a local business near you. Show them when you're done.",
  "Design a mood-based music app.",
  "Design a small banner ad for something next to you.",
  "Design the album cover for the song you last listened to.",
  "Mock up a new signup flow for a social network of your choice.",
  "Sketch a note-taking application that let's users collaborate on writing.",
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
  "Make the wireframes for an app that teaches kids a new language.",
  "Design a mobile app that lets people find tasty recipes.",
  "Design a website for a company that makes websites.",
  "Design an app for mobile, web and the desktop that let's users make workout routines, then do them.",
  "Design a currency exchange app for iOS."
];


// The Function
var briefIndex = 0;
function loadBrief() {
	var randomBrief = briefs[Math.floor(Math.random() * briefs.length)];
  $("#currentBrief").text( randomBrief );
}
