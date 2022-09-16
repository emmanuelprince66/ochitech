import React from 'react'
import './brand.css';
import {  goggle, dropbox, slack, shopify, atlasssian } from './Imports';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={goggle} alt="goggle" />
      </div>
      <div>
        <img src={dropbox} alt="goggle" />
      </div>
      <div>
        <img src={slack} alt="goggle" />
      </div>
      <div>
        <img src={shopify} alt="goggle" />
      </div>
      <div>
        <img className='gpt3__altassian' src={atlasssian} alt="goggle" />
      </div>
    </div>
  )
}

export default Brand