/* eslint-disable max-len */
import Image from 'next/image';
import styles from '../../styles/MeetupDetail.module.css';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) => (typeof window === 'undefined'
  ? Buffer.from(str).toString('base64')
  : window.btoa(str));

export default function MeetupDetail(props) {
  const { meetupDetailProps } = props;

  return (
    <div className={styles.MeetupDetail_main}>
      <div className={styles.MeetupDetail_content}>
        <div className={styles.MeetupDetail_img}>
          <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 300))}`}
            objectFit="cover"
            src={meetupDetailProps.image}
            alt="detail_img"
            layout="fill"
            quality="100"
          />
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
