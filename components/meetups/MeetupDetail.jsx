/* eslint-disable max-len */
import Image from 'next/image';
import styles from '../../styles/MeetupDetail.module.css';

export default function MeetupDetail(props) {
  const { meetupDetailProps } = props;

  return (
    <div className={styles.MeetupDetail_main}>
      <div className={styles.MeetupDetail_content}>
        <div className={styles.MeetupDetail_img}>
          <Image objectFit="cover" src={meetupDetailProps.image} alt="detail_img" layout="fill" quality="100" />
        </div>
        <div className={styles.MeetupDetail_name}>
          <h3>{meetupDetailProps.title}</h3>
        </div>
        <div className={styles.MeetupDetail_desc}>
          <span>
            {meetupDetailProps.description}
          </span>
        </div>
      </div>

    </div>
  );
}
