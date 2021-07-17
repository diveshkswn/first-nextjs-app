/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
// /meetup/[1]
import Head from 'next/head';
import { getMeetupById } from '../api/meetup/[meetupID]';
import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupId(props) {
  const { meetupDetailProps } = props;

  return (
    <>
      <Head>
        <title>{meetupDetailProps.title}</title>
      </Head>
      {/* <h1>Meetup id page</h1>
      <h3>{router.query.meetupId}</h3> */}

      <MeetupDetail meetupDetailProps={meetupDetailProps} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const { meetupId } = context.params;
//   const { success, data } = await getMeetupById(meetupId);
//   if (success === 'true' && data && data.id) {
//     // eslint-disable-next-line no-underscore-dangle

//     const responseData = {
//       title: data.title, description: data.description, image: data.image, address: data.address,
//     };

//     return {
//       props: { meetupDetailProps: responseData },
//     };
//   }

//   return {
//     notFound: true,
//   };
// }

export async function getStaticProps(context) {
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { meetupId: '1' } },
      { params: { meetupId: '7' } },
      { params: { meetupId: '10' } },
    ],
    fallback: 'blocking', // Blocking fallback will generate getStaticProps for the params at runtime
    // https://nextjs.org/docs/basic-features/data-fetching#fallback-blocking
  };
}
