// /meetup/[1]
import { useRouter } from 'next/dist/client/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupId() {
  const router = useRouter();

  return (
    <>
      {/* <h1>Meetup id page</h1>
      <h3>{router.query.meetupId}</h3> */}
      <MeetupDetail />
    </>
  );
}
