const name1 = document.getElementById("name1");
const email1 = document.getElementById("email1");
const phone1 = document.getElementById("phone1");
const address1 = document.getElementById("address1");
const job1 = document.getElementById("job1");
const btn1 = document.getElementById("btn1");
const cardOutput = document.getElementById("cardOutput");

btn1.onclick = function () {
  const name = name1.value;
  const email = email1.value;
  const phone = phone1.value;
  const address = address1.value;
  const job = job1.value;

  console.log("FullName:", name);
  console.log("Email address:", email);
  console.log("Phone number:", phone);
  console.log("Address:", address);
  console.log("Job/Services:", job);

  if (name && email && phone && address && job) {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("address", address);
    localStorage.setItem("job", job);
    location.reload();
  }
};

for (let i = 0; i < localStorage.length; i++) {
  const name1 = localStorage.getItem("name");
  const email1 = localStorage.getItem("email");
  const phone1 = localStorage.getItem("phone");
  const address1 = localStorage.getItem("address");
  const job1 = localStorage.getItem("job");



  cardOutput.innerHTML =
  `
  <div style="text-align: left;">
  Full name: ${name1} <br>
  Email address: ${email1} <br>
  Phone number:${phone1} <br>
  Address: ${address1} <br>
  Job/Services: ${job1}
  <div>
   `;
}
