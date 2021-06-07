import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';


function NameAuthor(){
  return <h2>Уи́льям Шекспи́р</h2>
}
function Birthday(){
  return <h5>Had born не позднее 26 апреля 1564 - die  23 апреля (3 мая) 1616</h5>
}

function Poem(){
  return <span>
  Комедии
  Основная статья: Комедии Уильяма Шекспира
  Всё хорошо, что хорошо кончается ‡
  Как вам это понравится
  Комедия ошибок
  Бесплодные усилия любви
  Мера за меру ‡
  Венецианский купец
  Виндзорские насмешницы
  Сон в летнюю ночь
  Много шума из ничего
  Перикл *†
  Укрощение строптивой
  Буря *
  Двенадцатая ночь
  Два веронца
  Два знатных родича *†
  Зимняя сказка *</span>
}


function Button(props){

  const [curValue, setCutValue] = useState(props.startVal)
  
  function btClick(){    
    setCutValue(curValue + props.inCVal);
  }
  return <button onClick={btClick}>{curValue}</button>;
}


function Button2(props) {
  const handlerClick = () => {
    props.onClickAct(props.currentValue);
  };
  return (
    <button
      className="Button"
      onClick={handlerClick}
    >
      {props.currentValue}
    </button>
  );
}

function DisplayBlock2(props) {

  return (
    <div class="DisplayBlock" >
      {props.currentValue}
    </div>
  );
}


function App() {
  let newVal = 2;

  const [displayCValue, setDisplayCValue] = useState(0);
  const stateFunc = newCValue => {setDisplayCValue( displayCValue + newCValue)};
  
  return (
    <div className="App">      
      <img src={logo} className="App-logo" alt="logo" />
      <NameAuthor />
      <Birthday />
      <Poem />
      <br/>

      <Button startVal ={0} inCVal= {newVal}/>
      <br/>

      <Button2 currentValue={10} text="10" onClickAct={stateFunc} />
       <Button2 currentValue={-100} text="-100" onClickAct={stateFunc} />
       <Button2 currentValue={25} text="25" onClickAct={stateFunc} />
       <DisplayBlock2 currentValue={displayCValue} />

    </div>
  );
}

export default App;
