import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, ButtonGroup, Box, Alert } from '@mui/material';

function App() {
  const [rejected, setRejected] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [days, setDays] = useState(0);

  useEffect(() => {
    dateCounter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buildMain = () => {
    if (confirmed === false){
      return buildFirst();
    }
    else{
      return buildConfirm();
    }
  }

  const buildFirst = () => {
    return(
      <div>
        <Box>{buildFirstImage()}</Box>               
      <div>
        {rejected && <Alert sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}severity="error">Эта кнопка существует исключительно из вежливости, она не принимает ответ(и я тоже)</Alert>}
        <Box>{buildButtons()}</Box>
      </div>
        <div>
        </div>
      </div>
    )
  }
  const buildFirstImage = () => {
    if (rejected === false){
      return (
        <img src="https://www.marthastewart.com/thmb/g-FunKfdiZombJQ7pB4wb8BF4C8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-kitten-138468381-4cd82b91d7be45cb9f9aa8366e10bce4.jpg" alt="kitten"></img>
      )
    }
    else{
      return(
        <img src="https://i.imgflip.com/2lqgbn.jpg"  alt="sadKitten"></img>
      )
    }
  }

  const buildButtons = () => {
    return (
      <ButtonGroup size="large" aria-label="Small button group">
        <Button variant="contained" color="success" onClick={clickConfirm}>Да</Button>
        <Button variant="contained" color="error" onClick={clickReject}>Нет</Button>
      </ButtonGroup>
    )
  }

  const clickReject = () => {
    setRejected(true);
    setTimeout(() => {
      setRejected(false);
    }, 7000);
  }

  const buildConfirmImage = () => {
    return (
      <img src="https://www.shutterstock.com/image-photo/2-sleepy-kittens-paws-sleep-600nw-1912271596.jpg" alt="loveKittens"></img>
    )
  }

  const clickConfirm = () => {
    setConfirmed(true);
  }

  const clickReturn = () => {
    setConfirmed(false)
  }

  const buildConfirm = () => {
    return(
      <div>
        <Box>{buildConfirmImage()}</Box>               
      <div>
        {confirmed && <Alert sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}severity="success">Я тоже согласен</Alert>}
        <Box><Button variant="contained" color="secondary" onClick={clickReturn}>Вернуться на главную</Button></Box>
      </div>
        <div>
          <p>Список вещей за которые я тебя люблю:</p>
          <ul>
            <li>Ты самая красивая на этой планете</li>
            <li>У тебя очень нежные руки</li>
            <li>Ты постоянно даришь мне частичку себя (волосы)</li>
            <li>У тебя замечательные родители</li>
            <li>Ты очень заботливая</li>
            <li>У тебя замечательная улыбка</li>
            <li>Ты никогда не возвражаешь против моего музыкального вкуса</li>
            <li>Ты всегда меня поддерживаешь</li>
            <li>Ты готовишь мне еду</li>
            <li>Тебе нравится приготовленная мною еда</li>
            <li>Ты любишь острые соусы</li>
            <li>Мне хочется проводить с тобой все своё время</li>
          </ul>
        </div>
        <h2>Я правда очень сильно люблю тебя, я счастлив проводить каждый из {days} дней с тобой</h2>
      </div>
    )
  }

  const startDate = new Date('2023-04-22');

  const dateCounter = () => {
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    const daysCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setDays(daysCount);
  }

  return (
    <div className="App">
      <header role="heading" aria-level={1} className="App-header">
        <p>
          Ты будешь моей валентинкой?
        </p>
      </header>
      <Box>{buildMain()}</Box>
    </div>
  );
}

export default App;
