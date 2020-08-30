import "./Button.scss";

const getNextChapitre = (chapitre) => {
  switch (chapitre) {
    case "comprendre": return "changer";
    case "changer":return "agir";
    case "agir": return "conclusion";
    default: return chapitre;
  }
}

const Button = ({ chapitre, color, next, order, param, slug }) => {
  const nextLink = parseInt(order) + 1;
  const nextChapitre = getNextChapitre(chapitre);

  let href = '';
  if (nextChapitre) {
    href = `/parcours/${slug}/conclusion`;
  } else if (!next) {
    href = `/parcours/${slug}/${nextChapitre}/${nextLink}`;
  } else {
    href = `/parcours/${slug}/${nextChapitre}`;
  }

  return (
    <div className="btn-container">
      <a href={href}>
        <div
          className={`button-container ${param === "quote" ? "quote" : ""}`}
          style={{ background: `#${color}` }}
        >
          <span className="button-title">Continuer</span>
        </div>
      </a>
    </div>
  );
}

export default Button;
