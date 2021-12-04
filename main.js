const btnConverterDolarAmericano = document.getElementById("dolarA");
const btnConverterDolarCanadense = document.getElementById("dolarC");
const btnConverterEuro = document.getElementById("euro");
const btnConverterLibra = document.getElementById("libra");

btnConverterDolarAmericano.addEventListener("click", ()=>{
  var valorEmReal = parseFloat(document.querySelector("#valorEmReal").value);
  var valorConvertido = document.querySelector("#res");
  var valorEmDolarAmericano = (valorEmReal * 5.39).toFixed(2);
  valorConvertido.innerHTML = `R$ ${valorEmReal} Reais = US$ ${valorEmDolarAmericano} Dólares Americanos.`;  
});

btnConverterDolarCanadense.addEventListener("click", ()=>{
  var valorEmReal = parseFloat(document.querySelector("#valorEmReal").value);
  var valorConvertido = document.querySelector("#res");
  var valorEmDolarCanadense = (valorEmReal * 4.28).toFixed(2);
  valorConvertido.innerHTML = `R$ ${valorEmReal} Reais = C$ ${valorEmDolarCanadense} Dólares Canadenses.`;  
});

btnConverterEuro.addEventListener("click", ()=>{
  var valorEmReal = parseFloat(document.querySelector("#valorEmReal").value);
  var valorConvertido = document.querySelector("#res");
  var valorEmEuro = (valorEmReal * 6.30).toFixed(2);
  valorConvertido.innerHTML = `R$ ${valorEmReal} Reais = € ${valorEmEuro} Euros.`;  
});

btnConverterLibra.addEventListener("click", ()=>{
  var valorEmReal = parseFloat(document.querySelector("#valorEmReal").value);
  var valorConvertido = document.querySelector("#res");
  var valorEmLibra = (valorEmReal * 0.14).toFixed(2);
  valorConvertido.innerHTML = `R$ ${valorEmReal} Reais = £ ${valorEmLibra} Libras.`;  
});