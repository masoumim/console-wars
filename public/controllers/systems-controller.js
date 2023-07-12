// Gets systems from the table and adds them to array for sorting
function getTableData() {
    // Get the table contents
    const systemNames = document.querySelectorAll(".systemName");
    const systemReleaseYears = document.querySelectorAll(".systemReleaseYear");
    const systemDiscontinueYears = document.querySelectorAll(".systemDiscontinueYear");
    const systemLifespans = document.querySelectorAll(".systemLifespan");
    const systemGameTitles = document.querySelectorAll(".systemGameTitles");
    const systemGenerations = document.querySelectorAll(".systemGeneration");
    const systemUnitsSold = document.querySelectorAll(".systemUnitsSold");
    const systemTypes = document.querySelectorAll(".systemType");
    const systemSuccessors = document.querySelectorAll(".systemSuccessor");
    const systemPredecessors = document.querySelectorAll(".systemPredecessor");
    const systemComments = document.querySelectorAll(".systemComments");
    const systemTotalVotes = document.querySelectorAll(".systemTotalVotes");

    // Reassemble each system's property into a single object and store in array for sorting    
    const systemsArray = [];
    for (let i = 0; i < systemNames.length; i++) {
        const obj = {}
        obj.name = systemNames[i].textContent;
        obj.releaseYear = systemReleaseYears[i].textContent;
        obj.discontinueYear = systemDiscontinueYears[i].textContent;
        obj.lifespan = systemLifespans[i].textContent;
        obj.gameTitles = systemGameTitles[i].textContent;
        obj.generation = systemGenerations[i].textContent;
        obj.unitsSold = systemUnitsSold[i].textContent;
        obj.systemType = systemTypes[i].textContent;
        obj.successor = systemSuccessors[i].textContent;
        obj.predecessor = systemPredecessors[i].textContent;
        obj.comments = systemComments[i].textContent;
        obj.totalVotes = systemTotalVotes[i].textContent;
        systemsArray.push(obj);
    }

    // Clear the table contents
    document.getElementById("tableBody").textContent = "";

    // Return the array of systems
    return systemsArray;
}

// Build a table using sorted systems
function buildTable(systemsArray) {
    let htmlString = "";
    for (element in systemsArray) {
        htmlString += `<tr>\n
        <td class=\"systemName\">${systemsArray[element].name}</td>`
            + `<td class=\"systemReleaseYear\">${systemsArray[element].releaseYear}</td>`
            + `<td class=\"systemDiscontinueYear\">${systemsArray[element].discontinueYear}</td>`
            + `<td class=\"systemLifespan\">${systemsArray[element].lifespan}</td>`
            + `<td class=\"systemGameTitles\">${systemsArray[element].gameTitles}</td>`
            + `<td class=\"systemGeneration\">${systemsArray[element].generation}</td>`
            + `<td class=\"systemUnitsSold\">${systemsArray[element].unitsSold}</td>`
            + `<td class=\"systemType\">${systemsArray[element].systemType}</td>`
            + `<td class=\"systemSuccessor\">${systemsArray[element].successor}</td>`
            + `<td class=\"systemPredecessor\">${systemsArray[element].predecessor}</td>`
            + `<td class=\"systemComments\">${systemsArray[element].comments}</td>`
            + `<td class=\"systemTotalVotes\">${systemsArray[element].totalVotes}</td>`
    }
    htmlString += `\n</tr>\n`;
    document.getElementById("tableBody").innerHTML = htmlString;
}

function sortByReleaseYearAsc() {
    // Get the systems    
    const systems = getTableData();

    // Sort by Release Year (ascending)
    const sortedSystems = quicksort(systems);

    // Build the table
    buildTable(sortedSystems);
}

function sortByReleaseYearDes(){
    // Get the systems
    const systems = getTableData();

    // Sort by Release Year (descending)
    const sortedSystems = reverseBubbleSort(systems);

    // Build the table
    buildTable(sortedSystems);
}

/*
====================================================
                Sorting Algorithms
====================================================
*/


// QUICK SORT (ASCENDING ORDER)
function quicksort(array, leftBound = 0, rightBound = array.length - 1) {

    if (leftBound < rightBound) {
        // Set the pivot index
        const pivotIndex = partition(array, leftBound, rightBound);

        // Left Partition
        quicksort(array, leftBound, pivotIndex - 1);

        // Right Partition
        quicksort(array, pivotIndex, rightBound);
    }
    return array;
}

// QUICK SORT - PARTITION
function partition(array, leftIndex, rightIndex) {
    // Set the pivot value
    const pivot = array[Math.floor((rightIndex + leftIndex) / 2)].releaseYear;

    // Loop while leftIndex <= rightIndex
    // (While you haven't looked though the whole array)
    while (leftIndex <= rightIndex) {

        // Keep incrementing leftIndex while array at leftIndex < pivot value
        // (Move leftIndex UP until you find something greater than PIVOT)
        while (array[leftIndex].releaseYear < pivot) {
            leftIndex++;
        }

        // Keep decrementing rightIndex while array at rightIndex is > pivot value
        // (Move rightIndex DOWN until you find something less than PIVOT)
        while (array[rightIndex].releaseYear > pivot) {
            rightIndex--;
        }

        // Perform a swap when leftIndex <= rightIndex
        if (leftIndex <= rightIndex) {
            swap(array, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
    }
    // When leftIndex isn't <= rightIndex, return leftIndex
    return leftIndex;
}

// REVERSE BUBBLE SORT (DESCENDING ORDER)
function reverseBubbleSort(array){
    // Variable to keep track of the number of swaps that are performed
    let swapCount = 0
    // Boolean flag used to control if swapping should continue or not
    let swapping = true;
    
    // While swapping is true
    while (swapping) {
        // Set swapping to false before entering the inner loop
        swapping = false;
        
        // Iterate though each element in array up to the SECOND LAST element
        for (let i = 0; i < array.length - 1; i++) {
            
            // Check if current element is less than the next
            if (array[i].releaseYear < array[i + 1].releaseYear) {                
                // If so, perform swap of elements
                swap(array, i, i + 1);
                // Increment the swap counter
                swapCount++;
                // Set the swapping flag to true
                swapping = true;
            }
        }
    }
    // Return the sorted array
    return array;
};

// Generic swap function
function swap(arr, indexOne, indexTwo) {
    const temp = arr[indexTwo];
    arr[indexTwo] = arr[indexOne];
    arr[indexOne] = temp;
}
