const links = [
  "https://rus.bongacams.cam/sophieanwhite",
  "https://rus.bongacams.cam/sonya699",
  "https://rus.bongacams.cam/fox-lisa",
  "https://rus.bongacams.cam/stasja1",
  "https://rus.bongacams.cam/topshoww",
  "https://rus.bongacams.cam/profile/alexedythe",
  "https://rus.bongacams.cam/blue-eyes1",
  "https://rus.bongacams.cam/-alenyshka-/",
  "https://rus.bongacams.cam/disweetkitty",
  "https://rus.bongacams.cam/sophiemary",
  "https://rus.bongacams.cam/milana-milana",
  "https://rus.bongacams.cam/milena935",
  "https://rus.bongacams.cam/belbig",
  "https://rus.bongacams.cam/daddysgirl9",
  "https://rus.bongacams.cam/teeencute",
  "https://rus.bongacams.cam/ula2015",
  "https://rus.bongacams.cam/mellannie8",
  "https://rus.bongacams.cam/hotmilfpussy",
  "https://rus.bongacams.cam/baby1251",
  "https://rus.bongacams.cam/tina85"
]

const openLink = (href) => {
  const link = document.createElement('a');
  link.href = href;
  link.target = "_blank";
  link.click();
}

const openLinks = () => {
  links.forEach(link => openLink(link));
};

openLink(links[0]);

const show = () => {
  openLinks();
  console.log(111);
}
