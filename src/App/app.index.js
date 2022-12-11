import './app.css';
import logo from '../logo.svg';
import CustomInput from "../CustomInput/custom-input.index";
import {useState} from "react";
import StepsInfo from "../StepsInfo/steps-info.index";

export default function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="app">
      <StepsInfo />
      <CustomInput currentValue={inputValue} setValue={setInputValue}/>
      {inputValue === 'step'
        ? <img src={logo} alt="step-logo"/>
        : null
      }
    </div>
  );
}
