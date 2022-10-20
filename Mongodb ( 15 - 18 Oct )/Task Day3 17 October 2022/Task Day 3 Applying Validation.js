// Creating the Collection named 'Students' and applying Validation

db.createCollection("Students", {
validator:{
"$jsonSchema":{
"bsonType":"object",
"properties":{
"_id":{"bsonType":"objectId"},
"firstName":{"bsonType":"string"},
"lastName":{"bsonType":"string"},
"favColor":{"bsonType":"string"},
"gender":{"bsonType":"string"},
"grades":{"bsonType":"number","minimum":0,"maximum":100},
"age":{"bsonType":"number","minimum":21,"maximum":31},
},
"required":["firstName","lastName","favColor","gender","grades","age"],
"additionalProperties":false,
}
}
})
db.getCollection("Students").find()

db.getCollectionInfos({name:'Students'})

// Trying different queries for inserting to check the Validation 

db.getCollection("Students").insertOne({age:30,address:"Cairo"})

// Didn't accept because properties missing

db.getCollection("Students").insertOne({firstName:"Motaz",lastName:"Magdy",gender:"Male",grades:88,age:27})

// Accepted

db.getCollection("Students").insertOne({firstName:"Motaz",lastName:"Magdy",favColor:"Blue",gender:"Male",grades:230,age:27})

// Didn't accept because 'grades' properties is greater than the maximum

db.getCollection("Students").insertOne({firstName:"Motaz",lastName:"Magdy",favColor:"Blue",gender:"Male",grades:88,age:18})

// Didn't accept because 'age' properties is lower than the maximum

db.getCollection("Students").insertOne({"firstName":"yousef","lastName":"osman","gender":"male","favColor":"Red","grades":45,"age":23})

// Accepted
