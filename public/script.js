document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('myModal');
  const closeModal = document.getElementsByClassName('close')[0];
  const studentForm = document.getElementById('studentForm');
  const studentTable = document.getElementById('studentTable');
  const difficultyIndicator = document.getElementById('difficultyIndicator');

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
      modal.style.display = 'none';
      window.location.href = 'index.html';
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

  // Example function to update difficulty meter (bar)
  function updateDifficultyMeter(heightPercentage) {
    difficultyIndicator.style.height = `${heightPercentage}%`;
  }

  // Example usage:
  updateDifficultyMeter(50); // Example: set difficulty meter to 50%

});