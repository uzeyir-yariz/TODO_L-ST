const path = require('path');

// JSON dosyasının yolu
const firebaseConfigPath = path.join(__dirname, 'path', 'to', 'firebaseConfig.json');

const firebaseConfigObj = require(firebaseConfigPath);
console.log(firebaseConfigObj);
