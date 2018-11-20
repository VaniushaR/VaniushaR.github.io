import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <footer className="footer-style">
          <h3 className="subtitle footer-txt">Send me an email!</h3>
          <button className="footer-btn">
            <a
              className="ancor-footer"
              href="mailto:vaniusha.ra@gmail.com?Subject=Hello!%20nice%20to%20meet%20you,%20sure%20we%20could%20work%20together%20and%20find%20a%20tec%20solution%20for%20you."
            >
              <i className="fas fa-envelope-open-text fa-3x" />
            </a>
          </button>
        </footer>
      </div>
    );
  }
}
export default Contact;
