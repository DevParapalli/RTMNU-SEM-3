"use strict";

let main_header = document.querySelector(".main-header");

main_header.innerHTML = "STATEMENT OF MARKS";

let university_name = document.querySelector(".university-name");

university_name.innerHTML = "Government College of Engineering, Nagpur";

let marks = [
  // Name, IPO, IPM, ITO, ITM, EPO, EPM, ETO, ETM
  ["Subject A", 27, 30, 68, 70, 19, 20, 80, 80],
  ["Subject B", 30, 30, 70, 70, 20, 20, 80, 80],
  ["Subject C", 27, 30, 69, 70, 30, 30, 70, 70],
];

let subject_template = document.querySelector("#subject-template");

marks.forEach((item) => {
  let subject = subject_template.content.cloneNode(true);
  subject.querySelector(".data-name").textContent = item[0];
  let obtained = [...subject.querySelectorAll(".obt")];
  let _obt = 0;
  let max = [...subject.querySelectorAll(".max")];
  let _max = 0;
  for (let i = 0; i < 4; i++) {
    obtained[i].textContent = item[2 * i + 1];
    _obt += item[2 * i + 1];
    max[i].textContent = item[2 * i + 2];
    _max += item[2 * i + 2];
  }
  subject.querySelector(".obt-total").textContent = _obt;
  subject.querySelector(".max-total").textContent = _max;

  document.querySelector(".table").appendChild(subject);
});

let total_obt = 0;
let total_max = 0;

let all_obt = document.querySelectorAll(".obt-total");
let all_max = document.querySelectorAll(".max-total");

for (let i = 0; i < all_obt.length || i < all_max.length; i++) {
  total_obt += Number.parseInt(all_obt[i].textContent);
  total_max += Number.parseInt(all_max[i].textContent);
}

let final_row = document.querySelector("#final-tr").content.cloneNode(true);

final_row.querySelector(".obt-total-total").textContent = total_obt;
final_row.querySelector(".max-total-total").textContent = total_max;

document.querySelector(".table").appendChild(final_row);
