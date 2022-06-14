import './offer.css';
import {CarrierType, LegType} from '../../types/flight-type';
import {formatDateMMWW, formatTime, getFlightChangeName} from '../../common/utils';


type OfferPropsType = {
  leg: LegType,
  carrier: CarrierType,
}

function Offer ({leg, carrier}: OfferPropsType):JSX.Element {
  const {segments, duration, flightChange} = leg;
  const {departureDate, departureAirport, departureCity} = segments[0];
  const {arrivalDate, arrivalAirport, arrivalCity} = segments[segments.length - 1];
  const travelDuration = `${duration/60^0} ч ${duration % 60} мин`;

  return (
    <section className="card__offer offer">
      <div className="offer__label-wrapper">
        <p className="offer__label">
          {`${departureCity.caption}, ${departureAirport.caption}`}
          <span className="offer__label-span">{` ${departureAirport.uid}`}</span>
        </p>
        <p className="offer__label">
          {`${arrivalCity.caption}, ${arrivalAirport.caption}`}
          <span className="offer__label-span">{` ${arrivalAirport.uid}`}</span>
        </p>
      </div>
      <div className="offer__info info">
        <div className="info__timing">
          <p className="info__time">{`${formatTime(departureDate)}`}</p>
          <p className="info__date">{`${formatDateMMWW(departureDate)}`}</p>
          <p className="info__travel-duration">{travelDuration}</p>
          <p className="info__date">{`${formatDateMMWW(arrivalDate)}`}</p>
          <p className="info__time">{`${formatTime(arrivalDate)}`}</p>
        </div>
        <div className="info__steps-wrapper">
          <p
            className={`info__steps${flightChange === 0 ? ' visually-hidden' : ''}`}
          >
            {getFlightChangeName(flightChange)}
          </p>
        </div>
        <p className="info__carrier">
          Рейс выполняет:
          <span className="info__carrier-name">{` ${carrier.airlineCode} ${carrier.caption}`}</span>
        </p>
      </div>
    </section>
  );
}

export default Offer;
