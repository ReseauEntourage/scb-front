import "./EnteteButton.scss";

const EnteteButton = ({ title, color, slug, chapitre }) => {
  let href = '';
  if (chapitre === "Intro") {
    href = `/parcours/${slug}/comprendre/0`;
  } else if (chapitre === "quizz") {
    href = `/parcours/${slug}/${chapitre}/0`;
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
