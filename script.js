function checkAnswer(button, isCorrect) {
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("next-button");
  

    const options = document.querySelectorAll(".option");
    options.forEach(option => option.disabled = true);
  
    if (isCorrect) {
      feedback.textContent = "Parabéns! Você acertou!";
      feedback.style.color = "green";
      nextButton.style.display = "block";
    } else {
      feedback.textContent = "Resposta errada. Tente novamente!";
      feedback.style.color = "red";
    }
  
    feedback.style.display = "block"; 
  }
  
  function goToNextQuestion() {
    window.location.href = "pergunta2.html";
  }
  