import { useState } from "react";
import "../../styles/faq.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is HireGuard?",
      answer:
        "HireGuard is a smart job application tracker that helps users manage applications, interviews, and career progress.",
    },
    {
      question: "Is HireGuard free to use?",
      answer:
        "Yes, HireGuard offers free features for tracking job applications and interview schedules.",
    },
    {
      question: "Can I track interview stages?",
      answer:
        "Absolutely. You can manage statuses like Applied, Interviewing, Offered, and Rejected.",
    },
    {
      question: "Does HireGuard provide analytics?",
      answer:
        "Yes, users can view insights and statistics about their job search progress.",
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="about-faq">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            <button className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
