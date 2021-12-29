
const dates = document.querySelectorAll('.blog-date');
dates.forEach(date => {
    const datee = new Date(date.textContent);
const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
    // timeZone: 'America/Los_Angeles'
  }
date.textContent = new Intl.DateTimeFormat('en-GB', options).format(datee);
});

