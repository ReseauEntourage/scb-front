import "./EnteteButton.scss";

const EnteteButton = ({ title, color, slug, chapitre }) => {
  let href = '';
  if (chapitre === "Intro") {
    href = `/parcours/${slug}/comprendre`;
  } else if (chapitre === "quizz") {
    href = `/parcours/${slug}/${chapitre}`;
  } else {
    href = `/parcours/${slug}/${chapitre}/1`;
  }

  return (
    <a 
      className="EnteteButton" 
      href={href}
      style={{ color: "#" + color }}
    >{title}</a>
  );
};

export default EnteteButton;
