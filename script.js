'use strict';

//NAVIGATION 
function showSidebar() {
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }
  function hideSidebar() {
    let sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }
  
  document.addEventListener("click", function(event) {
    let sidebar = document.querySelector(".sidebar");
    let menuButton = document.querySelector(".menu_btn");
    
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        hideSidebar();
    }
  });
  

  //FILTER FOR TABLE
  function filterfunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("emissionTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }