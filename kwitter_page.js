var firebaseConfig = {
    apiKey: "AIzaSyA1tJRQgdXYSRPP7pTLFPkjq1iUN4QEez4",
    authDomain: "lets-chat-web-app-67990.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-67990-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-67990",
    storageBucket: "lets-chat-web-app-67990.appspot.com",
    messagingSenderId: "1023355935178",
    appId: "1:1023355935178:web:153be17196ee5045039733",
    measurementId: "G-T0D4XNQJK3"
  };
  

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name")
  document.getElementById("room_name").innerHTML = ""+room_name +"";

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        
          name:user_name,
          message:msg,
          like:0

    });
    document.getElementById("msg").value = "";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

