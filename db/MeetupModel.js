import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const meetupSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Please provide Title.'] },
  description: { type: String, required: [true, 'Please provide Description.'] },
  image: { type: String, required: [true, 'Please provide IMG URL.'] },
  address: { type: String, required: [true, 'Please provide Address.'] },
});

/// This is important. Need to initialize autoIncrement before using
autoIncrement.initialize(mongoose.connection);
// AutoIncrement of ID which is other than _id
meetupSchema.plugin(autoIncrement.plugin, {
  model: 'meetup',
  field: 'id', // Or whatevent name we want to give like "meetupId"
  startAt: 1,
  incrementBy: 1,

});

// To check if there is any existing model there. If not then create new.
const meetupModel = mongoose.models.meetup || mongoose.model('meetup', meetupSchema);

export default meetupModel;
