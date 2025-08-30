# 個人網站 (React 版)

此版本已將原本單一 `index.html` 靜態頁面重構為以 Vite + React 為基礎的元件化架構，保留既有版面與樣式 (`style.css`)。

## 結構概述
- `index.html`：Vite 入口，掛載 React root
- `style.css`：沿用原始樣式
- `src/`：React 原始碼
  - `main.jsx`：入口
  - `App.jsx`：主組件，組合各 Section
  - `components/`：各區塊元件 (Header, Home, Experience, Publish, Skills, Programming, Achievements, Projects, Footer)

## 開發
```bash
npm install
npm run dev
```

## 建置
```bash
npm run build
npm run preview
```

## 後續可改進建議
- 資料抽離成 `data/*.js` 或 JSON 以便維護
- 導航加入 IntersectionObserver 自動高亮
- 加入 i18n (例如 react-i18next)
- 將清單內容改為 Markdown 來源或 CMS (Notion / Contentful)
- 加入 ESLint + Prettier 統一程式風格

## 授權
僅供個人作品集使用。
