import './BackgroundImage.scss';
import { useEffect, useState} from 'react';

const BackgroundImage = ({ mobile_img, desktop_img }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth))
    }
  }, [])

  return <div className="background-container">
    { width > 992 
      ? <img className="background-image" src={`http://localhost:1337${desktop_img}`} alt="" />
      : <img className="background-image" src={`http://localhost:1337${mobile_img}`} alt="" />
    }
  </div>
}

export default BackgroundImage;
