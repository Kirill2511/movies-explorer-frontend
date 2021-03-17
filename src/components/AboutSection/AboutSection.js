import React from 'react';
import PropTypes from 'prop-types';
import './AboutSection.css';

const AboutSection = ({ title, id }) => (
  <>
    <h2 id={id} className="about-section">
      {title}
    </h2>
    <div className="about-section__border" />
  </>
);

AboutSection.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default AboutSection;
