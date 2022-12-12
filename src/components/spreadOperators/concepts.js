const course = {
  name: "Anatomy",
  duration: "6 months",
  instructor: "Hesham Aly",
  price: 1522,
};
// make a copy of that obj
let objCopy = { ...course };
console.log(objCopy);

// merge a new property :
objCopy = { ...course, startDate: "12 Dec 2022" };
console.log(objCopy);
