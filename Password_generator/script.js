const copy = document.getElementById("copy");

function generatePassword() {
    const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?"; // Caractères autorisés pour le mot de passe, y compris des caractères spéciaux
    const length = 10; // password length
    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * char.length);
        password += char[randomIndex];
    }

    document.getElementById("password").value = password;    
}

function copyPassword() {
    var passwordInput = document.getElementById("password");
    passwordInput.select(); 
    document.execCommand("copy"); 
    console.log('copiè');
}

function clearPassword() {
    document.getElementById("password").value = ""; 
}

// Fonction de hachage SHA-256
async function hashFunction(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hash = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hash));
    const hashedMessage = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashedMessage;
}

function hashMessage() {
    const message = document.getElementById("message").value;
    hashFunction(message).then(hashedMessage => {
        document.getElementById("hashedMessage").value = hashedMessage;
    });
}

function copyHashedMessage() {
    var hashedMessageInput = document.getElementById("hashedMessage");
    hashedMessageInput.select();
    document.execCommand("copy");
}

function clearMessage() {
    document.getElementById("message").value = "";
    document.getElementById("hashedMessage").value = "";
}
