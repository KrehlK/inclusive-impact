/* -------------- */ 
/* FILTER FEATURE */
/* -------------- */ 

//FILTER BUTTONS 
//Source: https://www.w3schools.com/howto/howto_js_filter_elements.asp

filterSelection("all")
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    console.log(element.className, arr2[i]);
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let filterContainer = document.getElementById("filterContainer");
let btns = filterContainer.getElementsByClassName("dropdown-item");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/* -------------- */ 
/* SEARCH FEATURE */
/* -------------- */

// Source: https://www.w3schools.com/howto/howto_js_filter_lists.asp

function searchFunction() {
  // Declare variables
  var input, filter, row, col, resource, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  row = document.getElementById("myList");
  col = row.getElementsByClassName('col-12');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < col.length; i++) {
    resource = col[i].getElementsByClassName("card-title")[0];
    txtValue = resource.textContent || resource.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      col[i].style.display = "";
    } else {
      col[i].style.display = "none";
    }
  }
}