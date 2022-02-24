
const firebaseConfig = {
      apiKey: "AIzaSyCC3QgYH_nObV-QeGOVNu45K9XSg-UPuQ8",
      authDomain: "kwitter-24dfe.firebaseapp.com",
      databaseURL: "https://kwitter-24dfe-default-rtdb.firebaseio.com",
      projectId: "kwitter-24dfe",
      storageBucket: "kwitter-24dfe.appspot.com",
      messagingSenderId: "153029095344",
      appId: "1:153029095344:web:0d209199d45030b91bb075",
      measurementId: "G-WZJYZLMF2M"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";


function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}



function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";

}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}