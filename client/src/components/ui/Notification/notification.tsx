import React, {FunctionComponent as FC} from 'react'
//import CLOSE_IMG from '../../../assets/img/close.svg'
import './notification.scss'

interface INotificationSuccessProps {
	text: string
}

export const NotificationSuccess:FC<INotificationSuccessProps> = ({text}) => {
  return (
	<div className="notification-success">
		<div className="notification-success__content">
			<span className="notification-success__content__text">{text}</span>
			{/* <span className="notification-success__content__img"><img src={CLOSE_IMG} alt="close"/></span> */}
		</div>
	</div>
  );
};

interface INotificationErrorProps {
	text: string
}

export const NotificationError:FC<INotificationErrorProps> = ({text}) => {
	return (
	<div className="notification-error">
		<div className="notification-error__content">
			<span className="notification-error__content__text">{text}</span>
			{/* <span className="notification-error__content__img"><img src={CLOSE_IMG} alt="close"/></span> */}
		</div>
	</div>
	);
};