import "./SCBCharacter.scss";

const SCBCharacter = ({
  image,
  characterName,
  characterTexte,
  color,
}) => {
  return (
    <div className="Character">
      <div className="Character__tooltip">
        <span style={{ color: "#" + color }}>{characterName}</span>
        <p>{characterTexte}</p>
      </div>
      <img
        className="Character__image"
        src={`http://localhost:1337${image}`}
        alt="character image"
      />
    </div>
  );
};

export default SCBCharacter;
