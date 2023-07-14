// Compare the number of game titles
function compareGameTitles() {
    // Get system 1 game titles
    let system1GameTitles = document.querySelector(".system1GameTitles").textContent;
    // Get system 2 game titles
    let system2GameTitles = document.querySelector(".system2GameTitles").textContent;

    // Convert values to integers
    system1GameTitles = parseInt(system1GameTitles);
    system2GameTitles = parseInt(system2GameTitles);

    // Get system 1 game titles arrow element
    let system1GameTitlesArrow = document.querySelector(".system1GameTitlesArrow");
    // Get system 2 game titles arrow element
    let system2GameTitlesArrow = document.querySelector(".system2GameTitlesArrow");


    // Compare values
    if (system1GameTitles === Math.max(system1GameTitles, system2GameTitles)) {
        // Set System 1 arrow to up
        system1GameTitlesArrow.className = "arrow up";
        // Set system 2 arrow to down
        system2GameTitlesArrow.className = "arrow down";
    }
    else {
        // Set System 1 arrow to down
        system1GameTitlesArrow.className = "arrow down";

        // Set System 2 arrow to up
        system2GameTitlesArrow.className = "arrow up";
    }
}

// Compare the generation
function compareGeneration() {
    // Get system 1 generation
    let system1Generation = document.querySelector(".system1Generation").textContent;
    // Get system 2 generation
    let system2Generation = document.querySelector(".system2Generation").textContent;

    // Convert values to integers
    system1Generation = parseInt(system1Generation);
    system2Generation = parseInt(system2Generation);

    // Get system 1 generation arrow element
    let system1GenerationArrow = document.querySelector(".system1GenerationArrow");
    // Get system 2 generation arrow element
    let system2GenerationArrow = document.querySelector(".system2GenerationArrow");


    // Compare values
    if (system1Generation === Math.max(system1Generation, system2Generation)) {
        // Set System 1 arrow to up
        system1GenerationArrow.className = "arrow up";
        // Set system 2 arrow to down
        system2GenerationArrow.className = "arrow down";
    }
    else {
        // Set System 1 arrow to down
        system1GenerationArrow.className = "arrow down";

        // Set System 2 arrow to up
        system2GenerationArrow.className = "arrow up";
    }
}

// Compare the units sold
function compareUnitsSold() {
    // Get system 1 units sold
    let system1UnitsSold = document.querySelector(".system1UnitsSold").textContent;
    // Get system 2 units sold
    let system2UnitsSold = document.querySelector(".system2UnitsSold").textContent;

    // A system may not have data for units sold. 
    // Only perform comparison if values exist
    if (system1UnitsSold && system2UnitsSold) {
        // Convert values to integers
        system1UnitsSold = parseInt(system1UnitsSold);
        system2UnitsSold = parseInt(system2UnitsSold);

        // Get system 1 units sold arrow element
        let system1UnitsSoldArrow = document.querySelector(".system1UnitsSoldArrow");
        // Get system 2 units sold arrow element
        let system2UnitsSoldArrow = document.querySelector(".system2UnitsSoldArrow");

        // Compare values
        if (system1UnitsSold === Math.max(system1UnitsSold, system2UnitsSold)) {
            // Set System 1 arrow to up
            system1UnitsSoldArrow.className = "arrow up";
            // Set system 2 arrow to down
            system2UnitsSoldArrow.className = "arrow down";
        }
        else {
            // Set System 1 arrow to down
            system1UnitsSoldArrow.className = "arrow down";

            // Set System 2 arrow to up
            system2UnitsSoldArrow.className = "arrow up";
        }
    }
}

// Compare the lifespan
function compareLifespan() {
    // Get system 1 lifespan
    let system1Lifespan = document.querySelector(".system1Lifespan").textContent;
    // Get system 2 lifespan
    let system2Lifespan = document.querySelector(".system2Lifespan").textContent;

    // A system may not have data for lifespan.
    // Only perform comparison if values exist
    if (system1Lifespan && system2Lifespan) {
        // Convert values to integers
        system1Lifespan = parseInt(system1Lifespan);
        system2Lifespan = parseInt(system2Lifespan);

        // Get system 1 lifespan arrow element
        let system1LifespanArrow = document.querySelector(".system1LifespanArrow");
        // Get system 2 lifespan arrow element
        let system2LifespanArrow = document.querySelector(".system2LifespanArrow");

        // Compare values
        if (system1Lifespan === Math.max(system1Lifespan, system2Lifespan)) {
            // Set System 1 arrow to up
            system1LifespanArrow.className = "arrow up";
            // Set system 2 arrow to down
            system2LifespanArrow.className = "arrow down";
        }
        else {
            // Set System 1 arrow to down
            system1LifespanArrow.className = "arrow down";

            // Set System 2 arrow to up
            system2LifespanArrow.className = "arrow up";
        }
    }
}

// Compare the CPU
function compareCPU() {
    // Get system 1 CPU
    let system1CPU = document.querySelector(".system1CPU").textContent;
    // Get system 2 CPU
    let system2CPU = document.querySelector(".system2CPU").textContent;

    // A system may not have data for CPU.
    // Only perform comparison if values exist
    if (system1CPU && system2CPU) {

        // Convert values to MHz
        const system1CpuSpeed = cpuConversion(system1CPU);
        const system2CpuSpeed = cpuConversion(system2CPU);

        // Get system 1 CPU arrow element
        let system1CPUArrow = document.querySelector(".system1CPUArrow");
        // Get system 2 CPU arrow element
        let system2CPUArrow = document.querySelector(".system2CPUArrow");

        // Compare values
        if (system1CpuSpeed === Math.max(system1CpuSpeed, system2CpuSpeed)) {
            // Set System 1 arrow to up
            system1CPUArrow.className = "arrow up";
            // Set system 2 arrow to down
            system2CPUArrow.className = "arrow down";
        }
        else {
            // Set System 1 arrow to down
            system1CPUArrow.className = "arrow down";

            // Set System 2 arrow to up
            system2CPUArrow.className = "arrow up";
        }
    }
}

// Converts a string representing a CPU speed into MHz and returns the value
function cpuConversion(cpu) {
    // Extract the measurement type (either MHz or GHz)
    if (cpu.includes("MHz")) {
        // Extract the number from the string
        let numberString = cpu.replace("MHz", "");
        // Trim the whitespace from the result
        numberString = numberString.trim();
        // Convert the the number to a float and return the value
        return parseFloat(numberString);
    }
    else if (cpu.includes("GHz")) {
        // Extract the number from the string
        let numberString = cpu.replace("GHz", "");
        // Trim the whitespace from the result
        numberString = numberString.trim();
        // Convert the the number to a float
        const cpuSpeedGHz =  parseFloat(numberString);
        // Convert the GHz value to MHz and return the value
        return cpuSpeedGHz * 1000;
    }
}

// When page loads, run the comparison functions
compareGameTitles();
compareGeneration();
compareUnitsSold();
compareLifespan();
compareCPU();