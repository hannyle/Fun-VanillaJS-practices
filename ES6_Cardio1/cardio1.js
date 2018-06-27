const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
];

const people = [
    'John, Smith', 'Adam, Lambert', 'Henry, Law', 'Ben, Bubble', 'Corel, Henz', 'Bruce, Law', 'Shirley, Antom',
    'Hannah, Montana', 'Lizzie, McGuire', 'Lisa, Smith', 'Nina, Turism', 'Ping, Peng', 'Laura, Elton', 
    'Yoo, Lee', 'Ann, Elizabeth', 'Harry, Simpson', 'Jennifer, Gawrence', 'Nina, Ryhtya', 'Mina, Asimoto',
    'Bom, Kim', 'Phong, Le', 'Anton, Elevy', 'Tiina, Matilainen', 'Hanna, Uusitalo', 'Lasi, Lata', 'Emma, Philips'
];

//Filter the list of inventors for those who where born in the 1500's
const bornYear1500 = inventors.filter(inventor => inventor.year>=1500 && inventor.year<1600);
console.log(bornYear1500);

//Give us an array of the inventors' first and last names
const arrayNames = inventors.map(inventor => `${inventor.first}, ${inventor.last}` );
console.log(arrayNames);

//Sort the inventors by birthdate, oldest to youngest
const sortBirthdate = inventors.sort((a,b) => {
   return b.year - a.year;
});
console.log(sortBirthdate);

//How many years did all the inventors live?

console.log(inventors.reduce((totalYears, livingYears) => {
    return (totalYears + (livingYears.passed - livingYears.year));
    console.log(totalYears);
},0));

//Sort the inventors by years lived
const yearsLived = inventors.sort((a,b) => {
    return (a.passed-a.year) - (b.passed-b.year);
});
console.log(yearsLived);

//Sort the people alphabetically by last name
const sortLastname = people.sort((a,b) => {
    const last1 = a.split(',')[1];
    const last2 = b.split(',')[1];
    return last1 < last2 ? -1 : 1; 
});
console.log(sortLastname);

//Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

sumInstances = data.reduce((a, b) => {
    a[b] = (a[b] + 1) || 1;
    //console.log(`a =  ${a}`);
    //console.log(`b =  ${b}`);
    //console.log(a[b]);
    return a;
}, {});
console.log(sumInstances);