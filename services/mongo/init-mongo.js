db.createUser(
	{
		user: "root",
		pwd: "asdasdasd",
		roles: [
			{
				role: "readWrite",
				db: "db", 
			}
		] 
	}
)