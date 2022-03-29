//YOUR FIREBASE LINKS
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
   room_name = localStorage.getItem("room_name");
   user_name = localStorage.getItem("user_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h3> "+ name + "<img class = 'user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class ='message_h4'>"+ message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message : msg,
            like: updated_likes
      });
      document.getElementById("msg").value = "";
}



function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}