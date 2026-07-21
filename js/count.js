import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getDatabase,
ref,
runTransaction,
onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXXXXXX",
  appId: "XXXXXXXXXXXX"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const counterRef = ref(db, "visitorCount");

// Count only once per browser
if(!localStorage.getItem("visited")){

    runTransaction(counterRef,(count)=>{
        return (count || 0) + 1;
    });

    localStorage.setItem("visited","true");
}

// Display live count
onValue(counterRef,(snapshot)=>{
    document.getElementById("count").innerHTML = snapshot.val() || 0;
});