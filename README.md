react-quill add custom Dropdown to Toolbar

##### Work was done using
- React
- Mobx
- Node
- React-quill Editor
- PostgreSql (12.4)
<br>

##### How to start
1. git clone
2. create .env in root
    	SERVER_PORT = 3000
    	DB_HOST = host
    	DB_USER = user
    	DB_PASSWORD = password
    	DB = dbName
		NODE_ENV = production
		REACT_APP_API_ENDPOINT = http://localhost:3000

	or use default settings for development environment.
	look knexfile.js
		`host : 'localhost',`  <br>
		`user : 'usertest',`  <br>
		`password : '111111',`  <br>
		`database : 'mobx',`

3. run `NODE_ENV=production node src/api/app.js`
	or `NODE_ENV=production run go`