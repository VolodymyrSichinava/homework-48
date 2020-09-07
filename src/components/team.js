import React from 'react';
import data from '../data.json';

export default function Team() {
  return (
    <div className='team_wrapper'>
      <div className='content_team'>
        <div className="title">
          <h3>Наша команда</h3>
        </div>
        <div className='ceo'>
          <img src={'https://lms.ithillel.ua/uploads/images/image-1579520889023.jpeg?width=200&height=200'} alt='CEO'/>
          <p>Сергей Замошников</p>
          <span>CEO, Principal Software Engineer</span>
        </div>
        <div className='team'>
          {data.students.map(item => (
            <div key={item._id} className='person'>
              <img src={item.img} style={{width: '150px', borderRadius: '50%'}} alt='team'/>
              <div className='name'>
                {item.first_name + ' ' + item.last_name}
              </div>
              <div className='prof'>
                {item.prof}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}