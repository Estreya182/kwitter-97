

var firebaseConfig = {
      apiKey: "AIzaSyAPFrpCoGPtvSPEeJFfY8WjQKKoM7tKrOE",
      authDomain: "kwitter-ea641.firebaseapp.com",
      databaseURL: "https://kwitter-ea641-default-rtdb.firebaseio.com",
      projectId: "kwitter-ea641",
      storageBucket: "kwitter-ea641.appspot.com",
      messagingSenderId: "538076162410",
      appId: "1:538076162410:web:0685924215b98485635d13"
};


firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });


      document.getElementById("msg").value = "";
}







