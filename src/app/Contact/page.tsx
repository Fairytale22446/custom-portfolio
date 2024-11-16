

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
      <h1 className="h1">Contact Us</h1>
                      {/* <!---------------------------------------Name------------------------------------> */}
      <form method="post">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input  type="text" id="name" name="name" required />
        </div>
               {/* ------------------------------------------------Email---------------------------------------- */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input  type="email" id="email" name="email" required />
        </div>
                  {/* ----------------------------------------Message-------------------------------------- */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea  id="message" name="message" required></textarea>
        </div>
                {/* --------------------------------------------button------------------------------------------------ */}
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
    </div>
  );
}
