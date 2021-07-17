/* eslint-disable max-len */
// index page : /
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { getAllMeetups } from './api/allMeetups';

export default function HomePage(props) {
  const { meetups } = props;

  return (
    <>
      <Head>
        <title>Meetup Next App</title>
        <meta name="description" content="Meetup Next App" />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}

export async function getStaticProps() {
  // const data = DUMMY_LIST;
  const { success, data } = await getAllMeetups();
  if (success === 'true') {
    return {
      props: { meetups: JSON.parse(JSON.stringify(data)) },

      // props: {
      //   meetups: data.map((i) => ({ // Iterationo over map to get rid of _id:60f1a24bf982753df803715f
      //     id: i.id,
      //     title: i.title,
      //     description: i.description,
      //     image: i.image,
      //   })),
      // },
      revalidate: 10, // Regenerate static props every 10  seconds
    };
  }

  return {
    notFound: true,
  };
}
