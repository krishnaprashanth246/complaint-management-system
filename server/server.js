const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');
const app = express();
const port = process.env.PORT || 5000;
const REACT_APP_GOOGLE_CLIENT_ID = '<Google CLient ID>';

const client = new OAuth2Client(REACT_APP_GOOGLE_CLIENT_ID);

app.use(cors());
app.use(express.json());

// Connect to database via mongoose
const uri = process.env.MONGO_URI;
//MONGO_URI = 'mongodb://localhost:27017'
mongoose.connect(uri, { 
	useNewUrlParser: true, 
	useCreateIndex: true, 
	useUnifiedTopology: true }
);

mongoose.connection.once('open', () => {
	console.log("MongoDB database connection established successfully.");
});

// Get routes
const ticketsRouter = require('./routes/tickets');
const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const faqRouter = require('./routes/faq');
const feedbackRouter = require('./routes/feedback');
const categoryRouter = require('./routes/categories');

app.use('/tickets', ticketsRouter);
app.use('/users', usersRouter);
app.use('/projects', projectsRouter);
app.use('/faq',faqRouter);
app.use('/feedback',feedbackRouter);
app.use('/categories', categoryRouter);

const users = [];

function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}
app.post('/api/google-login', async (req, res) => {
	const { token } = req.body;
	const ticket = await client.verifyIdToken({
	  idToken: token,
	  audience: REACT_APP_GOOGLE_CLIENT_ID,
	});
	const { name, email, picture } = ticket.getPayload();
	upsert(users, { name, email, picture });
	res.status(201);
	res.json({ name, email, picture });
  });

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
