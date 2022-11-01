let pageProgressbar = document.getElementById('top-progressbar');
let spendingTimeValue =[];
let tripNo ;
let te = 0;
// For On Keypress
function enterPress(e, nextSec) {
  if(e.charCode == '13') {
    $(nextSec).click();
  }
}

function pageChange(x,y) {
  document.getElementById(x).style.display = 'none';
  document.getElementById(y).style.display = 'block';
  progressbar(y)
}

// For Changing page
function progressbar(y) {
  if (y == 'home' ) {
    pageProgressbar.style.width = '0%';
  }
  else if (y == 'second' ) {
    pageProgressbar.style.width = '11.11%';
    $('#fname').select();
  }
  else if (y == 'third' ) {
    pageProgressbar.style.width = '22.22%';
    $('#place').select();
  }
  else if (y == 'fourth' ) {
  pageProgressbar.style.width = '33.33%';
  }
  else if (y == 'fifth' ) {
    pageProgressbar.style.width = '44.44%';
  }
  else if (y == 'sixth' ) {
    pageProgressbar.style.width = '55.55%';
    $('#dream_destination').select();
  }
  else if (y == 'seventh' ) {
    pageProgressbar.style.width = '66.66%';
  }
  else if (y == 'eighth' ) {
    pageProgressbar.style.width = '77.77%';
  }
  else {
    pageProgressbar.style.width = '100%';
  }
}


function submitFunc() {
  let fname = document.getElementById('fname').value;
  document.getElementById('name2').innerHTML  = fname;
}

function validateForm(valueId,prev,next) {
  let data1 = document.getElementById(valueId).value;
  if(data1 == "" || data1 == null) {
    document.getElementById(prev).classList.add('error');
    document.getElementById('error-msg').style.display = 'block';
  }
  else {
    document.getElementById('error-msg').style.display = 'none';
    document.getElementById(prev).classList.remove('error');
    pageChange(prev,next);
  }
}

function checkboxValid(prev,next) {
  let temp = []
  let spendingTime = document.querySelectorAll('#select_card input[type=checkbox]');
  for(let i=0; i< spendingTime.length; i++) {
    if(spendingTime[i].checked == true) {
      temp[i] = spendingTime[i].value;
    }
  }
  spendingTimeValue = [...temp]
  if (spendingTimeValue.length <= 1 ) {
    document.getElementById(prev).classList.add('error');
    document.getElementById('error-msg').style.display = 'block';
  }
  else {
    document.getElementById('error-msg').style.display = 'none';
    document.getElementById(prev).classList.remove('error');
    pageChange(prev,next)
  }
}

function radioValid(prev,next) {
  console.log('called',prev,next)

  let trips_count = document.querySelectorAll('#trips_count input[type=radio]');
  // let acco_budget = document.querySelectorAll('#acco_budget input[type=radio]');
  for(let i=0; i< trips_count.length; i++) {
    if(trips_count[i].checked !== true) {
      document.getElementById(prev).classList.add('error');
      document.getElementById('error-msg').style.display = 'block';
    }
    else {
      tripNo= trips_count[i].value;
      document.getElementById('error-msg').style.display = 'none';
      document.getElementById(prev).classList.remove('error');
      console.log(tripNo)
      pageChange(prev,next)
    }
  }
}







// number input with country code
$(document).ready(function() {
  var input = document.querySelector("#phone");
  var iti = window.intlTelInput(input, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.3/build/js/utils.js",
  });
  window.iti = iti;
});




/*==========================
Sumbit Form
============================*/

// $("#tripServey").submit(function(event){
//   // Stop form from submitting normally
//   console.log('form submited')
//   event.preventDefault();
//   let $form = $(this);
//   fname = $form.find("#name").val();


//   console.log(fname)

// });


// function valildationFun () {
//   let name = document.getElementById('fname').value;
//   let place = document.getElementById('place').value;
// }






/*------------Validation Function-----------------*/
let count = 0; // To count blank fields.
function validation(event) {
  let name = document.getElementById('fname').value;
  let place = document.getElementById('place').value;
  let trip_count = document.getElementsByName('trip_count'); // Fetching radio button by name.
  let dream_destination = document.getElementsByName('dream_destination'); // Fetching all inputs with same class name text_field and an html tag textarea.
  let text_area = document.getElementsByTagName('textarea');
  // Validating radio button.
  if (trip_count[0].checked == false && trip_count[1].checked == false) {
    let y = 0;
  } else {
    let y = 1;
  }
  // For loop to count blank inputs.
  for (let i = dream_destination.length; i > count; i--) {
    if (dream_destination[i - 1].value == '' || text_area.value == '') {
      count = count + 1;
    } else {
      count = 0;
    }
  }

  console.log(name, place)

  if (count != 0 || y == 0) {
    alert("*All Fields are mandatory*"); // Notifying validation
    event.preventDefault();
  } else {
    return true;
  }
}