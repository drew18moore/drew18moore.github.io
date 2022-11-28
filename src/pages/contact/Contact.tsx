import "./contact.css";

function Contact() {
  return (
    <main id="contact-main">
      <div id="contact-form-container">
        <h1>Contact</h1>
        <form
          id="contact-form"
          action="https://formsubmit.co/e2d9c67452b271646a48787b57ecf961"
          method="POST"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
