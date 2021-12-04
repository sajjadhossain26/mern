let name = prompt("Please type your name");
let roll = prompt("Please type your Roll number");

let bn = Number(prompt("Bangla mark"));
let en = Number(prompt("English mark"));
let match = Number(prompt("Match mark"));
let s = Number(prompt("science mark"));
let ss = Number(prompt("social science mark"));
let rel = Number(prompt("Religion mark"));

console.log(`)
Student Name : ${name},
Student Roll : ${roll},

Subject          mark           GPA                 GRAD
Bangla           ${bn}          ${gpa(bn)}               ${grad(bn)}
English          ${en}          ${gpa(en)}               ${grad(en)}
match            ${match}       ${gpa(match)}            ${grad(match)}
science          ${s}           ${gpa(s)}                ${grad(s)}
social           ${ss}          ${gpa(ss)}               ${grad(ss)}
religion         ${rel}         ${gpa(rel)}              ${grad(rel)}
===============================================================================
                Your cgpa number = ${cgpa(
                  gpa(bn),
                  gpa(en),
                  gpa(match),
                  gpa(s),
                  gpa(ss),
                  gpa(rel)
                )}
`);
