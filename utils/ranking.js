// Return an array of all systems sorted by rank
const rankAllSystems = async (systems) => {
    // Sort the systems according to each element's numComments property
    const sortedSystems = systems.sort(function (a, b) { return b.numVotes - a.numVotes });

    // Attach a rank number to each object element in the array
    for (let i = 0; i < sortedSystems.length; i++) {
        if (sortedSystems[i].numVotes > 0) {
            sortedSystems[i].rank = i + 1;
        }
        else {
            sortedSystems[i].rank = 99;
        }
    }

    // Eliminate ties such that if two elements have the same num of votes
    // but different rankings, they will both be ranked as the lower number of the two rankings
    for(let i = 0; i < sortedSystems.length; i++){
        for(let j = 0; j < sortedSystems.length; j++){
            if(sortedSystems[i].numVotes === sortedSystems[j].numVotes){
                // Set both systems to have the higher rank (lower rank number)
                const higherRank = Math.min(sortedSystems[i].rank, sortedSystems[j].rank);
                sortedSystems[i].rank = higherRank;
                sortedSystems[j].rank = higherRank;
            }
        }
    }
    return sortedSystems;
}

// Return an individual systems rank
const systemRank = async (systems, systemID) => {    
    const allSystemsRank = await rankAllSystems(systems);
    
    for(element in allSystemsRank){                        
        if(allSystemsRank[element].systemID === parseInt(systemID)){                        
            return allSystemsRank[element].rank;
        }   
    }
}

module.exports = { rankAllSystems, systemRank }