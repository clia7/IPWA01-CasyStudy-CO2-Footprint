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
  