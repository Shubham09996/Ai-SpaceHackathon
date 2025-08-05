# AstroVision ✨

An AI-powered safety detection system for space missions, built during the BuildWithIndia 2.0 Hackathon.


---

## 🔠 Problem Statement

Astronauts rely on the availability of critical tools like fire extinguishers, oxygen tanks, and toolboxes to ensure operational safety. Any misplacement or unavailability can lead to life-threatening consequences.

---

## 🤖 Our Solution

AstroVision is an object detection system trained using a synthetic dataset from Falcon (Duality AI). It identifies essential equipment in space station environments in real-time using a custom YOLOv8 model.

---

## 🪀 Features

- Detects fire extinguisher, toolbox, oxygen tank
- Handles occlusion, lighting variations
- Friendly dashboard UI
- Alert system with voice + text
- Companion App Simulation
- Falcon retraining integration (conceptual)

---

## 🎓 Technologies Used

- YOLOv8 (Ultralytics)
- OpenCV
- Python
- Figma (UI design)
- Streamlit (for frontend simulation)
- Falcon by Duality AI (for dataset)

---

## 🔧 Installation Instructions



### Clone the Repository
```bash
git clone https://github.com/your-username/astroguard.git
cd astroguard
```

### Install Dependencies
```bash
pip install -r requirements.txt
```

### Run Frontend Simulation (Streamlit)
```bash
streamlit run app.py
```

---

## 🏠 Folder Structure
```
AstroVision/
├── app.py                  # Streamlit App
├── train.py                # YOLOv8 Training Script
├── predict.py              # YOLOv8 Inference Script
├── best.pt                 # Trained YOLOv8 Model
├── data.yaml               # Dataset Config
├── runs/                   # Training results, charts
├── assets/                 # UI Screenshots, demo media
├── README.md
└── requirements.txt
```

---

## 📊 Performance (Sample)
- mAP@0.5: 0.74
- Precision: 78%
- Recall: 80%
- Confusion Matrix: Available in `/runs/`

---

## 🎒 Bonus Use Case - AstroGuard Companion

- Detects missing tools
- Sends alerts (text + voice)
- Falcon used to auto-update models over time
- Mobile view for Earth-based team

---

## 🚀 Deployment (Streamlit Cloud)

> **Fastest Way:** Deploy frontend UI with fake logic on Streamlit

### Steps:
1. Push this repo to GitHub
2. Go to [Streamlit Cloud](https://streamlit.io/cloud)
3. Click **New App**
4. Choose your GitHub repo
5. Set `app.py` as the entry point
6. Click **Deploy**

App will be live at: `https://your-app-name.streamlit.app`

---

## 🖇 Future Scope

- Real-time backend with Jetson Nano
- Falcon loop retraining pipeline
- Anomaly detection
- Mobile App deployment

---

## 🙏 Acknowledgements

- Duality AI + Falcon for dataset
- Ultralytics for YOLOv8
- Hackathon Team and Mentors
