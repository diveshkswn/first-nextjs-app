/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
// /meetup/[1]
import { getMeetupById } from '../api/meetup/[meetupID]';
import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupId(props) {
  const { meetupDetailProps } = props;

  return (
    <>
      {/* <h1>Meetup id page</h1>
      <h3>{router.query.meetupId}</h3> */}

      <MeetupDetail meetupDetailProps={meetupDetailProps} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { meetupId } = context.params;
  const { success, data } = await getMeetupById(meetupId);
  if (success === 'true' && data && data.id) {
    // eslint-disable-next-line no-underscore-dangle

    const responseData = {
      title: data.title, description: data.description, image: data.image, address: data.address,
    };

    return {
      props: { meetupDetailProps: responseData },
    };
  }

  return {
    notFound: true,
  };
}
// export async function getStaticProps(context) {
//   const DUMMY_LIST = [
//     {
//       id: 1,
//       title: 'First meetup',
//       description: 'The Andromeda Galaxy, also known as Messier 31, M31, or NGC 224 and originally the Andromeda Nebula, is a barred spiral galaxy approximately 2.5 million light-years from Earth and the nearest major galaxy to the Milky Way',
//       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Andromeda_Galaxy_560mm_FL.jpg/1200px-Andromeda_Galaxy_560mm_FL.jpg',
//       address: 'M31 Andromeda',
//     },
//     {
//       id: 12,
//       title: 'Second meetup',
//       description: 'Kepler-22b is an exoplanet orbiting within the habitable zone of the Sun-like star Kepler-22. It is located about 620 light-years from Earth in the constellation of Cygnus. ',
//       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kepler22b-artwork.jpg/1280px-Kepler22b-artwork.jpg',
//       address: 'Kepleer 22b',
//     },
//   ];

//   const { meetupId } = context.params;

//   const data = DUMMY_LIST.find((i) => i.id === Number(meetupId));

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { meetupDetailProps: data },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { meetupId: '1' } },
//       { params: { meetupId: '12' } },
//     ],
//     fallback: false,
//   };
// }
