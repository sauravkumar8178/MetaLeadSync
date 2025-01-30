require('dotenv').config();
const express = require('express');
const authRouter = require('./routes/userRoutes')
const leadRouter = require('./routes/leadRoutes')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/auth', authRouter);
app.use('/leads', leadRouter);

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})