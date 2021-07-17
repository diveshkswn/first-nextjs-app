import dbConnect from '../../db/dbConnect';
import MeetupModel from '../../db/MeetupModel';

export async function getAllMeetups() {
  await dbConnect();
  try {
    const result = await MeetupModel.find();
    return { success: 'true', data: result };
  } catch (err) {
    return { success: 'false', data: err.message };
  }
}

export default async function allMeetups(req, res) {
  if (req.method === 'GET') {
    const { success, data } = await getAllMeetups();
    if (success === 'true') {
      res.status(200).json({
        success,
        data,
      });
    } else {
      res.status(400).json({
        success,
        data,
      });
    }
  } else {
    res.status(400).json({ message: 'Not a GET request' });
  }
}
