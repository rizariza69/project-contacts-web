const data = [
  {
    id: "1",
    fullName: "dudu alamin",
    email: "dudu@mail.com",
    phone: "0811213123",
    address: "Pondok Cabe, Pamulang"
  },
  {
    id: "2",
    fullName: "momon alam",
    email: "momon@mail.com",
    phone: "08999988181",
    address: "Kemang,Jakarta Selatan"
  }
];

const showInput = () => {
  data.forEach((data, index) => {
    const tableInput = document.getElementById("table-input");

    const tableList = tableInput.innerHTML;
    tableInput.innerHTML =
      tableList +
      `<tr>
        <th>${data.id}</th>
        <td>${data.fullName}</td>
        <td>${data.email}</td>
        <td>${data.phone}</td>
        <td>${data.address}</td>
    
        <td><button id="delete" class="btn btn-danger delete">DELETE</button> <button id="update"
          class="btn btn-success update">UPDATE</button></td>
      </tr>`;
  });
};

const addData = () => {
  event.preventDefault();

  const id = document.getElementById("inputId").value;
  const fullName = document.getElementById("inputFullName").value;
  const email = document.getElementById("inputEmail").value;
  const phone = document.getElementById("inputPhone").value;
  const address = document.getElementById("inputAddress").value;

  console.log(id);
  console.log(fullName);
  console.log(email);
  console.log(phone);
  console.log(address);

  data.push({
    id,
    fullName,
    email,
    phone,
    address
  });
};
