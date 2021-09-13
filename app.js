// listen for submit:
document.getElementById("loan-form").addEventListener("submit",calculateResults);

// calculate-results:
function calculateResults(e){
// jehetu eita form tai form submit er sob by-default atrribute remove korte hobe!
  
  e.preventDefault();
//   ekhon jehetu amar form er submit button e click korlei output gula show korbe tai ei function er moddei amar baki sob element gula select korte hobe.
 
  const amount = document.getElementById("amount")
  const interest = document.getElementById("interest")
  const years = document.getElementById("years")
  const monthlyPayment = document.getElementById("monthly-payment")
  const totalPayment = document.getElementById("total-payment")
  const totalInterest = document.getElementById("total-interest")



  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
  } else {
     showError()
    
  }
 

}

// showerror: jokhon keo kono kisu input nah diye ei form submit korbe tokhon jate error dekhay:

function showError(){

    // create a div(karon amra error dekhate chaitesi bootstrap alert class er maddome ar ei alert class ti div er under ei thake tai div create korte hobe)
    const errorDiv = document.createElement("div")
    //jehetu ami error message ta card e dakhabo tai card select kora laagbe and jehetu ami ta heading er age dekhabo tai heading soho select kora laagbe!
    const card = document.querySelector(".card") 
    const heading = document.querySelector(".heading")

    errorDiv.className = "alert alert-danger"
    errorDiv.textContent = "Please check your numbers"

    // inser error message befor heading:
    card.insertBefore(errorDiv,heading)
    //  card.insertBefore(errorDiv,heading) er means holo je heading er age jate amar error message ta show kore!

    // Clear error after 2 seconds(2000 milliseconds):
    // nicher setTimeout()ekti build in function eti 2 ti parameter ney and er kaaj hocce je error message ti jate amar 3 sec screen e show kore!
    setTimeout(function clearError(){

          document.querySelector(".alert").remove()


    },2000)


   
}