let func={}
const agecal=(name, year)=>{
  let age= new Date().getFullYear()-year
  return `Hi ${name} now you are ${age} Years old`
}
const info=(name, skill)=>{
    return `Hi ${name} You are a ${skill} developer`
}
const devs=[
    {
        id: 1,
        name: "Sajjad",
        skill: "ios"
    },
     {
        id: 1,
        name: "Sajjad",
        skill: "ios"
    }, {
        id: 1,
        name: "Sajjad",
        skill: "ios"
    }
]
func.age= agecal;
func.info=info;
func.devs=devs
module.exports= func;