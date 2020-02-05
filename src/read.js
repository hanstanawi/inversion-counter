//Declaring the empty arrays
let textInput=[];
let final=[];
let results=[];
let array_size=0;

//JavaScript event which apply all the functions and programs when the button is selected (JavaScript DOM)
document.querySelector("#file-input").addEventListener('change', function() {
	//Declaring the file that the user has chosen
	var all_files = this.files;
	if(all_files.length == 0) {
		alert('Error : No file selected');
		return;
	}

	// First file that user has chosen
	var file = all_files[0];
	var reader = new FileReader();

	// Start file reading
	reader.addEventListener('loadstart', function() {
	    document.querySelector("#file-input-label").style.display = 'none'; 
	});

	//File reading function
	reader.addEventListener('load', function(e) {
	    var text = e.target.result;

	    //Displaying the content from the file on the webpage html file
		document.querySelector("#contents").innerHTML = text;
		textInput=document.querySelector("#contents").innerHTML;
        
		final = parse(textInput); // Using the parsingArray function to change each line in the text into an array
		array_size=final[0]; // Get the length of an array from the text file
		results=final.slice(1); // Assigning the remaining items of the array into a variable to be processed further
		sort(results);// Assigning the "results" array as an argument into the "sort" function

		//Printing the inversion count results on the browser console
		console.log("The number of inversions in any permutation on these "+ results.length + " elements are "+totalInv);
		//Printing the inversion count results on the webpage html file
		document.querySelector("#InversionDisplay").textContent=totalInv;

		//Display style
	    document.querySelector("#contents").style.display = 'block';
	    document.querySelector("#file-input-label").style.display = 'block'; 
	});

	//Read the data as text file
	reader.readAsText(file);
	
});