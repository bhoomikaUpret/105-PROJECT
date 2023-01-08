function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
const firebaseConfig = {
    apiKey: "AIzaSyA2PfU85Jw27lJs6Xsxk7rGhncpdZJREuo",
    authDomain: "let-s-chat-web-app-ca1d5.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-ca1d5-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-ca1d5",
    storageBucket: "let-s-chat-web-app-ca1d5.appspot.com",
    messagingSenderId: "578930136562",
    appId: "1:578930136562:web:520d1fd161e7f39ea6c76b",
    measurementId: "G-W51RVNPNBP"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome " + user_name + " !" ;

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#"+ Room_names + "</div> <hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });
});
}
getData();
function redirectToRoomName(name){
    console.log(name)
    localStorage.setItem("room_name", name)
    window.location = "chat_page.html";
}

