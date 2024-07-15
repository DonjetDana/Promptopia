import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

<<<<<<< Updated upstream
<<<<<<< HEAD
    console.log('MongoDB connected')
=======
    console.log('MongoDB connected');
>>>>>>> 59aff79 (last Changes)
=======
    console.log('MongoDB connected')
>>>>>>> Stashed changes
  } catch (error) {
    console.log(error);
  }
}