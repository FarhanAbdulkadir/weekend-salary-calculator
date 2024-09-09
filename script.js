console.log("script file working");

let totalMonthlySalary = 0;

function addEmployee(firstName, lastName, id, title, annualSalary){
    let employeeTable = document.querySelector('#employeeTable');
   
     let monthlySalary = (annualSalary / 12).toFixed(2);


    employeeTable.innerHTML+= `
    <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>$${annualSalary.toFixed(2)}</td>
    <td> <button onclick="handleDelete(this)"> Delete</button>
    </tr>
    `

    totalMonthlySalary+= parseFloat(monthlySalary);
    updateMonthlySalary();
    applyOverBudget();
}

function submitForm(event){
    event.preventDefault();
    let firstName = document.querySelector('[data-testid="firstNameInput"]').value
    let lastName = document.querySelector('[data-testid="lastNameInput"]').value
    let id= document.querySelector('[data-testid="idInput"]').value
    let title = document.querySelector('[data-testid="titleInput"]').value
    let annualSalary = parseFloat(document.querySelector('[data-testid="annualSalaryInput"]').value);

    addEmployee(firstName, lastName, id, title, annualSalary);

    document.getElementById('EmployeeForm').reset();




}
function handleDelete(button){
    let parentRow = button.closest('tr')
    parentRow.remove();

   // applyOverBudget();

}


function updateMonthlySalary(){
    document.querySelector('#totalMonthly').textContent = totalMonthlySalary.toFixed(2)
}

function applyOverBudget(){
    const footer = document.getElementById('budgetFooter');
    
    if(totalMonthlySalary>20000){
        footer.classList.add('over-budget');
    } else {
        footer.classList.remove('over-budget');
    }

}
