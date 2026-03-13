import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Get in Touch</title>
      </Head>
      <h1>Get in Touch</h1>
      <form>
        <div>
          <label>First name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Last name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;