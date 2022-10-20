db.getCollection("instructors2").find({})

//// 6 Start create new collection named instructors following with inserts 
// a- Insert your own data

db.instructors2.insertOne({firstName:"Ryhab",lastName:"Farouq"})

// b- Insert instructor without firstName and LastName (mongo will raise an error or not ?)

db.instructors2.insertOne({firstName:,lastName:})
//db.instructors2.insertOne({:"Motaz",:"Magdy"})

// c- Using array contained with lab folder instructors.txt file.

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
	db.instructors2.insertMany(instructorsArray)
	
	//// 7- Try the following queries: (all queries should be run using find or findOne)  
	// a- Display all documents for instructors collection
	
	db.getCollection("instructors2").find({})
	
	// b- Display all instructors with fields firstName, lastName and address
	
	db.instructors2.find({}, {firstName:1,lastName:1,address:1,_id:0}) 
	
	// c- Display firstName and city(not full address) for instructors with age 21.
	
	db.instructors2.find({age:21},{firstName:1,lastName:1,"address.city":1,_id:0}) 
	
	// d- Display firstName and age for instructors live in Mansoura city.
	
	db.instructors2.find({"address.city":"mansoura"},{firstName:1,age:1,_id:0}) 
	
	//e- Try to run these commands
	
	    // 1- 
	
	db.instructors.find({firstName:"mona"},{lastName:"ahmed"},{firstName:1,lastName:1})
	
	// The shown query with the second condition lastName and ignored the first condition , 
	// and showed only the second field as required
	
	    // 2-
	
	db.instructors.find({courses:"mvc"},{firstName:1,courses:1})  
	
	// The showm query includes documents only with courses mvc as required 
	// and showed only the two fields as required
	
	


		