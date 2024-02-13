function addEmployee() {
    var firstname=document.getElementById('fname').value;
    var lastname=document.getElementById('lname').value;
    var name=firstname+' '+lastname;
    var email=document.getElementById('email').value;
    var location=document.getElementById('location').value;
    var department=document.getElementById('department').value;
    var role=document.getElementById('jobTitle').value;
    var empno=document.getElementById('empno').value;
    var status="Active";
    var joindt=document.getElementById('joindate').value;

    var employees=JSON.parse(localStorage.getItem('employees'))||[];

    employees.push({name:name,email:email,location:location,department:department,role:role,empno:empno,status:status,joindt:joindt});

    localStorage.setItem('employees',JSON.stringify(employees));

    var alertBox=document.getElementById('alertBox');
    alertBox.style.display='block';

    setTimeout(function(){
        window.location.href='task3.html';
    },1000);
}