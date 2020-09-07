import React from 'react';
import competence from '../competence.json';
let img = require('../images/ico_comp.png');
let mouse = require('../images/mouse.png');

export default function Competence() {
  return (
    <div className='comp_wrapper'>
      <div className='comp'>
        <h3>Наша специализация</h3>
        <div className='comp_text_wrapper'>
          {competence.competence.map(item => (
            <div key={item.id}>
              <div className='comp_text'>
                <div className='title'>
                  {item.title}
                </div>
                <div className='descr'>
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="img">
          {competence.competence.map(item => (
            <div key={item.id}>
              <div className='comp_img' style={{background: `url(${img}) ${item.img} 0 no-repeat`}}></div>
            </div>
          ))}
        </div>
        <div className='mouse'>
          <img src={mouse} alt='Mouse'/>
        </div>
      </div>
    </div>
  );
}