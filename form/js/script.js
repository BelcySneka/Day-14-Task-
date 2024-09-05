

function add() {
      
      var AddRown = document.getElementById('show');
      var NewRow = AddRown.insertRow(n);

      list1[x] = document.getElementById("first name").Value;
      list2[x] = document.getElementById("last name").value;
      list3[x] = document.getElementById("email").value;
      list4[x] = document.getElementById("address").value;
      list5[x] = document.getElementById("pincode").value;
      list6[x] = document.getElementById("gender").value;
      list7[x] = document.getElementById("choice of food").value;
      list8[x] = document.getElementById("state").value;
      list9[x] = document.getElementById("city").value;


      var cel1 = NewRow.insertCell(0);
      var cel2 = NewRow.insertCell(1);
      var cel3 = NewRow.insertCell(2);
      var cel4 = NewRow.insertCell(3);
      var cel4 = NewRow.insertCell(4);
      var cel4 = NewRow.insertCell(5);
      var cel4 = NewRow.insertCell(6);
      var cel4 = NewRow.insertCell(7);
      var cel4 = NewRow.insertCell(8);



      cel1.innerHTML = list1[x];
      cel2.innerHTML = list2[x];
      cel3.innerHTML = list3[x];
      cel4.innerHTML = list4[x];
      cel4.innerHTML = list5[x];
      cel4.innerHTML = list6[x];
      cel4.innerHTML = list7[x];
      cel4.innerHTML = list8[x];
      cel4.innerHTML = list9[x];
 
      
      n++;
      x++;
}

