function booking() 
{
    var fname = (document.getElementById("fname").value);
    var lname = (document.getElementById("lname").value);
    var gender = (document.getElementById("gender").value);
    var email = (document.getElementById("email").value);
    var origin = (document.getElementById("origin").value);
    var destination = (document.getElementById("destination").value);
    var departure = (document.getElementById("departure").value);
    var Return = (document.getElementById("returning").value);
					
    if(fname == null || fname =="")
        {
            alert("Please enter your information");
            return false;
        }
    else if(lname == null || lname =="")
        {
            alert("Please enter your information");
            return false;
        }
    else if(email == null || email =="")
        {
            alert("Please enter your information");
            return false;
        }
    else if(origin ==null || origin == "")
        {
            alert("Please enter your information");
            return false;
        }
    else if(destination==null || destination=="")
        {
            alert("Please enter your information");
            return false;
        }
    else if(departure==null || departure=="")
        {
            alert("Please enter your information");
            return false;
        }
    else if(Return==null || Return=="")
        {
            alert("Please enter your information");
            return false;
        }
    else if(!email.includes("@"))
        {
            alert("Please enter your correct Email format");
            return false;
        }
    else if(departure >= Return)
        {
            alert("Please enter correct date of Departure");
            return false;
        }
    
    document.getElementById("1").innerHTML = "Firstname:" + fname;
    document.getElementById("2").innerHTML = "Lastname:" + lname;
    document.getElementById("3").innerHTML = "Gender:" + gender;
    document.getElementById("4").innerHTML = "Email Adress:" + email;
    document.getElementById("5").innerHTML = "Origin:" + origin;
    document.getElementById("6").innerHTML = "Destination:" + destination;
    document.getElementById("7").innerHTML = "Departure Date:" + departure;
    document.getElementById("8").innerHTML = "Return Date:" + Return;
}