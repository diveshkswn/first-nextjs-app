// POST /api/new-meetup
import connectDB from '../../db/dbConnect';
import MeetupModel from '../../db/MeetupModel';

export async function addMeetup(reqBody) {
  await connectDB();
  try {
    const responseData = await MeetupModel.create(reqBody);

    return {
      success: 'true',
      data: responseData,
    };
  } catch (error) {
    return {
      success: 'false',
      data: error.message,
    };
  }
}

// API handler

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { success, data } = await addMeetup(req.body);
    if (success === 'true') {
      res.status(200).json({ success, data });
    } else {
      res.status(400).json({ success, data });
    }
  } else {
    res.status(200).json({ msg: 'This is not a POST Request' });
  }
}
