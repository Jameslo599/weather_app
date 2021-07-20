import { makeElement } from "./make-elements";

//	Houses copyright bar
const container = document.getElementById("copyrightHolder");

//	Generates complete copyright bar
const makeCopyright = () => {
  const copyright = makeElement({
    type: "div",
    id: "copyright",
    className: "clearfix",
  });
  container.appendChild(copyright);

  const copyrightText = makeElement({
    type: "div",
    id: "copyrightText",
    className: "text float left",
  });
  copyright.appendChild(copyrightText);

  const copyrightLinks = makeElement({
    type: "ul",
    id: "links",
    className: "links float right",
  });
  copyright.appendChild(copyrightLinks);

  const gitIcon = makeElement({ type: "li" });
  const gitLink = makeElement({ type: "a" });
  const gitFont = makeElement({ type: "i", className: "fab fa-github-square" });
  gitLink.href = "https://github.com/Jameslo599";
  gitLink.target = "_blank";
  gitLink.rel = "noreferrer noopener";

  gitLink.appendChild(gitFont);
  gitIcon.appendChild(gitLink);
  copyrightLinks.appendChild(gitIcon);
};

export default makeCopyright;
