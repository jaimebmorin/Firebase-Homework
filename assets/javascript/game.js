$(document).ready(function() {

  var config = {
    apiKey: "AIzaSyDS0SQ3PgZghwcRoQX0Tx1LdXX69KBTMng",
    authDomain: "fir-learning-4bae7.firebaseapp.com",
    databaseURL: "https://fir-learning-4bae7.firebaseio.com",
    projectId: "fir-learning-4bae7",
    storageBucket: "fir-learning-4bae7.appspot.com",
    messagingSenderId: "1031367525127"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  var test = "test";
  database.ref().set({
      test: test
  });

});


