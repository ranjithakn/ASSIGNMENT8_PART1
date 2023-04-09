//STEP 1
//Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
const movies = ["TIATNIC", "JURASIC PARK", "THE AGENT", "JOKER", "MAD MAX"];
document.writeln("WELCOME TO ARRAY EXAMPLES")

document.writeln("Second Movie: "+ movies[1])
document.write("<br>");
/*for (let i = 0; i < movies.length; i++) {
	document.writeln(movies[i])
	document.write("<br>");
}*/

//STEP 2
/*Declare an array called movies using the function constructor method.Add the length of 5 into the constructor.Then, assign one of your
favorite movies to each index in the array until you have 5 total movies in your array.Then, use the console to display the first movie in
your array.*/
const movies1 = new Array(5)
movies[0] = "The Agent";
movies[1] = "Jurasic Park";
movies[2] = "Titanic";
movies[3] = "Joker";
movies[4] = "Mad max";
document.writeln("Movie using function constructor: " + movies[0]);
document.write("<br>");

//STEP 3
/*Copy your code from step 2. Add a new movie into the 3rd position within your array.Then, use the console to display the length of the array.
You should now have 6 total movies stored in the array.*/
const movies2 = new Array(5)
movies[0] = "The Agent";
movies[1] = "Jurasic Park";
movies[2] = "Titanic";
movies[3] = "Joker";
movies[4] = "Mad max";
document.write("Length of the array:" + movies2.length)
movies2[movies2.length] = "Fast and Furious";
document.write("<br>");
document.write("Length of the array after adding a movie is :" + movies2.length)

//STEP 4
/*Declare an array called movies using literal notation.Then, assign one of your favorite movies to each index in the array until you have 5
total movies in your array.Now, use the delete operator to remove the first movie in the array.Use the console to display the contents of
the array.*/
const movies3 = ["TIATNIC", "JURASIC PARK", "THE AGENT", "JOKER", "MAD MAX"];
delete movies3[0];
document.write("Movies after deleting first movie are:");
document.write("<br>");
for (let i = 0; i < movies3.length; i++) {
	document.writeln(movies3[i])
	document.write("<br>");
}

//STEP 5
/*Declare an array called movies using literal notation.Then, assign one of your favorite movies to each index in the array until you have 7
total movies in your array.Now, use a for/in loop to iterate through the array and display each movie within the console window.*/
const movies4 = ["TIATNIC", "JURASIC PARK", "THE AGENT", "JOKER", "MAD MAX","FAST AND FURIOUS","AVENGERS"];
document.write("Movies ARE:");
document.write("<br>");
for (let i = 0; i < movies4.length; i++) {
	document.writeln(i+1 +"="+movies4[i])
	document.write("<br>");
}

//STEP 6
//Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
const movies5 = ["TIATNIC", "JURASIC PARK", "THE AGENT", "JOKER", "MAD MAX", "FAST AND FURIOUS", "AVENGERS"];
document.write("Movies ARE:");
document.write("<br>");
for (let i = 0; i < movies5.length; i++) {
	document.writeln(i + 1 + "=" + movies5[i])
	document.write("<br>");
}

//STEP 7
/*Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window 
 in a sorted view.*/
const movies6 = ["TIATNIC", "JURASIC PARK", "THE AGENT", "JOKER", "MAD MAX", "FAST AND FURIOUS", "AVENGERS"];
document.write("Movies after sorting are:");
document.write("<br>");
movies6.sort();
for (let i = 0; i < movies6.length; i++) {
	document.writeln(i + 1 + "=" + movies6[i])
	document.write("<br>");
}
//STEP 8
/*Copy the code from step 5. Under the existing array, create a new array called leastFavMovies.Populate the array with the 3 movies that
you regret watching.Display both arrays within the console window so that it’s formatted to look like this(note the spacing, you must 
	include that too):*/
const movies7 = ["TIATNIC", "JURASIC PARK", "THE AGENT", "AVENGERS"];
const leastFavMovie = ["JOKER", "MAD MAX", "FAST AND FURIOUS"]

document.write("<br>");
document.write("<br>");
document.write("Movies I like  are:");
document.write("<br>");
for (let i = 0; i < movies7.length; i++) {
	document.writeln(i + 1 + "=" + movies7[i])
	document.write("<br>");
}
document.write("<br>");
document.write("<br>");
document.write("Movies I don't like  are:");
document.write("<br>");
for (let i = 0; i < leastFavMovie.length; i++) {
	document.writeln(i + 1 + "=" + leastFavMovie[i])
	document.write("<br>");
}

//STEP 9
/*
Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies.
Use the console window to display the list in reverse sorted*/
const arr1 = ["TIATNIC", "JURASIC PARK", "THE AGENT", "AVENGERS"];
const arr2 = ["JOKER", "MAD MAX", "FAST AND FURIOUS"]
const movies_cat = arr1.concat(arr2);
movies_cat.reverse();
document.write("<br>");
document.write("<br>");
document.write("Movies after concatenation  are:");
document.write("<br>");
for (let i = 0; i < movies_cat.length; i++) {
	document.writeln(i + 1 + "=" + movies_cat[i])
	document.write("<br>");
}


//STEP 10
//Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
function array() {
	const arr3 = ["TIATNIC", "JURASIC PARK", "THE AGENT", "AVENGERS"];
	const arr4 = ["JOKER", "MAD MAX", "FAST AND FURIOUS"]
	const movies_cat1 = arr3.concat(arr4);
	movies_cat1.reverse();
	document.write(movies_cat1[5])
	//return (movies_cat1[movie_cat1.length]);
}
//document.write("Movie after return from the function");
array();
let fun1;
fun1 = array();
document.write("<br>");
document.write("Movie after return from the function" + fun1);
//STEP 11

//STEP 12

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17