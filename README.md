# Chad Gullickson Profile Site
Single-page profile application

## Demo

Demo coming soon!

## Tech stack
This project is built with these technologies:

* Angular 1
* Angular-ui-router
* Node.js
* Express

Styling:

* Bootstrap CSS
* Angular-ui-bootstrap
* font-awesome

## Setup

1. Install global NPM packages (if not already installed)

	```bash
	npm install -g --save karma-cli bower gulp
	```

2. Install project NPM packages

	```bash
	npm install
	```

3. Install project Bower packages

	```bash
	bower install
	```

4. Build front-end files

	Choose one of the options below:

	```bash
	# Adds all relevant static files into the /public/dist/index.html file. Does not compile or compress CSS/JS.
	gulp dev-build
	```
	
	```bash
	# Compile and compress all static files, including bower components, into 1 CSS and 1 JS file.
	# Add to /public/dist/index.html file. Move relevant font files to /public/fonts.
	gulp dist-build
	```

<!--5. Set environment variables

	You'll need a mongo database installed somewhere, a sendgrid account API key for sending mail, and a secret key for encrypting JWTs:

	```
	DB_CONNECTION (MongoDB connection string)
  SENDGRID_DEVELOPMENT (a sendgrid account for sending mail)
  SESSION_SECRET_KEY (this can be any random set of letters and numbers)
	```-->

6. Start the server

	```bash
	npm start
	```

7. Access the site

	```
	Browse to localhost:8000
	```

## Code Styling

Client-side code closely follows [John Papa's Angular 1 Style Guide](https://github.com/johnpapa/angular-styleguide/tree/master/a1).

Linting rules can be found in the .eslintrc.json.

## License

MIT