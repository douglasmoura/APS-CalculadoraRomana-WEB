function decimalParaRomano(decimal) {
  for (
    var n = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
      ],
      t = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      r = "",
      a = 0,
      o = 0;
    o < n.length && 0 !== decimal;
    o++
  )
    for (; t[o] <= decimal; )
      (decimal -= t[o]), (r += n[o]), "M" === n[o] && a++;
  return { numThousands: a, romanNumeral: r };
}

function formatarRomano(decimal) {
  if (decimal <= 0) return "";
  if (5e5 < decimal) return alert("O número máximo suportado é 500.000"), "";
  var numRomano = decimalParaRomano(decimal);
  if (4 <= numRomano.numThousands) {
    for (var t = "", r = 0; r < numRomano.numThousands; r++) t += "M";
    var formatarSaida =
        '<span class="thousands">' +
        decimalParaRomano(numRomano.numThousands).romanNumeral +
        "</span>",
      saida = numRomano.romanNumeral.replace(t, formatarSaida);
  } else saida = numRomano.romanNumeral;
  return saida;
}

function romanoParaDecimal(e) {
  var n,
    t,
    r,
    a = 0;
  -1 !== e.indexOf('<span class="thousands">') &&
    ((n = document.createRange()).selectNode(document.body),
    (r = (t = n.createContextualFragment(e)).firstChild),
    (a = 1e3 * f(r.innerText.toUpperCase())),
    r.remove(),
    (e = t.textContent));
  for (
    var o = ["M", "D", "C", "L", "X", "V", "I"],
      i = [1e3, 500, 100, 50, 10, 5, 1],
      m = 0,
      u = 0,
      d = 0,
      c = 0,
      l = (e = e.toUpperCase()).length;
    c < l;
    c++
  ) {
    for (var s = 0, v = o.length; s < v; s++) {
      if (o[s] === e.charAt(c)) {
        u = i[s];
        break;
      }
      u = 0;
    }
    if (0 === u) return "";
    d < u && (d *= -1), (m += d), (d = u);
  }
  return a + (m += d);
}
var isInicio = new Boolean(false);
var display = document.getElementById("roman-input");
var display2 = document.getElementById("decimal-input");
disabilitarOperacao(true)

function disabilitarOperacao(boolean){

   document.getElementById("addbtn").disabled = boolean;
   document.getElementById("subbtn").disabled = boolean;
   document.getElementById("multbn").disabled = boolean;
   document.getElementById("divbtn").disabled = boolean;

}
function disabilitarBotao(boolean){

  document.getElementById("btn1").disabled = boolean;
  document.getElementById("btn2").disabled = boolean;
  document.getElementById("btn3").disabled = boolean;
  document.getElementById("btn4").disabled = boolean;
  document.getElementById("btn5").disabled = boolean;
  document.getElementById("btn6").disabled = boolean;
  document.getElementById("btn7").disabled = boolean;
  document.getElementById("btn8").disabled = boolean;
  document.getElementById("btn9").disabled = boolean;
  document.getElementById("btn10").disabled = boolean;
  document.getElementById("btn50").disabled = boolean;
  document.getElementById("btn100").disabled = boolean;
  document.getElementById("btn500").disabled = boolean;
  document.getElementById("btn1000").disabled = boolean;


}


function displaynum(numero) {

  
  if(display.innerText === ""){
    disabilitarOperacao(false)
  }
  
  if (display.innerText.length < 30 ) {
    
    display.innerText += numero;
    display2.innerText += romanoParaDecimal(numero);
  }
 

}

var operador;
function tipoCalc(tipo) {
  disabilitarOperacao(true);
  disabilitarBotao(false);
  display2.innerText += tipo;
  display.innerText += tipo;
  operador = tipo;
 
}

function calcular() {
  let numeros = display.innerText.split(operador);
  isInicio = true;

  switch (operador) {
    case "+":
    
      var total =
        Number(romanoParaDecimal(numeros[0])) +
        Number(romanoParaDecimal(numeros[1]));
      display.innerHTML = formatarRomano(total);
      display2.innerText = total;
      console.log(formatarRomano(total));

      break;

    case "-":
      var total =
        Number(romanoParaDecimal(numeros[0])) -
        Number(romanoParaDecimal(numeros[1]));
      display.innerHTML = formatarRomano(total);
      display2.innerText = total;
      break;

    case "/":
      var total =
        Number(romanoParaDecimal(numeros[0])) /
        Number(romanoParaDecimal(numeros[1]));
      display.innerHTML = formatarRomano(total);
      display2.innerText = total;
      break;

    case "*":
      var total =
        Number(romanoParaDecimal(numeros[0])) *
        Number(romanoParaDecimal(numeros[1]));
      display.innerHTML = formatarRomano(total);
      display2.innerText = total;
      break;
  }
  disabilitarOperacao(false);
  disabilitarBotao(true)
  console.log(display.value);
}
