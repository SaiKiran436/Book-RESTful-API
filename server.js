const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');

    // Only listen if not in test mode
    if (process.env.NODE_ENV !== 'test') {
      app.listen(process.env.PORT, () =>
        console.log(`Server running on http://localhost:${process.env.PORT}`)
      );
    }
  })
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = app; // <- important to export app for testing




















// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// const bookRoutes = require('./routes/bookRoutes');

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/auth', authRoutes);
// app.use('/api/books', bookRoutes);

// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// // Connect to MongoDB and start server
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('Connected to MongoDB Atlas');
//     app.listen(process.env.PORT, () =>
//       console.log(`Server running on http://localhost:${process.env.PORT}`)
//     );
//   })
//   .catch((err) => console.error('MongoDB connection error:', err));
