const args = process.argv.slice(2);
const first = args[0];
const second = args[1];

// Print in the format: "<arg1> is <arg2>"
// If an argument is missing, print undefined for that position (per typical JS behavior)
console.log(`${first} is ${second}`);
