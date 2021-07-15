/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
import styles from '../../styles/MeetupDetail.module.css';

export default function MeetupDetail(props) {
  return (
    <div className={styles.MeetupDetail_main}>
      <div className={styles.MeetupDetail_content}>
        <div className={styles.MeetupDetail_img}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Andromeda_Galaxy_560mm_FL.jpg/1200px-Andromeda_Galaxy_560mm_FL.jpg" alt="detail_img" />
        </div>
        <div className={styles.MeetupDetail_name}>
          <h3>First meetup</h3>
        </div>
        <div className={styles.MeetupDetail_desc}>
          <span>
            The Andromeda Galaxy, also known as Messier 31, M31,
            or NGC 224 and originally the Andromeda Nebula, is a barred spiral galaxy approximately
            2.5 million light-years from Earth and the nearest major galaxy to the Milky Way
          </span>
        </div>
      </div>
    </div>
  );
}
