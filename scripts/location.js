

var button1 = document.getElementById("views"),
  count1 = 0;
button1.onclick = function() {
  count1 += 1;
  button1.innerHTML = "View no. " + count1;
}

var button2 = document.getElementById("views1"),
  count2 = 0;
button2.onclick = function() {
  count2 += 1;
  button2.innerHTML = "View no. " + count2;
}

var button3 = document.getElementById("views2"),
  count3 = 0;
button3.onclick = function() {
  count3 += 1;
  button3.innerHTML = "View no. " + count3;
}

var button4 = document.getElementById("views3"),
  count4 = 0;
button4.onclick = function() {
  count4 += 1;
  button4.innerHTML = "View no. " + count4;
}

function myFunction() {
  var txt;
  var person = prompt("Please enter your comments:");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Thanks for your feedback!";
  }
  document.getElementById("demo").innerHTML = txt;
}

function myFunction1() {
 var txt;
  var person = prompt("Please enter your comments:");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Thanks for your feedback!";
  }
  document.getElementById("demo").innerHTML = txt;
}

function myFunction2() {
  var txt;
  var person = prompt("Please enter your comments:");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Thanks for your feedback!";
  }
  document.getElementById("demo").innerHTML = txt;
}

function myFunction3() {
  var txt;
  var person = prompt("Please enter your comments:");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Thanks for your feedback!";
  }
  document.getElementById("demo").innerHTML = txt;
}
