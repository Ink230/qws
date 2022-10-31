import { useState } from 'react';
import css from '../styles/Contact.module.css';

type Props = {
  _unused?: string;
};

export const ContactForm: React.FC<Props> = ({ _unused }: Props) => {
  const max: number = 750;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [words, setWords] = useState(max);
  const [confirmation, setConfirmation] = useState(
    'Fill out the form with your details and press submit!'
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!e.target.checkValidity()) return false;

    let data = {
      name,
      email,
      message,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          setSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
          setConfirmation('Message sent and received!');
          setWords(max);
        } else {
          setConfirmation('Message sending failed! Please try again.');
        }
        //return res.json(); //haha don't forget
        //if no json is sent back from the api then we can't call res.json
      })
      .then((data) => {});
  };

  const handleWords = (length: number) => {
    setWords(max - length);
  };

  return (
    <div className={css.container}>
      <form
        id="contact"
        className={css.form}
        onSubmit={(e) => {
          handleSubmit(e);
          return false;
        }}
      >
        <div className={css.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className={css.inputBox}
            value={name}
            minLength={1}
            maxLength={60}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          ></input>
        </div>
        <div className={css.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className={css.inputBox}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            minLength={1}
            maxLength={70}
            required
          ></input>
        </div>
        <div className={css.inputGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            className={css.inputMessage}
            id="message"
            form="contact"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              handleWords(e.target.value.length);
            }}
            minLength={1}
            maxLength={max}
            required
          ></textarea>
          <div className={css.words}>{words}</div>
        </div>
        <div className={css.confirmation}>{confirmation}</div>
        <div className={css.inputSubmit}>
          <input type="submit" value="Submit" />
        </div>
      </form>
      <div className={css.welcometext}>
        <p>
          We will be happy to receive your email and get back to you within 48
          hours.
        </p>
      </div>
    </div>
  );
};
