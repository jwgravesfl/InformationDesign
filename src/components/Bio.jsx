import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import resume from '../assets/Resume.jpg'
import resumePdf from '../assets/JGravesResume.pdf'


var sectionStyle = {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'none',
    paddingTop: '3em',
    paddingBottom: '2em',
    height: '60vh'
};

export default class Bio extends Component {
  render() {
    return (
      <div style={ sectionStyle }>
          <Image 
          style={ sectionStyle } 
          label='Click to Download a PDF Copy' 
          src={resume} 
          centered 
          as='a' 
          href={resumePdf}
          target='_blank'
           />
      </div>

    )
  }
}