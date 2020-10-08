const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();

// bring routes
const userRoutes = require('./routes/user');
const usersRoutes = require ('./routes/users');
//const productRoutes = require('./routes/product');
//const categoryRoutes = require('./routes/category');
const uploadfileRoutes = require('./routes/uploadfile');
const blogRoutes = require('./routes/blog');
//const authRoutes = require('./routes/auth');

//app
const app = express();


//db
mongoose
    .connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log('DB Connected'))
    .catch(err => {
     console.log(err);
});


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public')); //to access the files in public folder
app.use(fileUpload());

//cors
if (process.env.NODE_ENV === 'development') {
    app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}


//app.use(express.json())
//app.use(express.urlencoded({extended:true}));


//routes midlleware
app.use('/api',userRoutes);
app.use('/api',usersRoutes);
//app.use('/api', productRoutes);
//app.use('/api', categoryRoutes);
app.use('/api', uploadfileRoutes);
app.use('/api', blogRoutes);
//app.use('/api', authRoutes);

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server runing http://localhost:${port}`);
});