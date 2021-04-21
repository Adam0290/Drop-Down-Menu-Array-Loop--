// Array Loop - Drop Down Menu //


// Array = list of items //

let arr = ["UK", "US", "UAE", "China", "Japan", "Brunei"]; // Adds more options to the drop down menu using a Array. //

for(let i = 0; i < arr.length; i++) { //array length is set at six...at the end of the loop it will increment. //
let o = document.createElement("option");
o.value = arr[i];
o.innerHTML = arr[i];
document.getElementById("countries").appendChild(o); // grabbing the countries from the html select syntax  >>>>> Adding children to the Dom Tree //
}

//by using appendChild we are adding more options //
 


/*

Initialization

Condition >>>>> Executes the code >>>>>> Updates

*/

