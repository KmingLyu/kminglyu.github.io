import React from 'react';

const Publish = () => (
  <div className="section section--publish" id="publish">
    <div className="section__inner">
      <h2 className="section__title">發表</h2>
      <div className="section__content">
        <h3 className="section__publish-category">碩士論文</h3>
        <div className="section__publish-item">
          <p>
            <a
              href="https://thesis.lib.cgu.edu.tw/detail/33615d87dda5fed3f798a9944163804f/"
              target="_blank"
              rel="noopener noreferrer"
            >
              以 Whisper 模型多語言語音辨識與分段之即時語者分段標記系統<br />
              Real-Time Speaker Diarization System Based on Whisper
              Multilingual Speech Recognition and Segmentation
            </a>
          </p>
        </div>
        <h3 className="section__publish-category">期刊</h3>
        <div className="section__publish-item">
          <p>
            <a
              href="https://peerj.com/articles/cs-1973/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Real-time multilingual speech recognition and speaker
              diarization system based on Whisper segmentation
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Publish;
