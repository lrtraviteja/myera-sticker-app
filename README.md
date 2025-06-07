# MyEra-sticker-app-assignment

A playful web app built with **React** and **react-konva** that lets you place, drag, and delete stickers on a canvas — all in your browser! No backend needed.
 
> 📦 [GitHub Repo](https://github.com/lrtraviteja/myera-sticker-app.git)

---

## ✨ Features

- 🖼️ 600 × 400 pixel canvas
- 😊 Add fun emoji-style stickers
- ✋ Drag stickers freely
- 🎯 Snap to 40px grid
- ❌ Double-click to delete a sticker
- 💾 Download canvas as PNG image

---

## 🛠️ Tech Stack

- ⚛️ **React** – UI Framework  
- 🖌️ **react-konva** – Canvas rendering in React  

---

## 🚀 Getting Started

### Clone the repo

```bash
git clone https://github.com/lrtraviteja/myera-sticker-app.git
cd myera-sticker-app-assignment
```

### Install dependencies and run

```bash
npm install
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

---

## 📁 Project Structure

```
myera-sticker-app-assignment/
├── .gitignore
├── package.json
├── README.md
├── public/
│   ├── index.html
│   ├── robots.txt
│   └── stickers/
│       ├── christmas-decoration.png
│       ├── detective.png
│       └── gun.png
└── src/
    ├── App.css
    ├── App.js
    ├── index.css
    ├── index.js
    └── components/
        ├── Canvas.js
        └── StickerButton.js
```

---

## 🖱️ How it Works

- **Add Stickers:** Click a sticker to place it on the canvas.
- **Move Stickers:** Drag stickers; they snap to a 40px grid.
- **Delete Stickers:** Double-click a sticker to remove it.
- **Download:** Save your canvas as a PNG image.

Enjoy creating your own sticker art!