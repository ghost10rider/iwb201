let products = [
    "حساب التوفير بفائدة سنوية 5%", "الحساب الجاري", "القرض التعليمي بفائدة سنوية 10%", "القرض السكني بفائدة سنوية 11%", "القرض التجاري بفائدة سنوية 18%", "القرض الزراعي بفائدة سنوية 14%", "قرض النقل بفائدة سنوية 12%", "قرض الورشات بفائدة سنوية 14%"
]

let requestData = [];
var request = {
    name,
    ssn,
    birthday,
    mobile,
    email,
    loanValue,
    loanType,
    loanYears,
    paymentMethod
}

function onProductsLoad() {
    for (i = 0; i < products.length; i++) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = products[i];
        td.style.textAlign = "center";
        document.getElementById("products").insertAdjacentElement('beforeend', tr);
        tr.insertAdjacentElement('beforeend', td);

    }

}

function onRequestLoanLoad() {
    for (i = 0; i < products.length; i++) {
        let option = document.createElement('option');
        option.innerHTML = products[i];
        option.value = i;
        option.style.textAlign = "right";
        document.getElementById("loanType").insertAdjacentElement('beforeend', option);

    }
}

function onResultLoad() {
    request = JSON.parse(sessionStorage.getItem("request"));
    for (i = 0; i < 9; i++) {
        if (Object.keys(request)[i] == "loanType") {
            document.getElementById(Object.keys(request)[i]).innerHTML = products[Object.values(request)[i]];

        } else
            document.getElementById(Object.keys(request)[i]).innerHTML = Object.values(request)[i];
    }
    console.log(request);
}

function getFormData() {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let ssn = document.getElementById("ssn").value;
    let birthday = document.getElementById("birthday").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let loanValue = document.getElementById("loanValue").value;
    let loanType = document.getElementById("loanType").value;
    let loanYears = document.getElementById("loanYears").value;
    let paymentMethod = document.getElementById("paymentMethod").value;

    if (!/^[a-zA-Z ]+$/.test(name)) {
        alert("Name must be letters only");
    } else
    if (!/^[0-9]+$/.test(ssn) || ssn.length != 10 || ssn[1] > 4 || (ssn[0] == 0 && ssn[1] == 0)) {
        alert("SSN must be 10 digits and the first two digits must be from 01 to 14");
    } else
    if (!/^[0-9]+$/.test(mobile) || mobile.length != 10 || mobile[0] != 0 || mobile[1] != 9) {
        alert("phone number must be 10 digits and begin with 09");
    } else {
        request = { name, ssn, birthday, mobile, email, loanValue, loanType, loanYears, paymentMethod };
        sessionStorage.setItem("request", JSON.stringify(request));
        window.location.replace("result.html");
    }
}