import React from 'react';
const work1 = require('../images/work1.JPG');
const work2 = require('../images/work2.jpg');
const work3 = require('../images/work3.jpg');
const work4 = require('../images/work4.jpg');

export default function Work() {
  return (
    <div className='photo_wrapper'>
      <h3>Галерея</h3>
      <div className='photo'>
        <img src={work1} style={{width: '700px', height: '400px'}} alt=' '/>
        <img src={work2} style={{width: '550px', height: '400px'}} alt=' '/>
        <img src={work4} style={{width: '550px', height: '400px'}} alt=' '/>
        <img src={work3} style={{width: '700px', height: '400px'}} alt=' '/>
      </div>
    </div>
  );
}