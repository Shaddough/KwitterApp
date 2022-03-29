var firebaseConfig = {
    apiKey: "AIzaSyCkoBgpdxd6HBnkiIxLul7N8is-tER0iwE",
    authDomain: "kwitter-app-d45c3.firebaseapp.com",
    databaseURL: "https://kwitter-app-d45c3-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-d45c3",
    storageBucket: "kwitter-app-d45c3.appspot.com",
    messagingSenderId: "295690134246",
    appId: "1:295690134246:web:0c72f7e02aa21b3ef4d127"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class = 'room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name;
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}