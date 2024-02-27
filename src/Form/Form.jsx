import React, { useState } from "react";

const Form = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        body: JSON.stringify({ to, subject, text }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setMessage(data.message);
      setTo("");
      setSubject("");
      setText("");
    } catch (error) {
      setMessage("Failed to send email");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Send Email</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Recipient Email"
          required
        />
        <br />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          required
        />
        <br />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Message"
          required
        />
        <br />
        <button type="submit">Send Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Form;
