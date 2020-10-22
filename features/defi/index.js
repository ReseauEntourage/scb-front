import './index.scss';
import { Markdown } from 'react-showdown';
import Link from 'next/link';
import backbtn from '../../static/images/back.svg';

const renderDefi = defi => {
  const parcours = defi.parcours;
  const gradientColor = parcours
    .map((parcour, index, items) => ({
      color: `#${parcour.color}`,
      start: Math.round(100 * index / items.length),
      end: Math.round(100 * (index+1) / items.length)
    }))
    .map(gradientItem => `${gradientItem.color} ${gradientItem.start}%, ${gradientItem.color} ${gradientItem.end}%`)
    .join(', ');

  return (
    <div className="defi">
      <div className="defi__header" style={{background: `linear-gradient(-45deg, ${gradientColor})`}}>
        <Link href={"/defis/"} as={"/defis"}>
          <img className="back-button" src={backbtn} />
        </Link>
        <h2>défi</h2>
        <h1>{defi.title}</h1>
      </div>

      <div className="defi__mardown"><Markdown markup={defi.content} /></div>
    </div>
  );
}

const renderEmptyDefi = () => <p>No Defi found</p>;

const Defi = ({ defi }) => defi ? renderDefi(defi) : renderEmptyDefi();

export default Defi;
