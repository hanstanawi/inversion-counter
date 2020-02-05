var totalInv=0; //Declare a variable to count the total Inversion 

//Function to merge and count the number of inversions
function mergeAndCount(left_arr, right_arr){ //Take two arguments which are left array and right array from the separated array in the Sort function
	let result=[]; //A new array which acts as a temporary array to store the sorted numbers. Time=1
	let i= 0; //A variable which acts as an index for the left array. Time=1
	let j= 0; //A variable which acts as an index for the right array. Time=1
	let count=0; //A variable to count number inversions in each arrays. Time=1
	
	//A while loop to compare, merge, and count every elements in each arrays. Time=n+1
	while(i<left_arr.length && j<right_arr.length){
		//An if statement to determine whether the element in th left array is greater than the right array. 
		//This if statement is used to check if there is an inversion. 
		if(left_arr[i]>right_arr[j]){ 
			result.push(right_arr[j]); //Insert every elements of the right array into the temporary array if it is lower than the element of the left array in order to sort the elements.
			j++; //Incrementing the index of the right array
			count = count+(left_arr.length-i); //The important part of inversion. If there is an element in the left array is greater than an element in the right array. 
												//It means all of the elements in the right side of the element until the end of left array including the number itself is counted as inversions, 
												//which means it is counted until the middle part of the original array.		 
		}else { //Otherwise, insert the elements in the left array into the temporary array
			result.push(left_arr[i]);
			i++;
		}
	}

	//A while loop to put all the remaining items in the left array into the temporary array. Time=n+1
	while(i<left_arr.length){ 
			result.push(left_arr[i]);
			i++;
	}

	//A while loop to put all the remaining items in the left array into the temporary array. Time=n+1
	while(j<right_arr.length){ 
		result.push(right_arr[j]);
		j++;
	}
	
	totalInv= totalInv+count; //Add each count of Inversions in both arrays into the Total Inversion variable. Time=1
	return result; //returning the sorted array. Time=1
} //Time= O(n)


//A function to separate the arrays and calling the mergeAndCount function. Takes one argument of the input array.
function sort(arr){
	if(arr.length===1) //Time=1
		return arr; //Returning the array if the array element is one

	let mid= Math.floor(arr.length/2); //Finding the middle index of the array. Time=1
	//Separate the array into two halves of left array and right array
	let left=sort(arr.slice(0,mid)); //Divide left array from index 0 to midpoint. Time=T(n/2)
	let right=sort(arr.slice(mid)); //Divide right array from midpoint+1 to the last index. Time=T(n/2)
	return mergeAndCount(left, right); //Returning the sorted list of the original array and the total count of inversions. Time=n
} //Time=2T(n/2)+n

//A function to change the input text file into an array
function parse(input){
	var result =  input.split('\n').map(function(item) {
	   return parseInt(item, 10);
   });
   return result;
}

