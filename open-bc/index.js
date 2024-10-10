const HTTPS = 'https://ru3.bongacams14.com/';

const links = [
  "lilcatt",
  "sweetmammy-1",
  "sophieanwhite",
  "fox-lisa",
  "alexedythe",
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
  "choose-me111",
  "minicooperxxx",
  "tachikaa",
  "ladyfay",
  "kiraroxx",
  "blackcat142",
  "youngmilf",
  "milana555550",
  "adel-chocolatee",
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
