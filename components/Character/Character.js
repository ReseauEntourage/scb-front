import "./Character.scss";

const Character = ({ character, color }) => {
  const avatarUrl = `http://localhost:1337${character.avatar.url}`;

  return (
    <div className="Character">
      <div className="Character__tooltip">
        <span style={{ color }}>{character.name}</span>
        <p>{character.speech}</p>
      </div>
      <img className="Character__image" src={avatarUrl} />
    </div>
  );
};

export default Character;
