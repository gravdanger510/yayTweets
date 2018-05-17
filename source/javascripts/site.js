// Initialize Firebase
var config = {
  apiKey: "AIzaSyC7cYs3KKSuIUCHnKEl80kJee6VicnkWow",
  authDomain: "yay-tweets.firebaseapp.com",
  databaseURL: "https://yay-tweets.firebaseio.com",
  projectId: "yay-tweets",
  storageBucket: "yay-tweets.appspot.com",
  messagingSenderId: "240663594792"
};
firebase.initializeApp(config);

var database = firebase.database(),
nums = database.ref('nums'),
remove = database.ref('removeMe');

function addNum(n) {
  nums.push({
    digits: n
  });
  console.log("added " + n);
}

function removeNum(n) {
  remove.push({
    digits: n
  });
  console.log("added " + n);
}
