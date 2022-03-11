
let select=document.querySelector('#date-birth1')
for (let i = 1; i < 32; i++) {
   let option= document.createElement('option')
   option.setAttribute("value", "1");
   option.textContent=i; 
   select.append(option)
}  
var d =new Date().getFullYear();
let select3=document.querySelector('#date-birth3')
for (let i = 1900; i <=d; i++){
   let option=document.createElement('option')
   option.setAttribute("value",i)
   option.textContent=i;
   select3.append(option)
}

const listeMois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]

const date2 = document.querySelector("#date-birth2");


listeMois.forEach((mois, index)=>{
   const option = document.createElement("option")
   option.setAttribute("value", index + 1);
   option.innerText = mois;
   date2.append(option);
});{
}