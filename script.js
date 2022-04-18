function corrigir() {
    document.querySelector(".hide").style.display = "block";
    let certas = 0;
    let nome = document.getElementById("texto").value;
    document.getElementById("nome").innerHTML = "Seu nome é: " + nome;
    let quest01 = document.getElementById("Q01").value;
    if (quest01 == "informatica") {
      certas += 1;
    }  
    let quest02 = document.getElementById("Q02").value;
    let curso01 = quest02.includes("Informática");
    let curso02 = quest02.includes("Administração");
    let curso03 = quest02.includes("Enfermagem");
    if (curso01 && curso02 && curso03) {
      certas += 1;
    }  
    if (
      document.getElementById("check2").checked && document.getElementById("check4").checked
    ) {
      certas += 1;
    }  
    if (document.getElementById("con").checked) {
        certas += 1;
    }  
    if (document.getElementById("ver").checked) {
        certas += 1;
    }  
    document.getElementById("corretas").innerHTML = "Corretas: " + certas + " de 5";
    let maxCertas = 5;
    let percnt = (certas / maxCertas) * 100;
    document.getElementById("percentual").innerHTML = "Porcentagem atingida: " + percnt + "%";
  }