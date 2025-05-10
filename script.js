'use strict';

//NAVBAR
    document.addEventListener('click', function (event) {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);

        if (!isClickInsideNavbar && navbarCollapse.classList.contains('show')) {
            navbarToggler.click(); 
        }
    });

  //SEARCH TABLE
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


    // FILTER TABLE
let sortDirection = {};

function sortFunction(columnIndex) {
  const table = document.getElementById("emissionTable");
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.rows);

  sortDirection[columnIndex] = !sortDirection[columnIndex];

  rows.sort((a, b) => {
    let valA = a.cells[columnIndex].innerText.trim();
    let valB = b.cells[columnIndex].innerText.trim();


    let numA = parseFloat(valA.replace(/,/g, ""));
    let numB = parseFloat(valB.replace(/,/g, ""));
    let isNumeric = !isNaN(numA) && !isNaN(numB);

    if (isNumeric) {
      return sortDirection[columnIndex] ? numA - numB : numB - numA;
    } else {
      return sortDirection[columnIndex]
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }
  });

  rows.forEach(row => tbody.appendChild(row));
}