let titleEl = document.querySelector(".title");
let date = new Date();

const weekDay = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const monthYear = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

let day = weekDay[date.getDay()];
let month = monthYear[date.getMonth()];

titleEl.innerHTML = `${day}, ${date.getDate()} de ${month} de ${date.getFullYear()} <br> ${date.getHours()}:${date.getMinutes()}`;
