let students = [
    {name : "Alice 1",age:23,marks:{math:83,science:86,english:75}},
    {name : "Alice 2",age:24,marks:{math:82,science:87,english:76}},
    {name : "Alice 3",age:25,marks:{math:83,science:88,english:77}},
]
students.push({ name: "Alice 4", age: 19, marks: { math: 75, science: 95, english: 90 } } );
const highest = {name : "" ,averageMarks : -1};

for(let index=0;index<students.length;index++){
    const student = students[index];
    const marks = Object.values(student.marks);
    const averageMarks = marks.reduce((sum,curValue) => {
        sum+=curValue;
        return sum;
    },0)/marks.length;
    
    if(highest.averageMarks < averageMarks){
        highest.averageMarks = averageMarks;
        highest.name = student.name;
    }
   console.log(`${student.name} has an average marks of ${averageMarks}`)
}
console.log(`${highest.name} has highest average marks of ${highest.averageMarks}`)