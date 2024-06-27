document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('myModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const studentForm = document.getElementById('studentForm');
    const studentTable = document.getElementById('studentTable');
    
    // Open modal
    modal.style.display = 'block';
    
    // Close modal when user clicks on close button (x)
    closeModal.onclick = function() {
      modal.style.display = 'none';
      window.location.href = 'index.html';
    }
    
    // Close modal when user clicks outside the modal
    window.onclick = function(event) {
      if (event.target === modal) {
        // modal.style.display = 'none';
        // window.location.href = 'index.html';
      }
    }
    
    // Handle form submission
    studentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const studentName = document.getElementById('studentName').value;
      const repoLink = document.getElementById('repoLink').value;
      
      // Validate inputs (you can add more validation as needed)
      if (!studentName || !repoLink) {
        alert('Please enter both Name and Public Repo Link.');
        return;
      }
      
      // Create table row for student
      const row = document.createElement('div');
      row.classList.add('student-row');
      row.innerHTML = `
        <strong>${studentName}</strong> - <a href="${repoLink}" target="_blank">${repoLink}</a>
      `;
      studentTable.appendChild(row);
      
      // Clear form fields
      studentForm.reset();
      
      // Close modal after submission (optional)
      modal.style.display = 'none';
    });
  
    // Example code to dynamically update traffic lights and difficulty meter
    // You can add more interactive behavior as needed
    function updateTrafficLights(color) {
      const trafficLights = document.getElementById('trafficLights');
      trafficLights.style.backgroundColor = color;
    }
  
    function updateDifficultyMeter(difficulty) {
      const difficultyMeter = document.getElementById('difficultyMeter');
      difficultyMeter.textContent = `Difficulty: ${difficulty}`;
    }
  
    // Example usage:
    updateTrafficLights('green');
    updateDifficultyMeter('Easy');
  });
  