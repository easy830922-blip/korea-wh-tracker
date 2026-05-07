# 🇰🇷 Erin & Henry — Korea Working Holiday Tracker

2026 韓國打工度假（H-1）簽證申請進度追蹤網頁。

## 部署步驟

### 1. 建立 GitHub Repository

到 [github.com/new](https://github.com/new) 建立新 repo，名稱設為 `korea-wh-tracker`（或你喜歡的名字）。

### 2. 上傳程式碼

```bash
cd korea-wh-tracker
git init
git add .
git commit -m "init: Korea WH tracker"
git branch -M main
git remote add origin https://github.com/你的帳號/korea-wh-tracker.git
git push -u origin main
```

### 3. 啟用 GitHub Pages

1. 進入 repo → **Settings** → **Pages**
2. Source 選 **GitHub Actions**
3. Push 後會自動觸發部署

約 1-2 分鐘後，你的網站就上線了：
```
https://你的帳號.github.io/korea-wh-tracker/
```

### 4. 如果 repo 名稱不是 `korea-wh-tracker`

修改 `vite.config.js` 裡的 `base` 路徑：

```js
base: '/你的repo名稱/',
```

## 本地開發

```bash
npm install
npm run dev
```

## 功能

- Dashboard 儀表板：倒數計時、完成率、Phase 進度
- Tasks 任務管理：每項任務獨立 deadline、Erin/Henry 各自完成狀態、附件上傳
- Info 資訊查閱：簽證申請所有規定，支援搜尋
- 進度自動存在 localStorage
- 支援 light/dark mode
