// Gets systems from the table and adds them to array for sorting
function getTableData() {
    // Get the table contents
    const systemIDs = document.querySelectorAll(".systemID");
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
        // System object to be populated with system data
        const obj = {}

        // System ID
        obj.id = systemIDs[i].textContent;

        // System Name
        obj.name = systemNames[i].textContent;
        
        // Release Year
        obj.releaseYear = parseInt(systemReleaseYears[i].textContent);
        
        // Discontinue Year
        if (parseInt(systemDiscontinueYears[i].textContent) > 0) { obj.discontinueYear = parseInt(systemDiscontinueYears[i].textContent) } else { obj.discontinueYear = ""; }
        
        // Lifespan
        if (obj.discontinueYear > 0) { obj.lifespan = parseInt(systemLifespans[i].textContent); } else { obj.lifespan = ""; }
        
        // Game Titles
        obj.gameTitles = parseInt(systemGameTitles[i].textContent);
        
        // Generation
        obj.generation = parseInt(systemGenerations[i].textContent);
        
        // Units Sold
        if (parseInt(systemUnitsSold[i].textContent) > 0) { obj.unitsSold = parseInt(systemUnitsSold[i].textContent) } else { obj.unitsSold = ""; }
        
        // System Type
        obj.systemType = systemTypes[i].textContent;
        
        // Successor
        obj.successor = systemSuccessors[i].textContent;
        
        // Predecessor
        obj.predecessor = systemPredecessors[i].textContent;
        
        // Comments
        obj.comments = parseInt(systemComments[i].textContent);
        
        // Total Votes
        obj.totalVotes = parseInt(systemTotalVotes[i].textContent);
        
        // Add System object to array
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
        <td class=\"systemName\"><a href=\"/systems/${systemsArray[element].id}\">${systemsArray[element].name}</a></td>`
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

/*
====================================================
                Sorting Methods
====================================================
*/

// Sorts data by Release Year in Ascending order
function sortByReleaseYearAsc() {
    // Get the systems    
    const systems = getTableData();

    // Sort by Release Year (ascending)
    const sortedSystems = quicksort({ array: systems, sortingField: "releaseYear" });

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Release Year in Descending order
function sortByReleaseYearDes() {
    // Get the systems
    const systems = getTableData();

    // Sort by Release Year (descending)
    const sortedSystems = reverseBubbleSort(systems, "releaseYear");

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Discontinued Year in Ascending Order
function sortByDiscontinuedYearAsc() {
    // Get the systems
    const systems = getTableData();

    // Sort by Discontinued Year (ascending)
    const sortedSystems = quicksort({ array: systems, sortingField: "discontinueYear" });

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Discontinued Year in Descending Order
function sortByDiscontinuedYearDes() {
    // Get the systems
    const systems = getTableData();

    // Sort by Discontinued Year (descending)
    const sortedSystems = reverseBubbleSort(systems, "discontinueYear");

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Lifespan in Ascending order
function sortByLifespanAsc() {
    // Get the systems    
    const systems = getTableData();

    // Sort by Lifespan (ascending)
    const sortedSystems = quicksort({ array: systems, sortingField: "lifespan" });

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Lifespan in Descending Order
function sortByLifespanDes() {
    // Get the systems
    const systems = getTableData();

    // Sort by Lifespan (descending)
    const sortedSystems = reverseBubbleSort(systems, "lifespan");

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Game Titles in Ascending order
function sortByGameTitlesAsc() {
    // Get the systems    
    const systems = getTableData();

    // Sort by Game Titles (ascending)
    const sortedSystems = quicksort({ array: systems, sortingField: "gameTitles" });

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Game Titles in Descending Order
function sortByGameTitlesDes() {
    // Get the systems
    const systems = getTableData();

    // Sort by Game Titles (descending)
    const sortedSystems = reverseBubbleSort(systems, "gameTitles");

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Generation in Ascending order
function sortByGenerationAsc() {
    // Get the systems    
    const systems = getTableData();

    // Sort by Generation (ascending)
    const sortedSystems = quicksort({ array: systems, sortingField: "generation" });

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Generation in Descending Order
function sortByGenerationDes() {
    // Get the systems
    const systems = getTableData();

    // Sort by Generation (descending)
    const sortedSystems = reverseBubbleSort(systems, "generation");

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Units Sold in Ascending order
function sortByUnitsSoldAsc() {
    // Get the systems    
    const systems = getTableData();

    // Sort by Units Sold (ascending)
    const sortedSystems = quicksort({ array: systems, sortingField: "unitsSold" });

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Units Sold in Descending Order
function sortByUnitsSoldDes() {
    // Get the systems
    const systems = getTableData();

    // Sort by Units Sold (descending)
    const sortedSystems = reverseBubbleSort(systems, "unitsSold");

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Comments in Ascending order
function sortByCommentsAsc() {
    // Get the systems    
    const systems = getTableData();

    // Sort by Comments (ascending)
    const sortedSystems = quicksort({ array: systems, sortingField: "comments" });

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Comments in Descending Order
function sortByCommentsDes() {
    // Get the systems
    const systems = getTableData();

    // Sort by Comments (descending)
    const sortedSystems = reverseBubbleSort(systems, "comments");

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Votes in Ascending order
function sortByTotalVotesAsc() {
    // Get the systems    
    const systems = getTableData();

    // Sort by Total Votes (ascending)
    const sortedSystems = quicksort({ array: systems, sortingField: "totalVotes" });

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Votes in Descending Order
function sortByTotalVotesDes() {
    // Get the systems
    const systems = getTableData();

    // Sort by Total Votes (descending)
    const sortedSystems = reverseBubbleSort(systems, "totalVotes");

    // Build the table
    buildTable(sortedSystems);
}

/*
====================================================
                Sorting Algorithms
====================================================
*/


// QUICK SORT (ASCENDING ORDER) *using named arguments
function quicksort({ array, leftBound = 0, rightBound = array.length - 1, sortingField }) {
    if (leftBound < rightBound) {
        // Set the pivot index
        const pivotIndex = partition(array, leftBound, rightBound, sortingField);

        // Left Partition
        quicksort({ array: array, leftBound: leftBound, rightBound: pivotIndex - 1, sortingField: sortingField });

        // Right Partition
        quicksort({ array: array, leftBound: pivotIndex, rightBound: rightBound, sortingField: sortingField });
    }
    return array;
}

// QUICK SORT - PARTITION
function partition(array, leftIndex, rightIndex, sortingField) {
    // Set the pivot value
    let pivot = 0;

    // sorting by: releaseYear
    if (sortingField === "releaseYear") {
        pivot = array[Math.floor((rightIndex + leftIndex) / 2)].releaseYear;
    }

    // sorting by: discontinueYear
    if (sortingField === "discontinueYear") {
        pivot = array[Math.floor((rightIndex + leftIndex) / 2)].discontinueYear;
    }

    // sorting by: lifespan
    if (sortingField === "lifespan") {
        pivot = array[Math.floor((rightIndex + leftIndex) / 2)].lifespan;
    }

    // sorting by: gameTitles
    if (sortingField === "gameTitles") {
        pivot = array[Math.floor((rightIndex + leftIndex) / 2)].gameTitles;
    }

    // sorting by: generation
    if (sortingField === "generation") {
        pivot = array[Math.floor((rightIndex + leftIndex) / 2)].generation;
    }

    // sorting by: unitsSold
    if (sortingField === "unitsSold") {
        pivot = array[Math.floor((rightIndex + leftIndex) / 2)].unitsSold;
    }

    // sorting by: comments
    if (sortingField === "comments") {
        pivot = array[Math.floor((rightIndex + leftIndex) / 2)].comments;
    }

    // sorting by: totalVotes
    if (sortingField === "totalVotes") {
        pivot = array[Math.floor((rightIndex + leftIndex) / 2)].totalVotes;
    }

    // Loop while leftIndex <= rightIndex
    // (While you haven't looked though the whole array)
    while (leftIndex <= rightIndex) {

        // Keep incrementing leftIndex while array at leftIndex < pivot value
        // (Move leftIndex UP until you find something greater than PIVOT)

        // sorting by: releaseYear
        if (sortingField === "releaseYear") {
            while (array[leftIndex].releaseYear < pivot) {
                leftIndex++;
            }
        }

        // sorting by: discontinueYear
        if (sortingField === "discontinueYear") {
            while (array[leftIndex].discontinueYear < pivot) {
                leftIndex++;
            }
        }

        // sorting by: lifespan
        if (sortingField === "lifespan") {
            while (array[leftIndex].lifespan < pivot) {
                leftIndex++;
            }
        }

        // sorting by: gameTitles
        if (sortingField === "gameTitles") {
            while (array[leftIndex].gameTitles < pivot) {
                leftIndex++;
            }
        }

        // sorting by: generation
        if (sortingField === "generation") {
            while (array[leftIndex].generation < pivot) {
                leftIndex++;
            }
        }

        // sorting by: unitsSold
        if (sortingField === "unitsSold") {
            while (array[leftIndex].unitsSold < pivot) {
                leftIndex++;
            }
        }

        // sorting by: comments
        if (sortingField === "comments") {
            while (array[leftIndex].comments < pivot) {
                leftIndex++;
            }
        }

        // sorting by: totalVotes
        if (sortingField === "totalVotes") {
            while (array[leftIndex].totalVotes < pivot) {
                leftIndex++;
            }
        }

        // Keep decrementing rightIndex while array at rightIndex is > pivot value
        // (Move rightIndex DOWN until you find something less than PIVOT)

        // sorting by: releaseYear
        if (sortingField === "releaseYear") {
            while (array[rightIndex].releaseYear > pivot) {
                rightIndex--;
            }
        }

        // sorting by: discontinueYear
        if (sortingField === "discontinueYear") {
            while (array[rightIndex].discontinueYear > pivot) {
                rightIndex--;
            }
        }

        // sorting by: lifespan
        if (sortingField === "lifespan") {
            while (array[rightIndex].lifespan > pivot) {
                rightIndex--;
            }
        }

        // sorting by: gameTitles
        if (sortingField === "gameTitles") {
            while (array[rightIndex].gameTitles > pivot) {
                rightIndex--;
            }
        }

        // sorting by: generation
        if (sortingField === "generation") {
            while (array[rightIndex].generation > pivot) {
                rightIndex--;
            }
        }

        // sorting by: unitsSold
        if (sortingField === "unitsSold") {
            while (array[rightIndex].unitsSold > pivot) {
                rightIndex--;
            }
        }

        // sorting by: comments
        if (sortingField === "comments") {
            while (array[rightIndex].comments > pivot) {
                rightIndex--;
            }
        }

        // sorting by: totalVotes
        if (sortingField === "totalVotes") {
            while (array[rightIndex].totalVotes > pivot) {
                rightIndex--;
            }
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
function reverseBubbleSort(array, sortingField) {
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

            // sorting by: releaseYear
            if (sortingField === "releaseYear") {
                if (array[i].releaseYear < array[i + 1].releaseYear) {
                    // If so, perform swap of elements
                    swap(array, i, i + 1);
                    // Increment the swap counter
                    swapCount++;
                    // Set the swapping flag to true
                    swapping = true;
                }
            }
            // sorting by: discontinueYear
            if (sortingField === "discontinueYear") {
                if (array[i].discontinueYear < array[i + 1].discontinueYear) {
                    // If so, perform swap of elements
                    swap(array, i, i + 1);
                    // Increment the swap counter
                    swapCount++;
                    // Set the swapping flag to true
                    swapping = true;
                }
            }
            // sorting by: lifespan
            if (sortingField === "lifespan") {
                if (array[i].lifespan < array[i + 1].lifespan) {
                    // If so, perform swap of elements
                    swap(array, i, i + 1);
                    // Increment the swap counter
                    swapCount++;
                    // Set the swapping flag to true
                    swapping = true;
                }
            }
            // sorting by: gameTitles
            if (sortingField === "gameTitles") {
                if (array[i].gameTitles < array[i + 1].gameTitles) {
                    // If so, perform swap of elements
                    swap(array, i, i + 1);
                    // Increment the swap counter
                    swapCount++;
                    // Set the swapping flag to true
                    swapping = true;
                }
            }
            // sorting by: generation
            if (sortingField === "generation") {
                if (array[i].generation < array[i + 1].generation) {
                    // If so, perform swap of elements
                    swap(array, i, i + 1);
                    // Increment the swap counter
                    swapCount++;
                    // Set the swapping flag to true
                    swapping = true;
                }
            }
            // sorting by: unitsSold
            if (sortingField === "unitsSold") {
                if (array[i].unitsSold < array[i + 1].unitsSold) {
                    // If so, perform swap of elements
                    swap(array, i, i + 1);
                    // Increment the swap counter
                    swapCount++;
                    // Set the swapping flag to true
                    swapping = true;
                }
            }
            // sorting by: comments
            if (sortingField === "comments") {
                if (array[i].comments < array[i + 1].comments) {
                    // If so, perform swap of elements
                    swap(array, i, i + 1);
                    // Increment the swap counter
                    swapCount++;
                    // Set the swapping flag to true
                    swapping = true;
                }
            }
            // sorting by: totalVotes
            if (sortingField === "totalVotes") {
                if (array[i].totalVotes < array[i + 1].totalVotes) {
                    // If so, perform swap of elements
                    swap(array, i, i + 1);
                    // Increment the swap counter
                    swapCount++;
                    // Set the swapping flag to true
                    swapping = true;
                }
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
