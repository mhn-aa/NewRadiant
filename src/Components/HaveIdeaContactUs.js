import React from "react";

const HaveIdeaContactUs = ({
  submitHandler1,
  setYourName,
  setEmail,
  setMessage,
  yourName,
  email,
  message,
}) => {
  return (
    <div className="have_idea_contact_us">
      <h3 className="header_have_idea_contact_us"></h3>
      <form className="have_idea_contact_us_form" onSubmit={submitHandler1}>
        <div>
          <input
            value={yourName}
            type="text"
            placeholder="Your Name"
            onChange={(event) => setYourName(event.target.value)}
          />
        </div>
        <div>
          <input
            value={email}
            type="text"
            placeholder="E-Mail"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <textarea
            value={message}
            className="have_idea_contact_us_message"
            type="text"
            placeholder="Message"
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <button className="have_idea_submit_button">SUBMIT</button>
      </form>
    </div>
  );
};

export default HaveIdeaContactUs;
