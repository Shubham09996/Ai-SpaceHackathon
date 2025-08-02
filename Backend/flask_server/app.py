from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from ultralytics import YOLO
import os
import cv2
import uuid

app = Flask(__name__)
CORS(app)

model = YOLO("best.pt")

OUTPUT_FOLDER = "outputs"
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    try:
        file = request.files["image"]
        input_path = os.path.join(OUTPUT_FOLDER, f"{uuid.uuid4().hex}_input.jpg")
        file.save(input_path)

        results = model(input_path)[0]
        image = cv2.imread(input_path)
        detections = []

        for box in results.boxes:
            x1, y1, x2, y2 = map(int, box.xyxy[0].tolist())
            conf = float(box.conf[0])
            cls_id = int(box.cls[0])
            class_name = model.names[cls_id]
            confidence = round(conf * 100, 2)

            cv2.rectangle(image, (x1, y1), (x2, y2), (255, 255, 0), 2)
            label = f"{class_name} {confidence:.2f}%"
            (label_width, label_height), _ = cv2.getTextSize(label, cv2.FONT_HERSHEY_SIMPLEX, 0.6, 2)
            cv2.rectangle(image, (x1, y1 - label_height - 10), (x1 + label_width, y1), (255, 255, 0), -1)
            cv2.putText(image, label, (x1, y1 - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 0, 0), 2)

            detections.append({
                "class": cls_id,
                "confidence": conf,
                "box": [x1, y1, x2, y2]
            })

        output_filename = f"{uuid.uuid4().hex}_detected.jpg"
        output_path = os.path.join(OUTPUT_FOLDER, output_filename)
        cv2.imwrite(output_path, image)

        return jsonify({
            "image_path": f"/image/{output_filename}",
            "detections": detections
        })

    except Exception as e:
        return jsonify({"error": "Prediction failed", "details": str(e)}), 500


@app.route("/image/<filename>")
def serve_image(filename):
    path = os.path.join(OUTPUT_FOLDER, filename)
    if os.path.exists(path):
        return send_file(path, mimetype="image/jpeg")
    return jsonify({"error": "Image not found"}), 404

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
