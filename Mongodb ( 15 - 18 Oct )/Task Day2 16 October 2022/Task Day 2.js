db.getCollection("Instructor2").find({})


let instructorsArray=[{_id:6,firstName:"noha",lastName:"hesham",
                age:21,salary:3500,
                address:{city:"cairo",street:10,building:8},
                courses:["js","mvc","signalR","expressjs"]},
                
                {_id:7,firstName:"mona",lastName:"ahmed",
                age:21,salary:3600,
                address:{city:"cairo",street:20,building:8},
                courses:["es6","mvc","signalR","expressjs"]},
                
                {_id:8,firstName:"mazen",lastName:"mohammed",
                age:21,salary:7040,
                address:{city:"Ismailia",street:10,building:8},
                courses:["asp.net","mvc","EF"]},
                
                {_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]}
               
		
		];
		db.Instructor2.insertMany(instructorsArray)
		db.Instructor2.insertOne({_id:9,firstName:"ebtesam",lastName:"hesham",
                age:21,salary:7500,
                address:{city:"mansoura",street:14,building:3},
                courses:["js","html5","signalR","expressjs","bootstrap"]})
		db.Instructor2.insertOne({firstName:"ryhab",lastName:"farouq"})

// a   Display all documents in instructors collection
 
db.getCollection("Instructor2").find({})
        
// b   Display all instructors with salaries greater than 4000 (only show firstName and salary)

db.getCollection("Instructor2").find({salary:{$gt:4000}},{firstName:1,salary:1})

// c   Display all instructors with ages less than or equal 25.

db.getCollection("Instructor2").find({age:{$lte:25}})

// d   Display all instructors with city mansoura and sreet number 10 or 14 only display (firstname,address,salary).

db.getCollection("Instructor2").find({$and:[{"address.city":"mansoura"},{$or:[{"address.street":10},{"address.street":14}]}]},{firstName:1,address:1,salary:1})

// e   Display all instructors who have js and jquery in their courses (both of them not one of them).

db.getCollection("Instructor2").find({$and:[{"courses":"js"},{"courses":"jquery"}]})

// f   Display number of courses for each instructor and display first name with number of courses.

db.getCollection("Instructor2").find().forEach(instructor =>{print`${instructor.firstName}  ${'instructor.courses'.length}`})

// g   Write mongodb query to get all instructors that have firstName and lastName properties ,
//     sort them by firstName ascending then by lastName descending 
//     and finally display their data FullName and age 
//     Note: use mongoDb sort method not javascript array method

//////    Sorting ascending by firstName
db.getCollection("Instructor2").find({$and:[{firstName:{$exists:true}},{lastName:{$exists:true}}]}).sort({firstName:1}).forEach(element => {
    print(`FullName : ${element.firstName}  ${element.lastName} , Age : ${element.age}`)})
    
//////    Sorting ascending by firstName
db.getCollection("Instructor2").find({$and:[{firstName:{$exists:true}},{lastName:{$exists:true}}]}).sort({lastName:-1}).forEach(element => {
    print(`FullName : ${element.firstName}  ${element.lastName} , Age : ${element.age}`)})


// f   Find all instructors that have fullName that contains “mohammed”.

db.getCollection("Instructor2").find({$or:[{lastName:{$all:["mohammed"]}},{firstName:{$all:["mohammed"]}}]})

// i   Delete instructor with first name “ebtesam” and has only 5 courses in courses array

db.getCollection("Instructor2").remove({$and:[{firstName:"ebtesam"},{courses:{$size:5}}]})
db.getCollection("Instructor2").find({})

// j   Add active property to all instructors and set its value to true.

db.getCollection("Instructor2").updateMany({},{$set:{active:true}})
db.getCollection("Instructor2").find({})

// k   Rename address field for all instructors to fullAddress.

db.getCollection("Instructor2").updateMany({},{$rename:{'address':'fullAddress'}})
db.getCollection("Instructor2").find({})



