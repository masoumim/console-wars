/*
====================================================
                Button Listeners
====================================================
*/
document.getElementById("sort-by-rank-asc").addEventListener("click", sortByRankAsc);
document.getElementById("sort-by-rank-des").addEventListener("click", sortByRankDes);
document.getElementById("sort-by-release-year-asc").addEventListener("click", sortByReleaseYearAsc);
document.getElementById("sort-by-release-year-des").addEventListener("click", sortByReleaseYearDes);
document.getElementById("sort-by-discontinue-year-asc").addEventListener("click", sortByDiscontinuedYearAsc);
document.getElementById("sort-by-discontinue-year-des").addEventListener("click", sortByDiscontinuedYearDes);
document.getElementById("sort-by-lifespan-asc").addEventListener("click", sortByLifespanAsc);
document.getElementById("sort-by-lifespan-des").addEventListener("click", sortByLifespanDes);
document.getElementById("sort-by-units-sold-asc").addEventListener("click", sortByUnitsSoldAsc);
document.getElementById("sort-by-units-sold-des").addEventListener("click", sortByUnitsSoldDes);
document.getElementById("sort-by-votes-asc").addEventListener("click", sortByTotalVotesAsc);
document.getElementById("sort-by-votes-des").addEventListener("click", sortByTotalVotesDes);


/*
====================================================
            Get Table Data & Build Table
====================================================
*/
// Gets systems from the table and adds them to array for sorting
function getTableData() {
    // Get the table contents
    const systemIDs = document.querySelectorAll(".systemID");
    const systemRank = document.querySelectorAll(".systemRank");
    const systemNames = document.querySelectorAll(".systemName");
    const systemReleaseYears = document.querySelectorAll(".systemReleaseYear");
    const systemDiscontinueYears = document.querySelectorAll(".systemDiscontinueYear");
    const systemLifespans = document.querySelectorAll(".systemLifespan");      
    const systemUnitsSold = document.querySelectorAll(".systemUnitsSold");        
    const systemTotalVotes = document.querySelectorAll(".systemTotalVotes");

    // Reassemble each system's property into a single object and store in array for sorting    
    const systemsArray = [];
    for (let i = 0; i < systemNames.length; i++) {
        // System object to be populated with system data
        const obj = {}

        // System ID
        obj.id = systemIDs[i].textContent;

        // System Rank
        obj.rank = systemRank[i].textContent;
        
        // System Name
        obj.name = systemNames[i].textContent;
        
        // Release Year
        obj.releaseYear = parseInt(systemReleaseYears[i].textContent);
        
        // Discontinue Year
        if (parseInt(systemDiscontinueYears[i].textContent) > 0) { obj.discontinueYear = parseInt(systemDiscontinueYears[i].textContent) } else { obj.discontinueYear = ""; }
        
        // Lifespan
        if (obj.discontinueYear > 0) { obj.lifespan = parseInt(systemLifespans[i].textContent); } else { obj.lifespan = ""; }
                                        
        // Units Sold
        if (parseInt(systemUnitsSold[i].textContent) > 0) { obj.unitsSold = parseInt(systemUnitsSold[i].textContent) } else { obj.unitsSold = ""; }
                                            
        // Total Votes
        obj.totalVotes = parseInt(systemTotalVotes[i].textContent);
        
        // Add System object to array
        systemsArray.push(obj);
    }
    
    // Return the array of systems
    return systemsArray;
}

// Build a table using sorted systems
function buildTable(systemsArray) {
    let htmlString = "";
    for (element in systemsArray) {
        htmlString += `<tr>\n
        <td class=\"systemRank\">${systemsArray[element].rank}</td>`
            + `<td class=\"systemName\"><a href=\"/systems/${systemsArray[element].id}\">${systemsArray[element].name}</a></td>`
            + `<td class=\"systemReleaseYear\">${systemsArray[element].releaseYear}</td>`
            + `<td class=\"systemDiscontinueYear\">${systemsArray[element].discontinueYear}</td>`
            + `<td class=\"systemLifespan\">${systemsArray[element].lifespan}</td>`                       
            + `<td class=\"systemUnitsSold\">${systemsArray[element].unitsSold}</td>`            
            + `<td class=\"systemTotalVotes\">${systemsArray[element].totalVotes}</td>`
    }
    htmlString += `\n</tr>\n`;
    document.getElementById("tableBody").innerHTML = htmlString;
}

// Get the table data from systems.ejs and store in array
const systems = getTableData();

// When Systems page is loaded, automatically sort by Rank Ascending
sortByRankAsc();

/*
====================================================
                Sorting Methods
====================================================
*/

// Sorts data by Release Year in Ascending order
function sortByReleaseYearAsc() {    
    // Sort by Release Year (ascending)
    const sortedSystems = quicksort({ array: systems, sortingField: "releaseYear" });

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Release Year in Descending order
function sortByReleaseYearDes() {
    // Sort by Release Year (descending)
    const sortedSystems = reverseBubbleSort(systems, "releaseYear");

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Discontinued Year in Ascending Order
function sortByDiscontinuedYearAsc() {    
    // Sort by Discontinued Year (ascending)
    const sortedSystems = quicksort({ array: systems, sortingField: "discontinueYear" });

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Discontinued Year in Descending Order
function sortByDiscontinuedYearDes() {        
    // Sort by Discontinued Year (descending)
    const sortedSystems = reverseBubbleSort(systems, "discontinueYear");

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Lifespan in Ascending order
function sortByLifespanAsc() {    
    // Sort by Lifespan (ascending)
    const sortedSystems = quicksort({ array: systems, sortingField: "lifespan" });

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Lifespan in Descending Order
function sortByLifespanDes() {    
    // Sort by Lifespan (descending)
    const sortedSystems = reverseBubbleSort(systems, "lifespan");

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Units Sold in Ascending order
function sortByUnitsSoldAsc() {        
    // Sort by Units Sold (ascending)
    const sortedSystems = quicksort({ array: systems, sortingField: "unitsSold" });

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Units Sold in Descending Order
function sortByUnitsSoldDes() {        
    // Sort by Units Sold (descending)
    const sortedSystems = reverseBubbleSort(systems, "unitsSold");

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Votes in Ascending order
function sortByTotalVotesAsc() {            
    // Sort by Total Votes (ascending)
    const sortedSystems = quicksort({ array: systems, sortingField: "totalVotes" });

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Votes in Descending Order
function sortByTotalVotesDes() {        
    // Sort by Total Votes (descending)
    const sortedSystems = reverseBubbleSort(systems, "totalVotes");

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Rank in Ascending order
function sortByRankAsc() {        
    // Sort by Rank (ascending)
    const sortedSystems = quicksort({ array: systems, sortingField: "rank" });

    // Build the table
    buildTable(sortedSystems);
}

// Sorts data by Rank in Descending Order
function sortByRankDes() {        
    // Sort by Rank (descending)
    const sortedSystems = reverseBubbleSort(systems, "rank");

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

    // sorting by: unitsSold
    if (sortingField === "unitsSold") {
        pivot = array[Math.floor((rightIndex + leftIndex) / 2)].unitsSold;
    }

    // sorting by: totalVotes
    if (sortingField === "totalVotes") {
        pivot = array[Math.floor((rightIndex + leftIndex) / 2)].totalVotes;
    }

    // sorting by: rank
    if (sortingField === "rank") {
        pivot = array[Math.floor((rightIndex + leftIndex) / 2)].rank;
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

        // sorting by: unitsSold
        if (sortingField === "unitsSold") {
            while (array[leftIndex].unitsSold < pivot) {
                leftIndex++;
            }
        }

        // sorting by: totalVotes
        if (sortingField === "totalVotes") {
            while (array[leftIndex].totalVotes < pivot) {
                leftIndex++;
            }
        }
             
        // sorting by: rank
        if (sortingField === "rank") {
            while (array[leftIndex].rank < pivot) {
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

        // sorting by: unitsSold
        if (sortingField === "unitsSold") {
            while (array[rightIndex].unitsSold > pivot) {
                rightIndex--;
            }
        }

        // sorting by: totalVotes
        if (sortingField === "totalVotes") {
            while (array[rightIndex].totalVotes > pivot) {
                rightIndex--;
            }
        }

        // sorting by: rank
        if (sortingField === "rank") {
            while (array[rightIndex].rank > pivot) {
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
            // sorting by: rank
            if (sortingField === "rank") {
                if (array[i].rank < array[i + 1].rank) {
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
