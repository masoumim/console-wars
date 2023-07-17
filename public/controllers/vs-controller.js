/*
=============================================================
                    Comparison Functions
=============================================================
*/

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
    if (system1GameTitles === system2GameTitles) {
        return;
    }
    else if (system1GameTitles === Math.max(system1GameTitles, system2GameTitles)) {
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
    if (system1Generation === system2Generation) {
        return;
    }
    else if (system1Generation === Math.max(system1Generation, system2Generation)) {
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
        if (system1UnitsSold === system2UnitsSold) {
            return;
        }
        else if (system1UnitsSold === Math.max(system1UnitsSold, system2UnitsSold)) {
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
        if (system1Lifespan === system2Lifespan) {
            return;
        }
        else if (system1Lifespan === Math.max(system1Lifespan, system2Lifespan)) {
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
        if (system1CpuSpeed === system2CpuSpeed) {
            return;
        }
        else if (system1CpuSpeed === Math.max(system1CpuSpeed, system2CpuSpeed)) {
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

// Compare the RAM
function compareRAM() {
    // Get system 1 RAM
    let system1RAM = document.querySelector(".system1RAM").textContent;
    // Get system 2 RAM
    let system2RAM = document.querySelector(".system2RAM").textContent;

    // A system may not have data for RAM.
    // Only perform comparison if values exist
    if (system1RAM && system2RAM) {

        // Convert values to Megebytes
        system1RAM = sizeConversion(system1RAM);
        system2RAM = sizeConversion(system2RAM);

        // Get system 1 RAM arrow element
        let system1RAMArrow = document.querySelector(".system1RAMArrow");
        // Get system 2 RAM arrow element
        let system2RAMArrow = document.querySelector(".system2RAMArrow");

        // Compare values
        if (system1RAM === system2RAM) {
            return;
        }
        else if (system1RAM === Math.max(system1RAM, system2RAM)) {
            // Set System 1 arrow to up
            system1RAMArrow.className = "arrow up";
            // Set system 2 arrow to down
            system2RAMArrow.className = "arrow down";
        }
        else {
            // Set System 1 arrow to down
            system1RAMArrow.className = "arrow down";

            // Set System 2 arrow to up
            system2RAMArrow.className = "arrow up";
        }
    }
}

// Compare the Storage
function compareStorage() {
    // Get system 1 Storage
    let system1Storage = document.querySelector(".system1Storage").textContent;
    // Get system 2 Storage
    let system2Storage = document.querySelector(".system2Storage").textContent;

    // A system may not have data for Storage.
    // Only perform comparison if values exist
    if (system1Storage && system2Storage) {

        // Convert values to Megebytes
        system1Storage = sizeConversion(system1Storage);
        system2Storage = sizeConversion(system2Storage);

        // Get system 1 Storage arrow element
        let system1StorageArrow = document.querySelector(".system1StorageArrow");
        // Get system 2 Storage arrow element
        let system2StorageArrow = document.querySelector(".system2StorageArrow");

        // Compare values
        if (system1Storage === system2Storage) {
            return;
        }
        else if (system1Storage === Math.max(system1Storage, system2Storage)) {
            // Set System 1 arrow to up
            system1StorageArrow.className = "arrow up";
            // Set system 2 arrow to down
            system2StorageArrow.className = "arrow down";
        }
        else {
            // Set System 1 arrow to down
            system1StorageArrow.className = "arrow down";

            // Set System 2 arrow to up
            system2StorageArrow.className = "arrow up";
        }
    }
}

// Compare Max Resolution
function compareMaxResolution() {
    // Get system 1 max res
    let system1MaxRes = document.querySelector(".system1MaxRes").textContent;
    // Get system 2 max res
    let system2MaxRes = document.querySelector(".system2MaxRes").textContent;

    // A system may not have data for resolution.
    // Only perform comparison if values exist
    if (system1MaxRes && system2MaxRes) {

        // Multiply AxB resolution and compare final number
        system1MaxRes = getMaxRes(system1MaxRes);
        system2MaxRes = getMaxRes(system2MaxRes);

        // Get system 1 max res arrow element
        let system1MaxResArrow = document.querySelector(".system1MaxResArrow");
        // Get system 2 max res arrow element
        let system2MaxResArrow = document.querySelector(".system2MaxResArrow");

        // Compare values
        if (system1MaxRes === system2MaxRes) {
            return;
        }
        else if (system1MaxRes === Math.max(system1MaxRes, system2MaxRes)) {
            // Set System 1 arrow to up
            system1MaxResArrow.className = "arrow up";
            // Set system 2 arrow to down
            system2MaxResArrow.className = "arrow down";
        }
        else {
            // Set System 1 arrow to down
            system1MaxResArrow.className = "arrow down";

            // Set System 2 arrow to up
            system2MaxResArrow.className = "arrow up";
        }
    }
}

// Compare Comments
function compareComments() {
    // Get system 1 comment count
    let system1Comments = document.querySelector(".system1Comments").textContent;
    // Get system 2 comment count
    let system2Comments = document.querySelector(".system2Comments").textContent;

    // Convert to integers
    system1Comments = parseInt(system1Comments);
    system2Comments = parseInt(system2Comments);

    // Get system 1 comments arrow element
    let system1CommentsArrow = document.querySelector(".system1CommentsArrow");
    // Get system 2 comments arrow element
    let system2CommentsArrow = document.querySelector(".system2CommentsArrow");

    // Compare values
    if (system1Comments === system2Comments) {
        return;
    }
    else if (system1Comments === Math.max(system1Comments, system2Comments)) {
        // Set System 1 arrow to up
        system1CommentsArrow.className = "arrow up";
        // Set system 2 arrow to down
        system2CommentsArrow.className = "arrow down";
    }
    else {
        // Set System 1 arrow to down
        system1CommentsArrow.className = "arrow down";

        // Set System 2 arrow to up
        system2CommentsArrow.className = "arrow up";
    }
}

// Compare Votes
function compareVotes() {
    // Get system 1 vote count
    let system1Votes = document.querySelector(".system1Votes").textContent;
    // Get system 2 vote count
    let system2Votes = document.querySelector(".system2Votes").textContent;

    // Convert to integers
    system1Votes = parseInt(system1Votes);
    system2Votes = parseInt(system2Votes);

    // Get system 1 votes arrow element
    let system1VotesArrow = document.querySelector(".system1VotesArrow");
    // Get system 2 votes arrow element
    let system2VotesArrow = document.querySelector(".system2VotesArrow");

    // Compare values
    if (system1Votes === system2Votes) {
        return;
    }
    else if (system1Votes === Math.max(system1Votes, system2Votes)) {
        // Set System 1 arrow to up
        system1VotesArrow.className = "arrow up";
        // Set system 2 arrow to down
        system2VotesArrow.className = "arrow down";
    }
    else {
        // Set System 1 arrow to down
        system1VotesArrow.className = "arrow down";

        // Set System 2 arrow to up
        system2VotesArrow.className = "arrow up";
    }
}

// Compare Ranks
function compareRanks() {   
    // Get system 1 rank
    let system1Rank = document.querySelector(".system1Rank").textContent;
    // Get system 2 rank
    let system2Rank = document.querySelector(".system2Rank").textContent;

    // Convert to integers
    system1Rank = parseInt(system1Rank);
    system2Rank = parseInt(system2Rank);

    // Get system 1 rank arrow element
    let system1RankArrow = document.querySelector(".system1RankArrow");
    // Get system 2 rank arrow element
    let system2RankArrow = document.querySelector(".system2RankArrow");

    // Compare values
    if (system1Rank === system2Rank) {
        return;
    }
    else if (system1Rank === Math.min(system1Rank, system2Rank)) {
        // Set System 1 arrow to up
        system1RankArrow.className = "arrow up";
        // Set system 2 arrow to down
        system2RankArrow.className = "arrow down";
    }
    else {
        // Set System 1 arrow to down
        system1RankArrow.className = "arrow down";

        // Set System 2 arrow to up
        system2RankArrow.className = "arrow up";
    }
}

/*
=============================================================
        When page loads, run the comparison functions
=============================================================
*/

compareGameTitles();
compareGeneration();
compareUnitsSold();
compareLifespan();
compareCPU();
compareRAM();
compareStorage();
compareMaxResolution();
compareComments();
compareVotes();
compareRanks();

/*
=============================================================
                     Helper Functions
=============================================================
*/

// Multiplies WxH resolution and returns the product
function getMaxRes(resolution) {
    // Get string length
    const strLen = resolution.length;

    // Get index position of "x"
    const indexOfX = resolution.indexOf("x");

    // Extract number of pixels in width
    let widthStr = resolution.substring(0, indexOfX);

    // Extract number of pixels in height
    let heightStr = resolution.substring(indexOfX + 1, strLen);

    // Convert width to integer
    const w = parseInt(widthStr);

    // Convert height to integer
    const h = parseInt(heightStr);

    // Multiply WxH and return the product
    return w * h;
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
        const cpuSpeedGHz = parseFloat(numberString);
        // Convert the GHz value to MHz and return the value
        return cpuSpeedGHz * 1000;
    }
}

// Converts a string representing a size into Megabytes and returns the value
function sizeConversion(size) {
    // Extract the measurement type (either bytes, kilobytes, megabytes, gigabytes or terabytes)
    if (size.includes("terabytes")) {
        // Extract the number from the string
        let numberString = size.replace("terabytes", "");
        // Trim the whitespace from the result
        numberString = numberString.trim();
        // Convert the the string to a float
        let sizeValue = parseFloat(numberString);
        // Convert the float value in TB to MB
        sizeValue = sizeValue * 1000000;
        // Return the value in MB
        return sizeValue;

    }
    else if (size.includes("gigabytes")) {
        // Extract the number from the string
        let numberString = size.replace("gigabytes", "");
        // Trim the whitespace from the result
        numberString = numberString.trim();
        // Convert the the string to a float
        let sizeValue = parseFloat(numberString);
        // Convert the float value in GB to MB
        sizeValue = sizeValue * 1000;
        // Return the value in MB
        return sizeValue;

    }
    else if (size.includes("megabytes")) {
        // Extract the number from the string
        let numberString = size.replace("megebytes", "");
        // Trim the whitespace from the result
        numberString = numberString.trim();
        // Convert the the string to a float
        let sizeValue = parseFloat(numberString);
        // Return the value in MB
        return sizeValue;
    }
    else if (size.includes("kilobytes")) {
        // Extract the number from the string
        let numberString = size.replace("kilobytes", "");
        // Trim the whitespace from the result
        numberString = numberString.trim();
        // Convert the the string to a float
        let sizeValue = parseFloat(numberString);
        // Convert the float value in KB to MB
        sizeValue = sizeValue / 1000;
        // Return the value in MB
        return sizeValue;
    }
    // else, size is in Bytes
    else {
        // Extract the number from the string
        let numberString = size.replace("bytes", "");
        // Trim the whitespace from the result
        numberString = numberString.trim();
        // Convert the the string to a float
        let sizeValue = parseFloat(numberString);
        // Convert the float value in B to MB
        sizeValue = sizeValue / 1000000;
        // Return the value in MB
        return sizeValue;
    }
}