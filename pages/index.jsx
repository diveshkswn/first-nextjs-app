// index page : /
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_LIST = [
  {
    id: 1,
    title: 'First meetup',
    description: 'The Andromeda Galaxy, also known as Messier 31, M31, or NGC 224 and originally the Andromeda Nebula, is a barred spiral galaxy approximately 2.5 million light-years from Earth and the nearest major galaxy to the Milky Way',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Andromeda_Galaxy_560mm_FL.jpg/1200px-Andromeda_Galaxy_560mm_FL.jpg',
    address: 'M31 Andromeda',
  },
  {
    id: 12,
    title: 'Second meetup',
    description: 'Kepler-22b is an exoplanet orbiting within the habitable zone of the Sun-like star Kepler-22. It is located about 620 light-years from Earth in the constellation of Cygnus. ',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Kepler22b-artwork.jpg/1280px-Kepler22b-artwork.jpg',
    address: 'Kepleer 22b',
  },
];
export default function HomePage(props) {
  const { meetups } = props;

  return (

    <MeetupList meetups={meetups} />

  );
}

export async function getStaticProps() {
  const data = DUMMY_LIST;

  return {
    props: { meetups: data },
    revalidate: 10, // Regenerate static props every 10 seconds
  };
}
