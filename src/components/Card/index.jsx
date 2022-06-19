import React, { useState } from "react";
import "./index.scss";
import catPng from "../../assets/img/cat.png";

const Card = ({ data }) => {
  const [dataCards, setDataCards] = useState(data);
  const [firstLeaveAfterClickMaybe, setFirstLeaveAfterClickMaybe] = useState(false);

  const onMouseLeaveHandler = (id) => {
    const newData = dataCards.map((card) => {
      if (card.id === id && card.disabled === true) {
        return card;
      }
      if (card.id === id && firstLeaveAfterClickMaybe === true) {
        card.isFirstClick = false;
        card.selected = true;
        setFirstLeaveAfterClickMaybe(false);
      }
      return card;
    });
    setDataCards([...newData]);
  };

  const onClickCardHandler = (id) => {
    const newData = dataCards.map((card) => {
      if (card.id === id && card.disabled === true) {
        return card;
      }
      if (card.id === id) {
        if (card.isFirstClick === true) {
            setFirstLeaveAfterClickMaybe(true);
          return card;
        }
        card.selected = !card.selected;
      }
      return card;
    });
    setDataCards([...newData]);
  };

  const onClickTextHandler = (id) => {
    onClickCardHandler(id);
    onMouseLeaveHandler(id)
  };
 
  return (
    <div className="main-block">
      {dataCards.map((card) => (
        <div key={card.id} className="main-block__item">
          <div
            onMouseLeave={() => {
              onMouseLeaveHandler(card.id);
            }}
            onClick={() => onClickCardHandler(card.id)}
            className={
              card.disabled
                ? "item__info disabled"
                : card.selected
                ? "item__info selected"
                : "item__info"
            }
          >
            <div className="item__info-title">
              <div className="corner"></div>
              <div className="rectangle">
                <span>Сказачное заморское яство</span>
              </div>
            </div>
            <div className="item__info-subtext">
              <h2>
                Нямушка <span>{card.title}</span>
              </h2>
              {card.subtitles.map((title, index) => (
                <span key={index}>{title}</span>
              ))}
              <div className="item__info-subtext-img">
                <img src={catPng} alt="cat png"></img>
              </div>
              <div className="item__info-subtext-weight">
                <span>{card.weight}</span>
                <span>кг</span>
              </div>
            </div>
          </div>
          <div className="item__subtext">
            {card.selected ? (
              <span className="selected">{card.subtext}</span>
            ) : card.disabled ? (
              <span className="disabled">
                Печалька, {card.title} закончился
              </span>
            ) : (
              <span>
                Чего сидишь? Порадуй котэ,{" "}
                <span
                  className="item__subtext-buy"
                  onClick={() => onClickTextHandler(card.id)}
                  onMouseLeave={() => {
                    onMouseLeaveHandler(card.id);
                  }}
                >
                  купи
                </span>
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Card);
