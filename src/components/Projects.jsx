import React from 'react';

const projects = [
  {
    title: '即時多語言語音辨識與語者分段標記系統',
    url: 'https://github.com/KmingLyu/real-time-speaker-diarization-asr.git',
    img: 'https://github.com/KmingLyu/real-time-speaker-diarization-asr/raw/main/rt_asr_sd_demo.gif',
    desc: '一個能夠即時識別不同語者並辨識其說話內容的系統。',
    tags: ['Python', 'PyTorch', 'OpenAI Whisper', 'HTML', 'CSS'],
  },
  {
    title: '2023年長庚大學尾牙抽獎系統',
    url: 'https://github.com/KmingLyu/cgu-prizesystem2023.git',
    img: 'https://github.com/KmingLyu/cgu-prizesystem2023/raw/main/static/images/select_winner.png',
    desc: '建立完整資料庫紀錄獎品、參加者以及得獎名單，包含輸入獎品、輸入得獎人員以及查詢得獎名單等功能，取代傳統耗費人力的抽獎方式。',
    tags: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
  },
  {
    title: '線上影片字幕生成器',
    url: 'https://github.com/KmingLyu/asr-captioner.git',
    img: 'https://github.com/KmingLyu/asr-captioner/raw/main/asr-captioner.png',
    desc: '上傳影片或youtube連結，運用先進的語音辨識與翻譯模型，自動生成字幕並翻譯成英文。',
    tags: ['Python', 'Flask', 'OpenAI Whisper', 'Celery', 'Docker', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: '名畫搜尋資料庫',
    url: 'https://github.com/KmingLyu/world-famous-paintings-search-system.git',
    img: 'https://github.com/KmingLyu/world-famous-paintings-search-system/raw/main/result.png',
    desc: '收錄世界著名繪畫作品，提供使用關鍵字、年份、繪畫尺寸以及圖片顏色等方式搜尋。',
    tags: ['Python', 'PHP', 'MySQL'],
  },
  {
    title: '古嚴寺youtube頻道影片資料庫',
    url: 'https://github.com/KmingLyu/ksguyanytdb.git',
    img: 'https://github.com/KmingLyu/ksguyanytdb/raw/main/ksguyanytdb.png',
    desc: '收錄古嚴寺youtube影片，使用關鍵字查詢影片與播放清單，以及該影片的字幕檔。字幕檔使用whisper語音辨識自動生成。',
    tags: ['Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: '前端線上影片字幕產生器',
    url: 'https://github.com/KmingLyu/frontend-automatic-subtitle-generator.git',
    img: 'https://github.com/KmingLyu/frontend-automatic-subtitle-generator/raw/main/images/demo2.png',
    desc: '使用javascript串接openai-api進行語音辨識，不需使用後端伺服器即可完成影片字幕生成。',
    tags: ['OpenAI Whisper', 'HTML', 'CSS', 'JavaScript'],
  },
];

const Projects = () => (
  <div className="section section--projects" id="project">
    <div className="section__inner">
      <h2 className="section__title">作品集</h2>
      <div className="section__content">
        <div className="projects">
          {projects.map(p => (
            <div className="projects__item" key={p.title}>
              <a href={p.url}>
                <img src={p.img} alt={p.title} className="projects__image" />
                <h3 className="projects__title">{p.title}</h3>
                <div className="projects__description">{p.desc}</div>
                <div className="projects__technologies">
                  {p.tags.map(t => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </a>
            </div>
          ))}
        </div>
        <a
          href="https://github.com/KmingLyu"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          更多作品...
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
