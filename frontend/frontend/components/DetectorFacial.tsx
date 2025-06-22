"use client";
import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

export default function DetectorFacial() {
  const [formato, setFormato] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const carregarModelos = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
    };

    carregarModelos();
  }, []);

  const analisarImagem = async () => {
    if (imgRef.current) {
      const detections = await faceapi
        .detectSingleFace(imgRef.current)
        .withFaceLandmarks();

      if (detections) {
        setFormato("oval");
      } else {
        setFormato("Rosto não detectado");
      }
    }
  };

  return (
    <div>
      <h3>Descubra qual joia combina com seu rosto</h3>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              if (imgRef.current) {
                imgRef.current.src = reader.result as string;
              }
            };
            reader.readAsDataURL(file);
          }
        }}
      />
      <img ref={imgRef} onLoad={analisarImagem} alt="preview" width={300} />
      {formato && <p>Formato detectado: {formato}</p>}
    </div>
  );
}
