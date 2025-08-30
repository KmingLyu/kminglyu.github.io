import React from 'react';

const Home = () => (
  <div className="home" id="home">
    <div className="home__inner">
      <div className="home__innerbox">
        <div className="home__intro">
          <h1>
            呂可名 <br />
            Keming Lyu
          </h1>
          <br />
          <p>
            畢業於長庚大學資訊工程學系研究所。曾參與網頁前後端開發、資料庫設計以及AI
            模型訓練部屬。
          </p>
        </div>
        <div className="home__contact">
          <div className="home__email" style={{ marginBottom: 10 }}>
            <span>keming0325@gmail.com</span>
          </div>
          <div className="home__icon-box">
            <div className="home__icon">
              <a href="https://www.facebook.com/profile.php?id=100004053970242"><i className="fa-brands fa-facebook" /></a>
            </div>
            <div className="home__icon">
              <a href="https://github.com/KmingLyu"><i className="fa fa-github" /></a>
            </div>
            <div className="home__icon">
              <a href="https://www.linkedin.com/in/keminglyu"><i className="fa fa-linkedin" /></a>
            </div>
            <div className="home__icon">
              <a href="mailto:keming0325@gmail.com"><i className="fa-regular fa-envelope" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
