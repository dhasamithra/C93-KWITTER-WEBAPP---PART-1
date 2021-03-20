
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBYOE7HOcjTHOe6QyGR5pw7Ix75fy55UvQ",
      authDomain: "classtest-45c09.firebaseapp.com",
      projectId: "classtest-45c09",
      storageBucket: "classtest-45c09.appspot.com",
      messagingSenderId: "515203725687",
      appId: "1:515203725687:web:0e45663076ff83b7164972"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
