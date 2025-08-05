# 🚀 AI-SpaceHackathon: Smart Object Detection Platform

### A project built for the BuildWithDelhi 2.0 Hackathon Finale at Microsoft Office, Gurugram 🏢

> **Team:**  
> 👩‍💼 Ginni (Team Leader)  
> 👨‍💻 Shubham Gupta  
> 👨‍💻 Deepak Yadav

---

## 🧠 Project Overview

This project is an AI-powered web platform designed to **detect and classify critical objects** used in industrial and space environments using a custom-trained YOLOv8 model.

### 🛰️ Detected Objects:
- 🧯 **Fire Extinguisher**
- 🧰 **ToolBox**
- 🪐 **Oxygen Tank**

With real-time detection and intuitive UI/UX, the platform is tailored for **MSMEs, defense, and space missions** where quick identification of equipment is crucial.

---

## 🗂️ Folder Structure

AI-SPACEHACKATHON/
└── AI-Hackathon-MS/
    ├── Backend/
    │   ├── flask_server/            ← YOLOv8 model inference (Python + Flask)
    │   ├── node_server/             ← Acts as bridge between frontend and Flask
    │   └── .gitignore
    ├── Frontend\Ai-SpaceHackathon/
    │   ├── public/                  ← Static assets
    │   ├── src/
    │   │   ├── assets/              ← UI images, logos
    │   │   ├── components/          ← React components (Upload, Result, etc.)
    │   │   ├── App.jsx              ← Root component
    │   │   ├── index.css            ← Global styles
    │   │   └── main.jsx             ← Entry point for Vite
    │   ├── .gitignore
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── README.md
    │   └── vite.config.js
    └── README.md


## ⚙️ Tech Stack

| Layer       | Tech Used                             |
|-------------|----------------------------------------|
| Frontend    | React.js + TailwindCSS + Vite         |
| Backend API | Node.js + Express                     |
| ML Server   | Flask + Ultralytics YOLOv8 (v8.3.172) |
| Deployment  | (Can be: Render / Railway / Vercel)   |

---

## 🧪 Model Performance

| Metric          | Score     |
|-----------------|-----------|
| Precision       | 0.999     |
| Recall          | 0.963     |
| mAP@0.5         | 0.976     |
| mAP@0.5:0.95    | 0.947     |
| Inference Time  | ~5.5 ms   |

> 📌 Trained using 400+ custom-labeled images on 3 classes with YOLOv8s.

---

## 🌐 How It Works

1. **User uploads image** from browser
2. React app sends it to **Node.js server**
3. Node relays the image to **Flask server** hosting the YOLOv8 model
4. Flask processes image → returns prediction + annotated image
5. Result shown on UI with bounding boxes and labels

---

## 📦 Installation & Run Locally

### Backend Setup

```bash
cd Backend/flask_server
pip install -r requirements.txt
python app.py


🎯 Future Scope
🌐 Support multiple object detection models (like YOLOv9, SSD, etc.)

🧪 Add real-time webcam detection

📲 Deploy as mobile PWA

📦 Train with larger datasets from industrial areas


## 🤝 Acknowledgements

- Ultralytics YOLOv8
- BuildWithDelhi 2.0 — An 8-hour hackathon organized by Devnovate in collaboration with Microsoft
- Bhai Parmanand Institute of Business Studies


🧑‍💻 Developed with ❤️ by Team "Brain not! Found"