import React, {useState, useRef} from "react";
import Title from "../Title/Title";
import "./Questions.css";

function Questions() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycby_BYT6LzPV3FZHn66CPeQcYu6bE5b3ZBjuvAoU08L_RdiIzQ7viRTg5mtfej77Y_iK/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setisFormVisible] = useState(true);

  const handleSubmit = (e) =>{
      e.preventDefault();
      setLoading(true);
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'questions');

      fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

  }).then(res => {
          setLoading(false);
          setisFormVisible(false);
      })
      .catch(err => console.log(err))
  }
  
  return (
    <section className="question" id="questions">
      <Title title={"Опрос"}/>

      { isFormVisible ?
        <div className="question__container">
          <p className="question__text">Чтобы все прошло идеально и этот день запомнился надолго, пожалуйста, ответьте на несколько вопросов</p>
          <form className="question__form" ref={formRef} onSubmit={handleSubmit}>
          <p className="question__string">
            <label htmlFor="who" className="question__label-input">ИМЯ И ФАМИЛИЯ:</label>
            <input type="text" name="Имя и Фамилия" id="who" required className="question__input" minLength={2}></input>
          </p>
          <fieldset className="question__string">Предпочтения по алкоголю:
            <label  htmlFor="wine white" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Вино белое" value="Вино белое" id="wine white"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Вино белое</span>
            </label>
            <label htmlFor="wine red" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Вино красное" value="Вино красное" id="wine red"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Вино красное</span>
            </label>
            <label htmlFor="champagne" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Шампанское" value="Шампанское" id="champagne"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Шампанское</span>
            </label>
            <label htmlFor="congac" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Коньяк" value="Коньяк" id="congac"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Коньяк</span>
            </label>
            <label htmlFor="vodka" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Водка" value="Водка" id="vodka"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Водка</span>
            </label>
            <label htmlFor="no alco" className="question__label">
              <input className="question__unvisible" type="checkbox" name="Безалкогольные напитки" value="Безалкогольные напитки" id="no alco"></input>
              <span className="question__visible-checkbox"></span>
              <span className="question__text-span">Безалкогольные напитки</span>
            </label>
          </fieldset>
          <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "Отправка..." : "Отправить"}</button>
        </form> 
      </div>
      :
      <p className="question__text">Форма отправлена!</p>
      }
      
    </section>
  );
}

export default Questions;