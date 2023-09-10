// fill in javascript code here

let form = document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault();


    let name = document.getElementById("name").value;
    let employeeID = document.getElementById("employeeID").value;
    let department = document.getElementById("department").value;
    let exp = document.getElementById("exp").value;
    let email = document.getElementById("email").value;
    let mbl = document.getElementById("mbl").value;

    let role;
    if(exp > 5){
        role = "Senior"
    }else if( exp >= 2 && exp <= 5){
        role = "Junior"
    }else{
        role = "Fresher"
    }

    let tbody = document.querySelector("tbody")
    let row = document.createElement("tr")

     let data = [name,employeeID,department,exp,email,mbl,role]
      
     data.forEach((ele)=>{
            let td = document.createElement("td")
            td.innerText = ele;
            row.appendChild(td)
            name.innerText = ""
            
     })

      let deleteTd = document.createElement("td")
      let deletebtn =  document.createElement("button")
      deletebtn.innerText = "Delete";
      
      deletebtn.addEventListener("click",function(){
        tbody.removeChild(row)
      })

      deleteTd.appendChild(deletebtn)
      row.appendChild(deleteTd)
         

     tbody.appendChild(row)



})
