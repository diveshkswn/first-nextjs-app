import mongoose from 'mongoose';

const configString = process.env.NEXT_MongoDBURL;

export default async function connectDB() {
  try {
    await mongoose.connect(configString, {
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Connected to MongoDB successfully ✅');
  } catch (error) {
    console.log('Failed to connect MongoDB');
    console.log(error);
  }
}
