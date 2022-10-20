// Creating a new Collection "Students2"

db.getCollection("Students2").find({})
db.getCollectionInfos({name:'Students2'})

// Adding new Documents 

let newDocs2 = [{"firstName":"Arielle","lastName":"Gepheart","gender":"Female","favColor":"Crimson","grades":18,"age":30},
{"firstName":"Arley","lastName":"Doorey","gender":"Male","favColor":"Violet","grades":24,"age":21},
{"firstName":"Morlee","lastName":"Buttery","gender":"Male","favColor":"Crimson","grades":44,"age":26},
{"firstName":"Rowen","lastName":"Gillfillan","gender":"Male","favColor":"Red","grades":62,"age":27},
{"firstName":"Codie","lastName":"Mullin","gender":"Male","favColor":"Yellow","grades":44,"age":24},
{"firstName":"Nerti","lastName":"Gresham","gender":"Female","favColor":"Puce","grades":34,"age":31},
{"firstName":"Althea","lastName":"Scheffler","gender":"Female","favColor":"Fuscia","grades":81,"age":24},
{"firstName":"Carmelita","lastName":"Edworthy","gender":"Female","favColor":"Mauv","grades":53,"age":28},
{"firstName":"Cornie","lastName":"Fermoy","gender":"Female","favColor":"Red","grades":45,"age":23},
{"firstName":"Peter","lastName":"Slaight","gender":"Male","favColor":"Blue","grades":12,"age":26}];

db.getCollection("Students2").insertMany(newDocs2)

db.getCollection("Students2").find({})

// Applying Aggregation with matching fields with age greater than 24 ,
// Then , Projecting names into fullName ,
// Then , Sorting the Filtered data Ascending ,
// Then , Inserting The Data into new Collection .

db.getCollection("Students2").aggregate(
{$match:{age:{$gt:24}}
},{
$project:{_id:0,fullName:{$concat:["$firstName"," " , "$lastName"]}}
},{
$sort:{fullName:1}
},{
 $out:"Students_age>24_Assorted"   
})

// Applying Aggregation with matching fields with age greater than 25 ,
// Then , grouping the result into 3 fields ,
// Field 1 for id .. the field which the whole process will be about ,
// Field 2 for count .. new field contains the count of resulted field ,
// Field 3 for grades .. new field which we will apply the summition method .

db.getCollection("Students2").aggregate(
{$match:{age:{$gt:25}}
},{
$group:{_id:"$age",count:{$sum:1},grades:{$sum:"$grades"}}
})

// Applying the same example with new age range in the first stage , and getting the average not summition of grades . 

db.getCollection("Students2").aggregate(
{$match:{age:{$lt:31}}
},{
$group:{_id:"$age",count:{$sum:1},grades:{$avg:"$grades"}}
})

// Applying the same example with new age range in the first stage 
// Then , setting the _id for favColor ,
// Then , getting the summition of grades . 

db.getCollection("Students2").aggregate(
{$match:{age:{$gt:22}}
},{
$group:{_id:"$favColor",count:{$sum:1},grades:{$sum:"$grades"}}
})