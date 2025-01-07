
var subOne = + prompt("Enter your subOne marks");
var subTwo = + prompt("Enter your subTwo marks");
var subThree = + prompt("Enter your subThree marks");

var totalMark = 300;

var obtainedMark = subOne + subTwo + subThree;

var percentage = (obtainedMark / totalMark) * 100;
alert("Percentage: " + percentage + "%");

if (percentage >= 80) {
    alert("Grade: A");
    alert( "Excllent");
} else if (percentage >= 70) {
    alert("Grade: B ");
    alert( "Good" );
} else if (percentage >= 60) {
    alert("Grade: C " );
     alert( "You need to improve");
} else {
    alert("Fail ");

    alert("Sorry");
}

document.write(
  "<h1>Marks Sheet</h1> \n Total Marks :" +
    totalMarks +
    "<br/> Marks Obtained : " +
    totalObtndMarks +
    " <br/> percentage : " +
    percentage +
    " %" +
    " <br/> Grade :" +
    grade +
    " <br/> Remarks : " +
    remarks
);
