let encryptionKey = null;  // Variable to store the encryption key

/*** Encrypts the input text using the Caesar Cipher algorithm.*/
function encrypt() {
    const inputText = document.getElementById('inputText').value.trim();  // Trim to remove leading/trailing whitespace
    const key = parseInt(document.getElementById('key').value);
    
    // Validate input
    if (inputText === '') {
        alert('Please enter text to encrypt.');
        return;
    }
    if (isNaN(key)) {
        alert('Please enter a valid number for the key.');
        return;
    }
    
    // Store the encryption key
    encryptionKey = key;

    // Perform encryption
    let outputText = '';
    for (let i = 0; i < inputText.length; i++) {
        const char = inputText.charCodeAt(i);
        // Encrypt uppercase letters
        if (char >= 65 && char <= 90) {
            outputText += String.fromCharCode((char - 65 + key) % 26 + 65);
        }
        // Encrypt lowercase letters
        else if (char >= 97 && char <= 122) {
            outputText += String.fromCharCode((char - 97 + key) % 26 + 97);
        } else {
            outputText += inputText.charAt(i);  // Non-alphabetic characters remain unchanged
        }
    }
    document.getElementById('outputText').value = outputText;
}

/*** Decrypts the input text using the Caesar Cipher algorithm.*/
function decrypt() {
    const inputText = document.getElementById('inputText').value.trim();  // Trim to remove leading/trailing whitespace
    const key = parseInt(document.getElementById('key').value);

    // Validate input
    if (inputText === '') {
        alert('Please enter text to decrypt.');
        return;
    }
    if (isNaN(key)) {
        alert('Please enter a valid number for the key.');
        return;
    }
    if (key !== encryptionKey) {
        alert('The key is not correct. Decryption failed.');
        return;
    }

    // Perform decryption
    let outputText = '';
    for (let i = 0; i < inputText.length; i++) {
        const char = inputText.charCodeAt(i);
        // Decrypt uppercase letters
        if (char >= 65 && char <= 90) {
            outputText += String.fromCharCode((char - 65 - key + 26) % 26 + 65);
        }
        // Decrypt lowercase letters
        else if (char >= 97 && char <= 122) {
            outputText += String.fromCharCode((char - 97 - key + 26) % 26 + 97);
        } else {
            outputText += inputText.charAt(i);  // Non-alphabetic characters remain unchanged
        }
    }
    document.getElementById('outputText').value = outputText;
}
