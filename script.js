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
    var input, filter, table, tr, td, i, j, txtValue, rowMatches;
    input = document.getElementById("filterInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("emissionTable");
    tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      rowMatches = false;
  
      for (j = 0; j < td.length; j++) {
        txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          rowMatches = true;
          break;
        }
      }
  
      tr[i].style.display = rowMatches ? "" : "none";
    }
  }

  // INSERT JSON DATA INTO HTML TABLE
  fetch('co2_emissions_data.json')
    .then(response => response.json())
    .then(data => {
        const tableData = document.getElementById("tableData");

        data.forEach(entry => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${entry.country}</td>
            <td>${entry.company}</td>
            <td>${entry.sector}</td>
            <td>${entry.emissions_mt}</td>
            <td>${entry.year}</td>
            `;

            tableData.appendChild(row);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));
