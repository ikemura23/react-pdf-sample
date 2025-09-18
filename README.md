# React PDF Sample

React + TypeScript + Vite を使用した PDF ビューアーアプリケーションです。宅配業務の専用地図（test.pdf）をブラウザで表示し、配達員が効率的に配達情報を確認できることを目的としています。

## 🚀 デモ

**Live Demo**: [https://react-pdf-sample-git-main-k-ikemuras-projects.vercel.app/](https://react-pdf-sample-git-main-k-ikemuras-projects.vercel.app/)

## ✨ 主な機能

- **PDF 表示**: 宅配業務の専用地図（test.pdf）をブラウザで表示
- **座標ズーム表示**: メニューからクリックされたアイテムから PDF の指定座標をズーム表示
- **配達員メニュー**: サイドドロワーによる配達員リストと座標データ管理
- **レスポンシブ対応**: PC およびスマートフォンでの表示に対応
- **デバッグ機能**: 開発時の情報表示とデバッグ支援

## 🛠️ 技術スタック

- **フレームワーク**: React 19.1.1
- **言語**: TypeScript 5.8.3
- **ビルドツール**: Vite 7.1.6
- **リンター・フォーマッター**: Biome 2.2.4
- **PDF 表示**: [react-pdf](https://github.com/wojtekmaj/react-pdf) - PDF を画像のように簡単に表示
- **PDF.js Worker**: pdfjs-dist (最新版、.mjs 拡張子対応)
- **静的ファイルコピー**: vite-plugin-static-copy (cMap ファイル用)

## 📁 プロジェクト構造

```
react-pdf-sample/
├── src/
│   ├── App.tsx              # メインアプリケーションコンポーネント
│   ├── App.css              # アプリケーションスタイル
│   ├── main.tsx             # エントリーポイント
│   ├── index.css            # グローバルスタイル
│   ├── components/          # Reactコンポーネント
│   │   ├── PdfViewer.tsx    # PDF表示コンポーネント
│   │   ├── AppHeader.tsx    # アプリケーションヘッダー
│   │   ├── Drawer.tsx       # サイドドロワーメニュー
│   │   ├── DebugDisplay.tsx # デバッグ情報表示
│   │   ├── ErrorDisplay.tsx # エラー表示
│   │   └── LoadingDisplay.tsx # ローディング表示
│   ├── data/
│   │   └── menuItems.ts     # メニューアイテムデータ
│   └── types/
│       └── index.ts         # TypeScript型定義
├── public/                  # パブリックファイル
│   ├── test.pdf             # 宅配業務専用地図PDF
│   └── nakano.pdf           # 追加のPDFファイル
└── dist/                    # ビルド出力
```

## 🚀 セットアップ

### 前提条件

- Node.js 18.0.0 以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/your-username/react-pdf-sample.git
cd react-pdf-sample

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
# 開発サーバーを起動
npm run dev

# ブラウザで http://localhost:5173 を開く
```

### ビルド

```bash
# プロダクションビルド
npm run build

# ビルド結果をプレビュー
npm run preview
```

## 📋 利用可能なコマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果をプレビュー
npm run preview

# リントチェック
npm run lint

# リント自動修正
npm run lint:fix

# コードフォーマット
npm run format

# フォーマットチェック
npm run format:check

# リントとフォーマットの両方をチェック
npm run check

# リントとフォーマットの両方を自動修正
npm run check:fix

# ビルド + ZIP ファイル作成
npm run build:zip
```

## 🎯 使用方法

1. **PDF 表示**: アプリケーションを起動すると、`test.pdf` が自動的に表示されます
2. **メニュー操作**: 左上のハンバーガーメニューをクリックしてサイドドロワーを開きます
3. **座標ズーム**: 配達員名をクリックすると、該当する座標に自動的にズーム表示されます
4. **デバッグ情報**: 開発時は右下にデバッグ情報が表示されます

## 🔧 カスタマイズ

### 配達員データの追加

`src/data/menuItems.ts` ファイルを編集して配達員データを追加できます：

```typescript
export const menuItems: MenuItem[] = [
  { name: '配達員名', coordinates: { x: 1000, y: 500 } },
  // 追加の配達員データ...
]
```

### PDF ファイルの変更

`public/` ディレクトリに新しい PDF ファイルを配置し、`src/App.tsx` の `file` プロパティを変更してください：

```typescript
<PdfViewer
  file="/your-new-pdf.pdf"  // 新しいPDFファイル名
  // その他のプロパティ...
/>
```

## 🐛 トラブルシューティング

### PDF が表示されない場合

1. PDF ファイルが `public/` ディレクトリに正しく配置されているか確認
2. ブラウザのコンソールでエラーメッセージを確認
3. PDF ファイルが破損していないか確認

### 座標ズームが動作しない場合

1. ブラウザのコンソールでエラーメッセージを確認
2. 座標データが正しい形式で入力されているか確認
3. PDF の読み込みが完了しているか確認
