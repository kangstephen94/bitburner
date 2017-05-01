//Netburner String helper functions

//Searches for every occurence of searchStr within str and returns an array of the indices of
//all these occurences
function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
}

//Replaces the character at an index with a new character
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

//Converts a date representing time in milliseconds to a string with the format
//      H hours M minutes and S seconds
// e.g. 10000 -> "0 hours 0 minutes and 10 seconds"
//      120000 -> "0 0 hours 2 minutes and 0 seconds"
function convertTimeMsToTimeElapsedString(time) {
    //Convert ms to seconds, since we only have second-level precision
    time = Math.floor(time / 1000);
    
    var hours = Math.floor(time / 3600);
    time %= 3600;
    
    var minutes = Math.floor(time / 60);
    time %= 60;
    
    var seconds = time;
    
    return hours + " hours " + minutes + " minutes " + seconds + " seconds";
}

//Finds the longest common starting substring in a set of strings
function longestCommonStart(strings) {
    if (!containsAllStrings(strings)) {return;}
    
    var A = strings.concat().sort(), 
    a1= A[0], a2= A[A.length-1], L= a1.length, i= 0;
    while(i<L && a1.charAt(i)=== a2.charAt(i)) i++;
    return a1.substring(0, i);
}


//Returns whether a variable is a string
function isString(str) {
    return (typeof str === 'string' || str instanceof String);
}

//Returns whether an array contains entirely of string objects
function containsAllStrings(arr) {
    return arr.every(isString);
}