import React from 'react';

const skillGroups = [
  {
    title: '人工智慧與深度學習',
    items: ['語音辨識', '語者分段標記 (Speaker Diarization)', '自然語言處理', '深度學習模型設計與訓練'],
  },
  {
    title: '網頁開發',
    items: ['前端：HTML, CSS, JavaScript', '後端：Python Flask, Node.js', '資料庫處理：MySQL, Firebase, MongoDB'],
  },
  {
    title: '系統架構與部署',
    items: ['Linux 系統', 'Docker 容器化技術', 'AI 服務架設與部署', '微服務架構設計', '後端排程系統設計', '任務隊列管理 (Celery)', '定時任務排程 (Cron jobs)'],
  },
];

const Skills = () => (
  <div className="section section--skills" id="skill">
    <div className="section__inner">
      <h2 className="section__title">技能</h2>
      <div className="section__content">
        <div className="skills">
          {skillGroups.map(g => (
            <div className="skills__item" key={g.title}>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map(it => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
