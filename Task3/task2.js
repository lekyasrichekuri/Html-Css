document.addEventListener('DOMContentLoaded',function(){
    var emp=JSON.parse(localStorage.getItem("employees"))||[];
    buildTable(emp);
});

function buildTable(emp){
    let table=document.getElementById("table-body");
    table.innerHTML='';
    emp.forEach(function(employee,index){
        let row=table.insertRow();
        var checkbox=document.createElement('input');
        checkbox.type='checkbox';
        row.insertCell(0).appendChild(checkbox);
        let profileCell=row.insertCell(1);
        profileCell.style.display='flex';
        profileCell.style.alignItems='center';
        profileCell.innerHTML=`
            <div>
                <img src="assets/images/profileicon.png" alt="profile" width="35px" height="35px">
            </div>
            <div style="margin-left:10px;">
                <p style="padding:0;margin:0">${employee.name}</p>
                <p style="padding:0;margin:0">${employee.email}</p>
            </div>
        `;
        row.insertCell(2).innerHTML=employee.location;
        row.insertCell(3).innerHTML=employee.department;
        row.insertCell(4).innerHTML=employee.role;
        row.insertCell(5).innerHTML=employee.empno;
        var button=document.createElement('button')
        button.innerHTML="Active";
        button.classList.add("active");
        row.insertCell(6).appendChild(button);
        row.insertCell(7).innerHTML=employee.joindt;
        let ellipse=row.insertCell(8);
        var extra=document.createElement('select');
        extra.classList.add("extra");
        let options=[
            {text:'...'},
            {text:'Details', value:'details'},
            {text:'Edit', value:'edit'},
            {text:'Delete',value:'delete'}
        ]
        extra.style.border='none';
        extra.style.appearance='none';
        extra.style.fontSize='12px';
        extra.style.color='rgb(86, 86, 86)';
        options.forEach(function (option){
            var optionElement=document.createElement('option');
            optionElement.textContent=option.text;
            optionElement.value=option.value;
            extra.appendChild(optionElement);
        });
        ellipse.appendChild(extra);
    });
}

var buttons=document.querySelectorAll(".letter-button");
console.log(buttons);
var previousButton=null;
buttons.forEach(function(button) {
    button.addEventListener("click", function(){
        var buttonText=button.innerText;
        if (previousButton!==null) {
            previousButton.style.backgroundColor="";
            previousButton.style.color="";
        }
        button.style.backgroundColor="rgb(249, 23, 23)";
        button.style.color='white';
        previousButton=button;
        filterTableByLetter(buttonText);
    });
});
function filterTableByLetter(letter) {
    var rows=JSON.parse(localStorage.getItem('employees'))||[];
    let data=rows.filter(ele=>{
        var username=ele.name;
        var firstLetter=username.charAt(0).toUpperCase();
        console.log(firstLetter);
        return (firstLetter===letter);
    })
    if (data.length===0) {
        document.getElementById('table-body').innerHTML="<tr><td colspan='6'>No matches found</td></tr>";
    } else {
        document.getElementById('table-body').innerHTML = "";
        buildTable(data);
    }
}
