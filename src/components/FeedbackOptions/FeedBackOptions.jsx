import { PiSmileyThin, PiSmileyMehThin, PiSmileySadThin } from 'react-icons/pi';
import { FeedbackOptionsStyle, FeedBackOptionsSlyleButton } from './FeedBackOptionsStyle';


const icons = {
	good: PiSmileyThin,
	neutral: PiSmileyMehThin,
	bad: PiSmileySadThin,
}

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<FeedbackOptionsStyle>
			{options.map(option => {
				const Icon = icons[option];
				return (
					<FeedBackOptionsSlyleButton
						key={option}
						type="button"
						name={option}
						onClick={() => onLeaveFeedback(option)
						}
					>
						{Icon && <Icon />}{option}
					</FeedBackOptionsSlyleButton>
				);
			})}
		</FeedbackOptionsStyle>
	);
};