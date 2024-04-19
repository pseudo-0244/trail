function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var error = document.getElementById('error');
    
    // Hardcoded credentials for demonstration purposes
    if (username === 'admin' && password === 'password') {
      error.textContent = '';
      // Store username in local storage for authentication
      localStorage.setItem('username', username);
      // Redirect to dashboard or home page
      window.location.href = 'dashboard.html';
      return false;
    } else {
      error.textContent = 'Invalid username or password';
      return false;
    }
  }
  
