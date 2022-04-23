import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) { 
    return (
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total()}</li>
            <li>Positive feedbacks: {positivePercentage()}%</li>
        </ul>
    )
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func
}