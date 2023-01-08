// Your web app's Firebase configuration
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

//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name;



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



