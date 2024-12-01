import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Faq.css';
import PropTypes from 'prop-types';

const FAQItem = ({ question, answer, index, activeIndex, setActiveIndex }) => {
  const isOpen = index === activeIndex;

  return (
    <div className="faq-item">
      <div
        className="faq-question"
        onClick={() => setActiveIndex(isOpen ? null : index)}
        role="button"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span>{question}</span>
        {isOpen ? <FaChevronUp className="faq-icon" /> : <FaChevronDown className="faq-icon" />}
      </div>
      {isOpen && (
        <div
          className="faq-answer"
          id={`faq-answer-${index}`}
          role="region"
          aria-labelledby={`faq-question-${index}`}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number,
  setActiveIndex: PropTypes.func.isRequired,
};

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: 'Can I apply for scholarships as an international student?', answer: 'Yes of course you can. And we’ll help you secure scholarships if you’re a highly talented student, and the university you’re applying to feels it is in their interest to offer you one. Scholarships are highly sought after so we strongly recommend you apply early.' },
    { question: 'Are the degrees from the UK, US, Canada, or Australia recognised back home in India?', answer: 'Yes they are – as long as you’ve completed your degree from a recognised university. Most public and private institutions offer courses that are internationally accredited. To give you an example, LLB from the UK from some universities is recognised by the Indian BAR council. When you come to see us, we’ll make sure that you’re clear about the course options and its recognition in India. Cloud Career Oversease only partners with universities that offer degree courses which are recognised in India.'},
    { question: 'Can I work part time?', answer:'Most countries allow part time work of up to 20 hours per week. This limit is strictly enforced. The current minimum wage in the UK for example is £8.20 per hour. Cloud Career Oversease assists our students to find part time jobs when you arrive.'},
    { question: 'What are my employment options after I graduate?', answer:'Job markets in most western economies are buoyant and reward hard work and talent. If you graduate with high grades and can demonstrate to your future employer that you’ll be an asset to their business they would rate you highly. Some countries allow you to stay back there after completing your studies for a limited period of time to look for jobs.' },
    { question: 'Where would I live?', answer:' This is a matter of personal choice. Some students (and parents) prefer the safety and security of an on campus accommodation. Some others however want the freedom of living on their own, in a flat for example. Cloud Career Oversease has partnered with leading accommodation providers in the UK, and as part of the application process we will indodcate to you how to best arrange your accommodation for the duration of your studies.'},
    { question:  'Can I bring my dependents?', answer:'Countries usually allow the dependents in, yes, but please note that they still need to file visas and submit a separate visa file. Their rights are usually different to yours as a student. Undergraduate students usually cant take dependents with them, whilst most postgraduate can.'},
  ];

  return (
    <div className="main-faq-container">
      <div className="main-faq-head">
        <h1 className="main-h1-faq-tag">FAQ</h1>
      </div>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
