# Admin Page for Students
Creating an admin page for students using the following tech-stack:
| Architecture | Type |
| ------------- | ------------- |
| Database  | PostgreSQL |
| Backend API  | Node.js, GraphQL |
| Frontend  | React |

where the Students have the following table:
| Field  | Type |
| ------------- | ------------- |
| Number | Content Cell  |
| First Name  | Free Text  |
| Last Name  | Free Text  |
| Phone Number  | Free Text  |
| Recorded Date Time | Date & Time  |

Notes:
1. Selected `react-admin` as my frontend framework for its amazing prebuilt features and setup : https://marmelab.com/react-admin/
2. Started with `json-server` as my test db setup.
3. Spun up a docker with `postgres 13` image then hooked up to a `prisma-client` for the `GraphQL` interface : https://www.prisma.io/

Challenge / WIP - 
Frontend:
- [ ] Attempted connecting the graphql to react admin with the package `ra-data-graphql` but encountered webpack issues which will require more debug:
```
BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.
```

# Get started
# Backend: Apollo - GraphQL Server with Docker
1. npm install
```
npm install
```
2. Make sure docker is running then :
```
docker-compose up -d
```
3. Run migrations for the prisma client :
```
npx prisma migrate dev
```
4. Run seed command:
```
npx prisma db seed
```
5. Run the server :
```
npm start
```
6. Interactive Apollo Server will be launched at :
```
http:\\localhost:9999
```

# Backend: JSON server 
(To be removed once GraphQL is successfully linked to react-admin)
1. Navigate into `json-server` folder
```
cd json-server
```
2. Run server
```
json-server --watch db.json
```
3. Server will be launched at:
```
http:\\localhost:9998
```

# Frontend: React-Admin 
1. Navigate into `react-admin`
```
cd react-admin
```
2. yarn install
```
yarn install
```
3. yarn start
```
yarn start
```
4. Start managing students!

Added features of React-Admin that has been used:
- Pre-built `login page`, `create forms`, `edit forms` and `dashboard` 
