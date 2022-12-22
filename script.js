function sortPeople() {
  var div = document.getElementById('people');
  var childElements = div.children;
  var childElementsArray = Array.prototype.slice.call(childElements);

  childElementsArray.sort(function (a, b) {
    var scoreA = a.dataset.score;
    var scoreB = b.dataset.score;
    if (scoreA < scoreB) { return -1; }
    if (scoreA > scoreB) { return 1; }
    return 0;
  });

  childElementsArray.forEach(function (element) {
    div.appendChild(element);
  });
}

sortPeople();

function openWindow(window) {
  document.getElementById(window).style.transform = "translateY(0)";
}

function closeWindow(window) {
  document.getElementById(window).style.transform = "translateY(100vh)";
}

function navigate(location) {
  window.location.href = location;
}

function addPoints() {
  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');
  const input3 = document.getElementById('input3');
  const input4 = document.getElementById('input4');
  const input5 = document.getElementById('input5');

  const element1 = document.getElementById('lran');
  const element2 = document.getElementById('granny');
  const element3 = document.getElementById('grandad');
  const element4 = document.getElementById('mum');
  const element5 = document.getElementById('papi');

  if (input1.value == "") { input1.value = "0"; }
  if (input2.value == "") { input2.value = "0"; }
  if (input3.value == "") { input3.value = "0"; }
  if (input4.value == "") { input4.value = "0"; }
  if (input5.value == "") { input5.value = "0"; }

  element1.dataset.score = parseInt(element1.dataset.score) + parseInt(input1.value);
  element2.dataset.score = parseInt(element2.dataset.score) + parseInt(input2.value);
  element3.dataset.score = parseInt(element3.dataset.score) + parseInt(input3.value);
  element4.dataset.score = parseInt(element4.dataset.score) + parseInt(input4.value);
  element5.dataset.score = parseInt(element5.dataset.score) + parseInt(input5.value);

  sortPeople();

  input1.value = "";
  input2.value = "";
  input3.value = "";
  input4.value = "";
  input5.value = "";
} 
