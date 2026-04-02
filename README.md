# CloudParty 色系規範

本專案所有頁面（含 `camera/` 內工具頁）請統一使用與 `index.html` 相同的色系。

## 核心色票（Design Tokens）

```css
:root {
  --bg: #f6fbff;
  --card: #ffffff;
  --text: #0b1220;
  --muted: #4b5a77;
  --line: rgba(26, 60, 120, 0.12);
  --primary: #3aa0ff;
  --primary2: #7ad3ff;
  --accent: #4ff0c8;
  --shadow: 0 18px 60px rgba(10, 40, 90, 0.12);
  --shadow2: 0 10px 28px rgba(10, 40, 90, 0.10);
}
```

## 使用原則

1. 背景請使用 `--bg`，可搭配 `--primary` / `--primary2` / `--accent` 的低透明 radial gradient。
2. 卡片或面板底色請使用 `--card`，邊框請使用 `--line`。
3. 主要文字用 `--text`，次要文字用 `--muted`。
4. 主動作按鈕、重點區塊優先使用 `--primary` 與 `--primary2` 的漸層。
5. 強調點綴使用 `--accent`，避免新增不在色票內的高飽和顏色。
6. 陰影統一使用 `--shadow` / `--shadow2`，不要混用其他陰影色。

## camera 頁面補充

- `camera/dori_calc.html`
- `camera/dori_calc_2025.html`
- `camera/ai_analytics_calc.html`

以上頁面已改為此色票；後續新增 camera 工具頁請直接沿用本文件變數。
