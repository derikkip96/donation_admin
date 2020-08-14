
## how to set up

- Clone GitHub repo for this project locally
- Install Composer Dependencies
- Install NPM Dependencies
- Create a copy of your .env file
- Generate an app encryption key
- use same database as donor app
- in the .env file, add database information to allow Laravel to connect to the database
- Migrate the database
- for the purpose of instant payment notifaction you need to turnel your application using ngrok so that you expose it to the internet
- run on port 8080



## basic functionality
- registration of the admin
- login to the dashboard
- displaying a list of transactions


## approach used to achieve the above functionality
- i used laravel basic auth 
- i have use trait on implementing curl request so that i can be able to use on multiple functions in the system
- on login i have consumed login api of the donation app to get token
- i use consumed transaction record api from the donor app
