//Script for admssion
function html() {
    let text1;
    let person1 = prompt("Please enter your name:", "");
    if (person1 == null || person1 == "") {
        text1 ="User cancelled the prompt";
    } else {
        text1 = "Hello " + person1 + "<br><br>"+ "Welcome to Brain Academy" + "<br>" + "Below are the requirements for HTML course:" + "<br><br>" + "1. Mobile Phone" + "<br>" + "2. Strong Internet" + "<br>" + "3. Trebedit App or VS Code" + "<br>" + "4. Free Course"
    } 
    document.getElementById("demo").innerHTML = text1;
}

function css() {
    let text2;
    let person2 = prompt("Please enter your name:", "");
    if (person2 == null || person2 == "") {
        text1 ="User cancelled the prompt";
    } else {
        text2 = "Hello " + person2 + "<br><br>"+ "Welcome to Brain Academy" + "<br>" + "Below are the requirements for HTML course:" + "<br><br>" + "1.Laptop / Mobile phone" + "<br>" + "2. Strong Internet" + "<br>" + "3. VS Code" + "<br>" + "4. Course is N3,000"
    } 
    document.getElementById("demo").innerHTML = text2;
}
