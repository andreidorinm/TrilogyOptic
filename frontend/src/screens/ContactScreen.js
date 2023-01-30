import React from 'react';
import { Link } from 'react-router-dom';
import './ContactButtons.css';
import locatie from './pictures/locatie.jpg';
import { Image } from 'react-bootstrap';
import './harta.css';

const ContactForm = () => {
  return (
    <>
      <h2
        style={{
          textAlign: 'center',
          maxWidth: '500px',
          margin: '0 auto',
          padding: '10px',
        }}
      >
        Ne puteti gasi aici
      </h2>
      <h2
        className="harta"
        style={{
          display: 'flex',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto',
          padding: '10px',
          marginTop: '-5px',
          marginBottom: '10px',
        }}
      >
        <Image src={locatie} fluid />
      </h2>
      <h2
        style={{
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto',
          padding: '10px',
          marginTop: '-5px',
          marginBottom: '15px',
        }}
      >
        <iframe
          className="harta"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.6386967879976!2d26.04600431552206!3d44.399537979102746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff9fbd8748cb%3A0x706de25df7c44563!2sTRILOGY%20OPTIC!5e0!3m2!1sro!2sro!4v1648063709434!5m2!1sro!2sro"
          width="700"
          height="400"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </h2>

      <h2
        style={{
          textAlign: 'center',
          maxWidth: '500px',
          margin: '0 auto',
          padding: '10px',
          marginTop: '5px',
          marginBottom: '10px',
        }}
      >
        <a href="https://www.facebook.com/trilogyoptic/">
          <div class="wrapper">
            <div class="icon facebook">
              <div class="tooltip">Facebook</div>
              <span>
                <i class="fab fa-facebook-f"></i>
              </span>
            </div>
          </div>
        </a>
      </h2>
      <h2 style={{
        display:'flex',
        justifyContent:'space-evenly'
      }}>Ne puteti suna aici</h2>
      <div style={{
        display:'flex',
        justifyContent:'space-evenly'
      }}>
        <h2
          style={{
          }}
        >
          0763685403
        </h2>
        <h2
          style={{
          }}
        >
          0763685403
        </h2>
      </div>
    </>
  );
};

export default ContactForm;

function onWheel(scrollVisibilityApiType) {
  const isThouchpad =
    Math.abs(React.WheelEvent.deltaX) !== 0 ||
    Math.abs(React.WheelEvent.deltaY) < 15;

  if (isThouchpad) {
    React.WheelEvent.stopPropagation();
    return;
  }

  if (React.WheelEvent.deltaY < 0) {
    scrollVisibilityApiType.scrollNext();
  } else if (React.WheelEvent.deltaY > 0) {
    scrollVisibilityApiType.scrollPrev();
  }
}
