import './index.scss';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import DefiCard from '../../components/DefiCard/DefiCard';
import { MessengerIcon, WhatsappIcon } from '../../components/Icons/Icons';
import { getParcour } from '../../services';

const Conclusion = ({ slug }) => {
  debugger;
  const parcour = getParcour(slug);
  if (!parcour) { return (<div>...</div>); }

  const color = `#${parcour.color}`;
  const defis = parcour.defis.map((defi, key) => <DefiCard key={key} defi={defi} />);

  return (
    <div className="conclusion-container">
      <div className="conclusion__defis">
        <h2 className="defis-container--title_h2">Vos Défis :</h2>
        {defis}
      </div>

      <BackgroundImage mobile_img={parcour.background_mobile.url} desktop_img={parcour.background_desktop.url} />
      
      <div className="conclusion__share-buttons">
        <h2>Partager cette histoire avec vos amis</h2>
        <a style={{ color }} href={"fb-messenger://share/?link=https://video-react.js.org/&app_id=123456789"}>
          <MessengerIcon color={parcour.color} /> Messenger
        </a>
        <a style={{ color }} href={"https://api.whatsapp.com/send?text=https://video-react.js.org"} data-action="share/whatsapp/share">
          <WhatsappIcon color={parcour.color} /> Whatsapp
        </a>
        <a href="/parcours">Retour aux parcours</a>
      </div>
    </div>
  );
};

export default Conclusion;
