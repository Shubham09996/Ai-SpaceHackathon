# 🚀 AstroVision ✨  
An AI-powered safety detection system for space missions, built during the **BuildWithDelhi 2.0 Hackathon**.

> **Team:**  
> 👩‍💼 Ginni (Team Leader)  
> 👨‍💻 Shubham Gupta  
> 👨‍💻 Deepak Kumar Yadav

---

## 🔍 Problem Statement

In critical space and industrial environments, misplacing essential safety equipment like fire extinguishers or oxygen tanks can lead to catastrophic failures. Manual tracking is time-consuming and error-prone.

---

## 💡 Our Solution

We built **AstroVision**, a real-time object detection platform powered by YOLOv8, capable of identifying key safety objects from images uploaded by users or captured through surveillance. It ensures mission-critical safety gear is always accounted for — reducing human error and response time.

---

## ✨ Features

- 🔍 Real-time image-based object detection
- 🎯 High accuracy (mAP@0.5: 97.6%)
- 🧭 Lightweight, fast, and scalable
- 📁 Clean UI with result preview
- 🌐 Web-based — accessible anywhere
- 🛰️ Optimized for industrial & space applications

---

### 🛰️ Detected Objects:
- 🧯 **Fire Extinguisher**
- 🧰 **ToolBox**
- 🪐 **Oxygen Tank**

With real-time detection and intuitive UI/UX, the platform is tailored for **MSMEs, defense, and space missions** where quick identification of equipment is crucial.

---

## 🗂️ Folder Structure

```
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
```


## ⚙️ Tech Stack

| Layer       | Tech Used                             |
|-------------|----------------------------------------|
| Frontend    | React.js + TailwindCSS + Vite         |
| Backend API | Node.js + Express                     |
| ML Server   | Flask + Ultralytics YOLOv8 (v8.3.172) |
| Deployment  | Frontend (Vercel) And Backend (Render)  |

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
- Microsoft × DSEU × Delhi Government — BuildWithDelhi 2.0
- Bhai Parmanand Institute of Business Studies


🧑‍💻 Developed with ❤️ by Team "Brain not! Found"
