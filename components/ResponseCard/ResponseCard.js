import './ResponseCard.scss';
import { useState } from 'react';

const ResponseCard = ({ response, color }) => {
  const [selected, setSelected] = useState(false);

  const border = `1px solid ${color}`;
  const activeColor = '#FFF';
  const activeBackground = color;

  const onRadioChange = event => setSelected(event.target.value === response.content);

  return (
    <label style={selected ? { border, color } : { border, color: activeColor, background: activeBackground}}>
      <input type="radio" name="response" value={response.content} onChange={onRadioChange} />
      {response.content} 
    </label>
  );
}

export default ResponseCard;
