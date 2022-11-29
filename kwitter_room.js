
var firebaseConfig = {
      apiKey: "AIzaSyBQj7aWsWFQiO5izZwX09jnbP0xNuKuuWM",
      authDomain: "kwitter-9169e.firebaseapp.com",
      databaseURL: "https://kwitter-9169e-default-rtdb.firebaseio.com",
      projectId: "kwitter-9169e",
      storageBucket: "kwitter-9169e.appspot.com",
      messagingSenderId: "308080876058",
      appId: "1:308080876058:web:163a93748cc1d9bd640fa3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + username + "!"

function add_room() {
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding roomname"
      })
      localStorage.setItem("room_name", room_name)
      window.location = "kwitter_page.html"
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("roomname-" + Room_names)
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#"
                        + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location="index.html"
}

