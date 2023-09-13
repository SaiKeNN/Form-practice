document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("f1");
    const dataTable = document.getElementById("data-table");
    const dataContainer = document.querySelector(".container2");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const firstName = document.getElementById("fName").value;
        const lastName = document.getElementById("lName").value;
        const dobInput = document.getElementById("dob1");
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;

        const currentDate = new Date();
             
        const selectedDate = new Date(dobInput.value);

        if (selectedDate > currentDate) {
            alert("Date of Birth cannot be in the future!");
            return;
        }

        const newRow = dataTable.insertRow();
        newRow.innerHTML = `

            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${dobInput.value}</td>
            <td>${email}</td>
            <td>${address}</td>
        `;

        form.reset();

        dataContainer.style.display = "block";
    });
});

let calculate = (a,b) =>{
    let add = a+b;
    let sub = a-b;
    return [add,sub];
}

const [add,sub] = calculate(3,5);
