import React from 'react';

const achievements = ['多益藍色證書 (795 分)', '大學生程式能力檢定 CPE 4 題 (4.5%)'];

const Achievements = () => (
  <div className="section section--achievements" id="achievements">
    <div className="section__inner">
      <div className="section__title">
        <h2>成就與認證</h2>
      </div>
      <div className="section__content">
        <ul>
          {achievements.map(a => <li key={a}>{a}</li>)}
        </ul>
      </div>
    </div>
  </div>
);

export default Achievements;
