import React from 'react';

const languages = ['Python', 'JavaScript', 'C', 'SQL', 'Java'];

const Programming = () => (
  <div className="section section--programming" id="programming">
    <div className="section__inner">
      <div className="section__title">
        <h2>程式語言</h2>
      </div>
      <div className="section__content">
        <ul>
          {languages.map(l => <li key={l}>{l}</li>)}
        </ul>
      </div>
    </div>
  </div>
);

export default Programming;
