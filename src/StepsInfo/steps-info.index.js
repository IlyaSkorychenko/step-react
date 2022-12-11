import './steps-info.css';
import {useState} from "react";

export default function StepsInfo() {
  const [stepData, setStepData] = useState([]);
  const getSteps = async () => {
    try {
      const response = await fetch('http://localhost:3001/step');
      setStepData(await response.json());
    } catch {
      setStepData([]);
    }
  };

  return (
    <div className="wrapper">
      {
        !stepData.length
          ? <button className="fetch-btn" onClick={getSteps}>Fetch steps</button>
          : stepData.map(({word, number}, index) => (
            <div className="step-list__wrapper" key={index}>
              <span className="step-list__item">{word}</span>
              <span className="step-list__item">{number}</span>
            </div>
          ))
      }
    </div>
  );
}