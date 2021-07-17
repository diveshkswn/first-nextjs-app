/* eslint-disable jsx-a11y/label-has-associated-control */
import { useRef, useState } from 'react';

import Card from '../ui/Card';
import classes from '../../styles/NewMeetupForm.module.css';
// 2:29 //fetchAll Meetups route
function NewMeetupForm() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    try {
      setErrorMsg('');

      setLoading(true);
      const enteredTitle = titleInputRef.current.value;
      const enteredImage = imageInputRef.current.value;
      const enteredAddress = addressInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;

      const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDescription,
      };

      const res = await fetch('/api/new-meetup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(meetupData),
      });
      const response = await res.json();
      console.log(response);
      if (response.success === 'true') {
        setErrorMsg('Data Added Successfully');
      } else {
        setErrorMsg('Something bad happened. Please try again');
      }
    } catch (error) {
      console.log(error);
      setErrorMsg('Something bad happened. Please try again');
    }
    setLoading(false);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">{loading ? 'Please Wait' : ' Add Meetup'}</button>

        </div>

        <label>{errorMsg}</label>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
