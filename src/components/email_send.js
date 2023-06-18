import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./email_send.css";
import Modal from "./Modal";

const Email = ({ user_email, user_name, closeModal }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b1js5qp",
        "template_9f8wy37",
        form.current,
        "aqg6i0oPSzSeGemkk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
    closeModal();
    alert("메일이 성공적으로 전송되었습니다.");
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <label className="label">이름</label>
      <input
        type="text"
        name="user_name"
        className="input-a"
        value={user_name}
        readOnly
      />
      <label className="label">이메일</label>
      <input
        type="text"
        name="user_email"
        className="input-a"
        value={user_email}
        readOnly
      />
      <label className="label">답변 내용</label>
      <textarea name="message" />
      <input type="submit" value="보내기" />
    </form>
  );
};

export default Email;
