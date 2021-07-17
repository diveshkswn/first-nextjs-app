/* eslint-disable react/destructuring-assignment */
import MeetupItem from './MeetupItem';
import classes from '../../styles/MeetupList.module.css';

function MeetupList(props) {
  return (
    <div className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </div>
  );
}

export default MeetupList;
