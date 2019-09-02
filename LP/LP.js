function toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("tablediv").classList.toggle('active');
  };
  
  function myFunction() {
    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    username = document.getElementById("username").value,
    emails = document.getElementById("emails").value,
    checkboxs = document.getElementById("checkbox").value,
      
    cell1.innerHTML = "number";
    cell2.innerHTML = username;
    cell3.innerHTML = emails;
    cell4.innerHTML = checkboxs;
  };