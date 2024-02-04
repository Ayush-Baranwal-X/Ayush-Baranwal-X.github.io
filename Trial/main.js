function legal() {
    setTimeout(function () {
        var v = confirm("Are you above 18");
        if (v == true) {
            var age;
            age = prompt("Enter Your Age", 18);
            alert("Your age is " + age);
        }
        else if (v == false) {
            alert("Go Away");
        }
    }, 2000)
}

function askAge() {
    var age = prompt('Whats your age?', 13);
    if(age == null)
    {
        alert("Please enter your valid age");
        location.href = '';
    }
    else if (age < 13) {
        alert("Minimun age of entry is 13 years.")
        location.href = 'https://www.google.com';
    }
}

function submit() {
    if (confirm("Are you sure you want to submit")) {
        var data = "Mobile Number : 6284948878 <br> Email ID : ayushabhilasha@gamil.com";
        document.getElementById("form").innerHTML = data;
        document.getElementById("button").innerHTML = "";
        document.getElementById("title").innerHTML = "Here are my Contact Details. Feel free to contact me.";
    }
}

function reset() {
    if (confirm("Are you sure you want to reset")) {
        document.getElementById("form").reset();
        document.getElementById("contact").innerHTML = "";
    }
}

var date = new Date();

document.write(arr[9] + " " + helloooo.toUpperCase() + " " + date.getHours() % 12 + ":" + date.getMinutes() + ":" + date.getSeconds());
