import mongoose from 'mongoose';

const connectMongoDb = (() => {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log(`MongoDB Database connected successfully`))
    .catch(err => console.log(`MongoDB Database connection error: ${err.message}`));
})

const mongodb = (() => {
    const mongodb = mongoose.connection
    return mongodb
})

const mongodb_config = { connectMongoDb, mongodb }

export default mongodb_config