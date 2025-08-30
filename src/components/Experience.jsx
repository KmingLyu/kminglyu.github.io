import React from 'react';

const experiences = [
  { date: '2017.09 - 2021.06', title: '中興大學 動物科學系' },
  { date: '2021.09 - 2024.01', title: '長庚大學 資訊工程學系 碩士' },
  { date: '2022.08 - 2024.01', title: '長庚大學 資訊工程學系 兼任研究助理' },
  { date: '2025.04 - 現在', title: '新捷能資訊股份有限公司 工程師' },
];

const Experience = () => (
  <div className="section section--experiences" id="experience">
    <div className="section__inner">
      <h2 className="section__title">學經歷</h2>
      <div className="section__content">
        <div className="timeline">
          {experiences.map(e => (
            <div className="timeline__event" key={e.date + e.title}>
              <div className="timeline__date">{e.date}</div>
              <div className="timeline__content">
                <h3>{e.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
