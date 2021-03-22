var selections = document.getElementById('servicesSelect');
var data = document.getElementById('budget');
var output = document.querySelector('div#output');
console.log(output);
var total = 0;
var selected = "";

function calculateBudget(){
    for(var option of selections.options){
        if(option.selected){
            if(option.value == "Website Development"){
                total += 60000;
                selected += 'Website Development<br />';
            }
            if(option.value == "Mobile Application Development"){
                total += 50000;
                selected += 'Mobile Application Development<br />';
            }
            if(option.value == "DevOps"){
                total += 70000;
                selected += "DevOps<br />";
            }
            if(option.value == "Cloud"){
                total += 65000;
                selected += "Cloud<br />";
            }
            if(option.value == "Data Analytics"){
                total += 40000;
                selected += "Data Analytics<br />";
            }
            if(option.value == "Software Testing"){
                total += 45000;
                selected += "Software Testing<br />";
            }
        }
    }
    output.style.display = 'block';
    output.querySelector("h5").innerHTML = "Total cost is: " +total;
    total = 0;
    output.querySelector("p").innerHTML = "<strong><u>Selected Services:</u></strong> " + "<br />" + selected;
    selected = '';
}