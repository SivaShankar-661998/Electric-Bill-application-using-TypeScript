
// Validation for empty input
function validate()
{
    var flag=true;
    var firstName = document.getElementById("firstName");
    var fatherName = document.getElementById("fatherName");
    var emailId = document.getElementById("email");
    var dateOfBirth = document.getElementById("dob");
    var address1 = document.getElementById("add1");
    var address2 = document.getElementById("add2");
    var districk=document.getElementById("districk")
    var zipCode = document.getElementById("zipCode");
    
    if(firstName.value.trim()=="")
    {
        
        firstName.style.border="solid 3px red"
        document.getElementById("firstNamelabel").style.visibility="visible";
        flag=false;
    }
    if(fatherName.value.trim()=="")
    {
        
        fatherName.style.border="solid 3px red";
        document.getElementById("fatherNamelabel").style.visibility="visible";
        flag=false;
    }
    if(emailId.value.trim()=="")
    {
        
        emailId.style.border="solid 3px red";
        document.getElementById("emaillabel").style.visibility="visible";
        flag=false;
    }
    if(dateOfBirth.value.trim()=="")
    {
        
        dateOfBirth.style.border="solid 3px red";
        document.getElementById("doblabel").style.visibility="visible";
        flag=false;
    }
    if(address1.value.trim()=="")
    {
        
        address1.style.border="solid 3px red";
        document.getElementById("addresslabel").style.visibility="visible";
        flag=false;
    }
    if(address2.value.trim()=="")
    {
        
        address2.style.border="solid 3px red";
        document.getElementById("addresslabel2").style.visibility="visible";
        flag=false;
    }
    if(districk.value.trim()=="")
    {
        
        districk.style.border="solid 3px red";
        document.getElementById("districklabel").style.visibility="visible";
        flag=false;
    }
    if(zipCode.value.trim()=="")
    {
        
        zipCode.style.border="solid 3px red";
        document.getElementById("zipcodelabel").style.visibility="visible";
        flag=false;
    }
    
    else{
        return flag;
    }
}
