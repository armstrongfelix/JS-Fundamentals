const args = process.argv.slice(2);
const value = args[0];

if (value === undefined) {
    console.log("No argument");
} else {
    console.log(value);
}
