const selectFrom = document.getElementById("from");
const selectTo = document.getElementById("to");
const result = document.getElementById("Natija");

fetch("https://v6.exchangerate-api.com/v6/ca75d3e4a335626baaf5695c/latest/USD")
  .then(res => res.json())
  .then(data => {
    const valyutalar = Object.keys(data.conversion_rates);

    valyutalar.forEach(item => {
      let opt1 = document.createElement("option");
      let opt2 = document.createElement("option");

      opt1.value = item;
      opt1.textContent = item;

      opt2.value = item;
      opt2.textContent = item;

      selectFrom.appendChild(opt1);
      selectTo.appendChild(opt2);
    });

    selectFrom.value = "USD";
    selectTo.value = "UZS"; // to‘g‘rilangan
  });

function almashtirish() {
 
  const miqdor = document.getElementById("summa").value;
  const fromValue = selectFrom.value;
  const toValue = selectTo.value;

  fetch(`https://v6.exchangerate-api.com/v6/ca75d3e4a335626baaf5695c/latest/${fromValue}`)
    .then(res => res.json())
    .then(data => {
      const kurs = data.conversion_rates[toValue]; // to‘g‘rilangan
      const javob = (miqdor * kurs).toFixed(2);
      result.textContent = `${miqdor} ${fromValue} = ${javob} ${toValue}`;
    });
}
