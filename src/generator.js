// Generate Password 

const generatePassword = (length) => {
    const characterSet = [];
    for (let i = 33; i <= 126; i++) {
      characterSet.push(String.fromCharCode(i));
    }
  
    const passwordArray = new Uint32Array(length);
    crypto.getRandomValues(passwordArray);
  
    const password = Array.from(passwordArray, (value) => characterSet[value % characterSet.length]).join('');
    return password;
  };

  const checkLength = (length) => {
    if (length < 8) {
      return "Minimálna dĺžka hesla je 8 znakov";
    }
    if (length > 24) {
      return "Maximálna dĺžka hesla je 24 znakov";
    }
    return "";
  };
  
  const generateButton = document.getElementById("generateBtn");
  const lengthInput = document.getElementById("length");
  const resultOutput = document.getElementById("result");
  
  generateButton.addEventListener("click", () => {
    const length = parseInt(lengthInput.value);
    const lengthError = checkLength(length);
    if (lengthError) {
      resultOutput.value = lengthError;
    } else {
      const password = generatePassword(length);
      resultOutput.value = password;
    }
  });
  

// Clipboard API

  const copyToClipboard = ({ copyButton, result }) => {
    const resultInput = async () => {
      try {
        await navigator.clipboard.writeText(result.value);
        result.value = 'Password copied!';
      } catch (error) {
        console.error('Failed to copy password:', error);
      }
    };
  
    copyButton.addEventListener('click', resultInput);
  };
  
  const copyButton = document.getElementById('copyBtn');
  const result = document.getElementById('result');
  
  copyToClipboard({ copyButton, result });