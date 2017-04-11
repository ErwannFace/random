
/*
	Opens with ajax call a json file "filename". 
	Calls the callback function with result

*/
function loadJSON(filename, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'apprenants.json', true);
    // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function() {
        if (xobj.readyState === 4) {
            // Required use of an anonymous callback 
            // as .open() will NOT return a value but simply returns undefined in asynchronous mode
            console.log("callback : ");
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);
}

