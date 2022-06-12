import './offer.css';

function Offer ():JSX.Element {
  return (
    <section className="card__offer offer">
      <div className="offer__label-wrapper">
        <p className="offer__label">
          Москва, ШЕРЕМЕТЬЕВО
          <span className="offer__label-span"> (SVO)</span>
        </p>
        <p className="offer__label">
          ЛОНДОН, Лондон, Хитроу
          <span className="offer__label-span"> Хитроу (LHR)</span>
        </p>
      </div>
      <div className="offer__info info">
        <div className="info__timing">
          <p className="info__time">20:40</p>
          <p className="info__date">18 авг. вт</p>
          <p className="info__travel-duration">14 ч 45 мин</p>
          <p className="info__date">18 авг. вт</p>
          <p className="info__time">09:25</p>
        </div>
        <div className="info__steps-wrapper">
          <p className="info__steps">1 пересадка</p>
        </div>
        <p className="info__carrier">
          Рейс выполняет:
          <span className="info__carrier-name"> LOT Polish Airlines</span>
        </p>
      </div>
    </section>
  );
}

export default Offer;
