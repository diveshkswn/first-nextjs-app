/* eslint-disable no-empty */
/* eslint-disable no-plusplus */
// index page /new-MeetupId

import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import styles from '../../styles/new-meetup.module.css';

export default function NewMeetup() {
  return (
    <>
      <Head>
        <title>Add New Meetup</title>
      </Head>
      <div className={styles.new_meetup_main}>

        <h1>New Meetup</h1>
        <NewMeetupForm />
      </div>
    </>
  );
}
