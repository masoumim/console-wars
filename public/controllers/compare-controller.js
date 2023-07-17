// Initialize the submit button to be disabled
disableSubmit();

// onChange checkselections()
document.querySelector(".system1").addEventListener("change", checkSelections);
document.querySelector(".system2").addEventListener("change", checkSelections);


// Get list of valid consoles
const validSystems = getValidSystems();

// Disables submit button
function disableSubmit(){
    document.querySelector(".submit-btn").disabled = true;
}

// Enables submit button
function enableSubmit(){
    document.querySelector(".submit-btn").disabled = false;
}

// Returns system 1 selection
function system1Selection(){
    return document.querySelector(".system1").value;
}

// Returns system 2 selection
function system2Selection(){
    return document.querySelector(".system2").value; 
}

// Returns true if chosen System is in system list otherwise returns false
function validateSelection(systemName){
    return validSystems.includes(systemName);
}

// Called when either Datalist value is changed
// Checks that both selections are valid and not the same
// If so, enables submit button, otherwise disables it
function checkSelections(){    
    if(validateSelection(system1Selection()) && validateSelection(system2Selection()) && system1Selection() !== system2Selection()){
        enableSubmit();
    }
    else{
        disableSubmit();
    }
}

// Returns an array of all valid system names from the Datalist
function getValidSystems() {
    const validSystems = [];
    const systems = document.querySelector(".datalist1");  
    for (let i = 0; i < systems.options.length; i++) {
        validSystems.push(systems.options[i].value);
    }
    return validSystems;
}


