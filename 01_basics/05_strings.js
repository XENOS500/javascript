let name ="Ayush Pareek "
let repocount=41

//using string interpolation -> process of embedding variables in strings
// console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String(" Free Fire  ")

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toLowerCase()); //but the org doesn't change as stack

// console.log(gameName.charAt(0)); // to access character 

// // if [] if out of index it returns undefined (modern)
// // if char.at() if out of index returns empty string ""


// const newstring = gameName.substring(0,4)  //using substring method
// console.log(newstring);

// const another_string =gameName.slice(0,-4) //diff is here we can give neg indices

const newstr =gameName.trim()  //removes the whitespace from start and end
console.log(newstr);
