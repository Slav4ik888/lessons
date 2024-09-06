const HTTPS = 'https://ros.bongacams16.com/';

const links = [
  "lilcatt",
  "sweetmammy-1",
  "sophieanwhite",
  "fox-lisa",
  "stasja1",
  "alexedythe",
  "blue-eyes1",
  "-alenyshka-/",
  "sophiemary",
  "milana-milana",
  "milena935",
  "belbig",
  "daddysgirl9",
  "teeencute",
  "ula2015",
  "mellannie8",
  "hotmilfpussy",
  "tina85",
  "desirable3",
  "evarose",
  "ari-zona",
  "ogurezzi",
  "emiliamur",
  "realromanticlove2",
  "boginya7878",
  "laura-hills18",
  "mistressmilfa",
  "jkotenok",
  "bette-rossi",
  "-hennessy-#!/",
  "konfetka00",
  "sexality",
  "choose-me111",
  "minicooperxxx",
  "tachikaa",
  "ladyfay"
];


const openLink = (href) => {
  const link = document.createElement('a');
  link.href = HTTPS + href;
  link.target = "_blank";
  link.click();
}

const openLinks = () => {
  links.forEach(link => openLink(link));
};

// openLink(links[0]);

const show = () => {
  openLinks();
}

show();
