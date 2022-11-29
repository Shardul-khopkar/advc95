function add_user()
{
    var user= document.getElementById("user").value
    localStorage.setItem("user_name",user)
    window.location="kwitter_room.html"
}