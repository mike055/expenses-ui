var ExpenseService = require('../app/services/expenseService');

// app/routes.js
module.exports = function(app, passport) {

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	
	app.get('/api/expenses', isLoggedIn, function(req, res) {
	  console.log('expenses');
	  var expenseService = new ExpenseService();
	  expenseService.getAll()
		.then((r) => {
	      return res.send(r);
		})
		.catch((error) => { 
			return res.status(500).send(error);
		});
	});

	app.post('/api/expenses', isLoggedIn, function(req, res) {
	  
	  var expenseService = new ExpenseService();
	  expenseService.storeExpense(req.body.amount, req.body.category, req.body.description, req.body.date, "default.user")
	    .then((r) => {
			return res.send({"status": "AOK"});
		})
		.catch((error) => { 
			return res.status(500).send(error);
		});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
	
	// =====================================
  // GOOGLE ROUTES =======================
  // =====================================
  // send to google to do the authentication
  // profile gets us their basic information including their name
  // email gets their emails
  app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

  // the callback after google has authenticated the user
  app.get('/auth/google/callback',
    passport.authenticate('google', {
            successRedirect : '/home',
            failureRedirect : '/',
            failureFlash: true
    }));


};

// route middleware to make sure
function isLoggedIn(req, res, next) {
	return next();
/*
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated()) {
		console.log('we are authenticated!');
		return next();
	}

console.log('no we are not!');
	// if they aren't redirect them to the home page
	res.redirect('/');
	*/
}
