// Simple localStorage flag
const PASSWORD = 'willbot.ai';

function isAuthed() {
  return localStorage.getItem('nzmca_authed') === 'true';
}
function requireAuth() {
  if (!isAuthed()) window.location.replace('login.html');
}
function loginAttempt(pass) {
  if (pass === PASSWORD) {
    localStorage.setItem('nzmca_authed', 'true');
    window.location.replace('index.html');
  } else {
    alert('Incorrect password');
  }
}
function logout() {
  localStorage.removeItem('nzmca_authed');
  window.location.replace('login.html');
}

