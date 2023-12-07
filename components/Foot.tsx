import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { FaAmazon, FaApple, FaMicrosoft } from 'react-icons/fa';

const Foot = () => {
  return (
    <footer className="footer" id="about">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Task Flow</h3>
          <p>
          Task Flow - Simplifying Work, Resolving Bugs, and Enhancing Efficiency Since September, 2023. Founded by Abrar, MOHIUZZAMAN, Shahadat, and Sadia, our dedicated team envisions a seamless task and bug management experience for businesses worldwide. Task Flow is your go-to solution for navigating the intricacies of project management with ease. Join us in optimizing your workflow and achieving your project goals effortlessly.
          </p>
        </div>
        <div className="footer-section">
          <h3>Service We Offer</h3>
          <ul>
            <li>Task Management</li>
            <li>Bug Tracking</li>
            <li>Workflow Optimization</li>
            <li>Project Efficiency</li>
            <li>Seamless Collaboration</li>
            <li>User-Friendly Interface</li>
            <li>Innovative Solutions</li>
            <li>Customizable Workflows</li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <p>
              <FiMail className="contact-icon" />
              <span className="contact-text">Email: info@example.com</span>
            </p>
            <p>
              <FiPhone className="contact-icon" />
              <span className="contact-text">Phone: +088 01778097713</span>
            </p>
          </div>
          <div className="footer-section address" style={{ marginTop: '2em' }}>
            <h3>Address</h3>
            <p>
              <span className="contact-text">
                BRAC University
                <br />
                Kha 224 Bir Uttam Rafiqul Islam Avenue
                <br />
                Merul Badda, Dhaka 1212. Bangladesh
              </span>
            </p>
          </div>
        </div>
        <div className="footer-section partner-section">
          <h3>Our Respective Partners</h3>
          <div className="partner-icons">
            <a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaAmazon className="partner-icon" />
            </a>
            <a
              href="https://www.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaApple className="partner-icon" />
            </a>
            <a
              href="https://www.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMicrosoft className="partner-icon" />
            </a>
        </div>
        </div>
      </div>
      <div className="follow-us">
        <div className="footer-content">
          <h3>Follow Us</h3>
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="icon" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Task Flow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Foot;