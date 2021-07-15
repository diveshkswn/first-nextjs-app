/* eslint-disable no-empty */
/* eslint-disable no-plusplus */
// index page /new-MeetupId

import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import styles from '../../styles/new-meetup.module.css';

export default function NewMeetup() {
  function handleMeetupForm(meetupdata) {
    console.log(meetupdata);
  }

  return (

    <div className={styles.new_meetup_main}>

      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetup={handleMeetupForm} />
    </div>

  );
}