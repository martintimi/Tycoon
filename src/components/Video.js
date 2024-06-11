import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaQuestionCircle } from 'react-icons/fa';

function VideoSection() {
  const faqs = [
    {
      question: "Can I use Landkit for my clients?",
      answer: "Absolutely. The Bootstrap Themes license allows you to build a website for personal use or for a client."
    },
    {
      question: "Is there a money back guarantee?",
      answer: "Yup! Bootstrap Themes come with a satisfaction guarantee. Submit a return and get your money back."
    },
    {
      question: "Do I get free updates?",
      answer: "Yes. We update all of our themes with each Bootstrap update, plus are constantly adding new components, pages, and features to our themes."
    },
    {
      question: "Does it work with Rails? React? Laravel?",
      answer: "Yes. Landkit has basic CSS/JS files you can include. If you want to enable deeper customization, you can integrate it into your assets pipeline or build processes."
    }
  ];
  return (
    <section >
      <div className="video py-5">
      <div className="video-content">
        <span className=" d-block">CREATE YOUR OWN EXPERIENCE</span>
        <h1 className=" header-with-line4 pt-3">Watch Our Awesome Video</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but <br />
          the majority have suffered alteration in some form.
        </p>
        <a id="play-video" class="video-play-button" href="#"  data-toggle="modal" data-target="#savoybeachhotel">
	<span></span>
 </a>
      </div>
      </div>

      <div className="faq-section">
      <div className="faq-container">
        <div className="row">
          {faqs.map((faq, index) => (
            <div className="col-md-6" key={index}>
              <div className="faq-item">
                <FaQuestionCircle className="faq-icon" />
                <div className="faq-content">
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}

export default VideoSection;
