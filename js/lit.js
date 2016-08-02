var config = {
	    apiKey: "AIzaSyC5oYU1Wio9T5hXF8B8bR4vpRBeXgnc0HI",
	   	authDomain: "turnt-f422a.firebaseapp.com",
	    databaseURL: "https://turnt-f422a.firebaseio.com",
	    storageBucket: "turnt-f422a.appspot.com",
    };
    firebase.initializeApp(config);
//----------------------------------------------------------
window.onload = function(){
	var ref = firebase.database().ref('artists').child('Lil Yachty');
	ref.once("value").then(function(snapshot){
	var temp = snapshot.val();
	lit = temp.likes;
	$(".lit-button").html(lit);
	});

function
//----------------------------------------------------------

}