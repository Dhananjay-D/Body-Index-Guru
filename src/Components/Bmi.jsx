import React, { useState } from "react";
import "./Bmi.css"; // Import the CSS file

export default function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      setShowResult(false);
      setStatus("Please enter valid weight and height.");
      return;
    }

    const bmi = w / Math.pow(h, 2);
    setBmi(bmi);
    setShowResult(true);

    if (bmi < 18.5) {
      setStatus("Underweight");
      setMessage(
        "Being underweight may pose certain health risks, including nutrient deficiencies and hormonal changes. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks. A person should consult with their healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve their health indicators.\n\nFor this height, a weight range of 50.4–67.8 kg is a normal BMI."
      );
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setStatus("Normal / Healthy Weight");
      setMessage(
        "Maintaining a healthy weight may lower the risk of developing certain health conditions, including cardiovascular disease and type 2 diabetes. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks.\n\n For this height, a weight range of 50.4–67.8 kg is a normal BMI."
      );
    } else if (bmi >= 25.0 && bmi <= 29.9) {
      setStatus("Overweight");
      setMessage(
        "Being overweight may increase the risk of certain health conditions, including cardiovascular disease, high blood pressure, and type 2 diabetes. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks. A person should consult with their healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve their health indicators.\n\nFor this height, a weight range of 50.4–67.8 kg is a normal BMI."
      );
    } else {
      setStatus("Obese");
      setMessage(
        "People with obesity have an increased risk of cardiovascular disease, type 2 diabetes, high blood pressure, and other health conditions. Waist-to-hip ratio, waist-to-height ratio, and body fat percentage measurements can provide a more complete picture of any health risks. A person should consult with their healthcare provider and consider making lifestyle changes through healthy eating and fitness to improve their health indicators.\n\nFor this height, a weight range of 50.4–67.8 kg is a normal BMI."
      );
    }

    setWeight("");
    setHeight("");
  };

  return (
    <>
      <div className="header">
        <h2>Body Index Guru 💪🏻</h2>
      </div>
      <div className="my-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={(e) => handleSubmit(e)} className="bmi-form">
                <div className="form-group">
                  <label className="label">Enter your weight (in kg)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    step="0.01"
                  />
                </div>
                <div className="form-group">
                  <label className="label">Enter your height (in meters)</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    step="0.01"
                  />
                </div>
                <button
                  type="submit"
                  className="sbutton btn btn-primary mt-3 mb-2"
                >
                  Calculate
                </button>
              </form>
              {showResult && (
                <div className="alertBox alert alert-info mt-3">
                  <p className="result" style={{ fontWeight: "bolder" }}>
                    BMI: {bmi.toFixed(2)} ({status})
                  </p>
                  <p className="result">
                    {" "}
                    {message.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// toFixed(2) is a method used to format that number as a string with two decimal places.
