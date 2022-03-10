const fetchAdvice = async () => {
  const rest = await fetch("https://api.adviceslip.com/advice");
  const data = await rest.json();
  console.log(data);
  document.getElementById("title").innerHTML = `Adice#: ${data.slip.id}`;
  document.getElementById("text").innerHTML = ` "${data.slip.advice}" `;
};

fetchAdvice();
