const abc = require('./connection.js');
const Users = require('./UserSchema.js');
const Complaints = require('./ComplaintSchema.js');


let user1 = new Users({
	
							UID: 'fkjadafkj',
						    Email: 'abc@example.com',
						    Phone:48929420,
						    Flags:0,
						    CID:[]
						}

);
user1.save();


let complaint1 = new Complaints({
	
	Content:'hey , this is my first comment',
    DatePosted: new Date(),
    DateResolved: new Date(),
    UID: user1._id
	}
	);
complaint1.save();




