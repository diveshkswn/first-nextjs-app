import dbConnect from '../../../db/dbConnect';
import MeetupModel from '../../../db/MeetupModel';

export async function getMeetupById(meetupId) {
  try {
    await dbConnect();
    const response = await MeetupModel.findOne({ id: meetupId }, { _id: 0, __v: 0 });
    return { success: 'true', data: response };
  } catch (error) {
    return { success: 'false', data: error.message };
  }
}

export default async function handler(req, res) {
  const { meetupID } = req.query;
  if (req.method === 'GET') {
    const { success, data } = await getMeetupById(meetupID);
    if (data) res.status(200).json({ success, data });
    else res.status(200).json({ success, data: [] });
  } else {
    res.status(400).json({ message: 'Not a GET request' });
  }
}
