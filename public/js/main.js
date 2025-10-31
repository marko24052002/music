// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const signInBtn = document.getElementById('signInBtn');
  const registerBtn = document.getElementById('registerBtn');
  const authModal = document.getElementById('authModal');
  const closeBtn = document.querySelector('.close-btn');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const showRegister = document.getElementById('showRegister');
  const showLogin = document.getElementById('showLogin');

  // Open modal for sign in
  if (signInBtn) {
    signInBtn.addEventListener('click', function() {
      authModal.style.display = 'flex';
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
    });
  }

  // Open modal for register
  if (registerBtn) {
    registerBtn.addEventListener('click', function() {
      authModal.style.display = 'flex';
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    });
  }

  // Close modal
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      authModal.style.display = 'none';
    });
  }

  // Switch to register form
  if (showRegister) {
    showRegister.addEventListener('click', function(e) {
      e.preventDefault();
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    });
  }

  // Switch to login form
  if (showLogin) {
    showLogin.addEventListener('click', function(e) {
      e.preventDefault();
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
    });
  }

  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === authModal) {
      authModal.style.display = 'none';
    }
  });

  // Category card navigation
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    card.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      window.location.href = `/music/${category}`;
    });
  });

  // Delete song functionality
  const deleteButtons = document.querySelectorAll('.delete-song');
  deleteButtons.forEach(button => {
    button.addEventListener('click', async function() {
      const songId = this.getAttribute('data-song-id');
      const songItem = this.closest('.song-item');
      
      if (confirm('Are you sure you want to delete this song?')) {
        try {
          const response = await fetch(`/music/song/delete/${songId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          
          const result = await response.json();
          
          if (result.success) {
            songItem.remove();
          } else {
            alert('Failed to delete song');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Failed to delete song');
        }
      }
    });
  });
});