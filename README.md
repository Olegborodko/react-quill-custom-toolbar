react-quill add custom Dropdown to Toolbar

##### Work was done using
- React
- Mobx
- Node
- React-quill Editor
- PostgreSql (12.4)
<br>

##### How to start
1. git clone <br>
   yarn install

2. create .env in root  <br>
    	`SERVER_PORT = 3000`  <br>
    	`DB_HOST = host`  <br>
    	`DB_USER = user`  <br>
    	`DB_PASSWORD = password`  <br>
    	`DB = dbName`  <br>
		  `NODE_ENV = production`  <br>
		  `REACT_APP_API_ENDPOINT = http://localhost:3000`

	or use default settings for development environment.
	look knexfile.js  <br>
		`host : 'localhost',`  <br>
		`user : 'usertest',`  <br>
		`password : '111111',`  <br>
		`database : 'mobx',`

3. create database and run <br>
	 `npx knex migrate:latest` <br>
	 `npx knex seed:run`

4. yarn build

5. run `node src/api/app.js`  <br>
	or `npm run go`