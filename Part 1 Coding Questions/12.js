function getSuccessMessage() {
    setTimeout(() => {
      console.log("Success");
    }, 3000);
  }

  getSuccessMessage()

  // انا كنت هعملها بـ Set Interval 
  // ولكن لما سرشت لقيت التايم اوت احسن لانها بتنفذ الكود مرة واحدة انما عن طريق الانترفل هنضطر نعمل فانكشن ونطلع منها عشان اللوب