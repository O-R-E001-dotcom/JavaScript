function save() {
    let noteInput = document.getElementById('notes-app');
    let savedAt = new Date().toLocaleString();

    let inputData  = {
        text: noteInput,
        time: savedAt
    };
    localStorage.setItem('output', JSON.stringify(inputData));
    document.getElementById('timeStamp').textContent = `Last time saved was: ${savedAt}`;
}

function load() {
    let savedNote = localStorage.getItem('output');
    if (savedNote) {
        let inputData = JSON.parse(savedNote);
        document.getElementById('notes-app').value = inputData.text;
        document.getElementById('timeStamp').textContent = `Last time saved was: ${inputData}`;
    } else {
        document.getElementById('notes-app').value = '';
        document.getElementById('timeStamp').textContent = `No saved note`;
    }
}


// EXERCISE 2
let theMessage = document.getElementById('theMessage');
let firstVisit = document.getElementById('visit');
let reset = document.getElementById('resetBtn');

let count = localStorage.getItem("visitCount");

if (count) {
    count = Number(count) + 1;
} else {
    // First time visit
    count = 1;
      
    // Save first visit date (only once)
    let firstVisitDate = new Date().toLocaleString();
    localStorage.setItem('firstVisit', firstVisitDate);
}

// To save the updated count back
localStorage.setItem('visitCount', count);


// Display messages
theMessage.textContent = `You have visited this page ${count} time(s)`;

let firstVisitDate = localStorage.getItem('firstVisit');
if (firstVisitDate) {
    firstVisit.textContent = `Your first visit was on: ${firstVisitDate}`;
}

// Reset button clears localStorage and refreshes page
reset.addEventListener('click', () => {
    localStorage.removeItem('visitCount');
    localStorage.removeItem('firstVisit');
    location.reload();
});


// EXERCISE 3
function applyTheme(theme) {
      // Remove previous theme classes
      document.body.classList.remove('light', 'dark', 'blue');
      // Add selected theme
      document.body.classList.add(theme);
      // Save to localStorage
      localStorage.setItem('theme', theme);
    }

function lightMode() {
    applyTheme('light');
}

function darkMode() {
    applyTheme('dark');
}

function blueMode() {
    applyTheme('blue');
}

// Load saved theme on page load
window.onload = function () {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
};