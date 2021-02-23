import React from 'react'
import PropTypes from 'prop-types'
import './SectionAbout.css'

const SectionAbout = ({ title, id }) => (
  <>
    <h2 id={id} className="section-about">
      {title}
    </h2>
    <div className="section-about__border" />
  </>
)

SectionAbout.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
export default SectionAbout
