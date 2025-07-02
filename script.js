document.getElementById('ageForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const dob = new Date(document.getElementById('dob').value);
  const today = new Date();

  if (isNaN(dob.getTime())) {
    document.getElementById('result').textContent = 'Please enter a valid date.';
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById('result').textContent = 
    `Your age is ${years} year(s), ${months} month(s), and ${days} day(s).`;
});
