'use sctrict';

// Get HTML elements
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const dateInput = document.getElementById('date');
const textAreaInput = document.getElementById('text-area');
const button = document.getElementById('button');
const commentSection = document.getElementById('comments-section');

// Elements for errors
const nameError = document.getElementById('nameError');
const dateError = document.getElementById('dateError');
const commentError = document.getElementById('commentError');
const errorStyle = '1px solid red';

// Inputs validation
function validateForm() {
  if (nameInput.value == '' && textAreaInput.value == '') {
    nameError.innerHTML = 'Name is required';
    nameInput.style.border = errorStyle;
    commentError.innerHTML = 'Comment is required';
    textAreaInput.style.border = errorStyle;
    return false;
  } else if(nameInput.value == '') {
    nameError.innerHTML = 'Name is required';
    nameInput.style.border = errorStyle;
    return false;
  } else if(textAreaInput.value == '') {
    commentError.innerHTML = 'Comment is required';
    textAreaInput.style.border = errorStyle;
    return false;
  } else if(dateInput.value === true) {
    const currentDate = new Date(dateInput.value).toLocaleString('ru', {day: '2-digit', month: '2-digit'});
    dateInput.value = dateInput.value + ' ' + currentDate;
  } 
  else if(!dateInput.value) {
    const currentDate = new Date().toLocaleString('ru', {day: '2-digit', month: '2-digit'});
    dateInput.value = dateInput.value + ' ' + currentDate;
  }
  return true;
}

// Form button handler, if validation is OK
button.addEventListener('click', function(event) {
  event.preventDefault();
  if (validateForm()) {
    createComment();
  }
});

// Sending the form via ENTER button, if validation is OK
form.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    if (validateForm()) { 
      createComment();
    }
  }
});

// Making comment
function createComment() {
  const comment = document.createElement('div');
  comment.classList.add('comment');
  comment.style.backgroundColor = 'aliceblue';
  
  // Get current date and time
  const now = new Date();
  
  // Get yesterday's date and time
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  
  // Check if date input is empty or not
  let dateValue;
  if (!dateInput.value) {
    dateValue = now;
  } else {
    dateValue = new Date(dateInput.value);
  }
  
  // Set date string based on current or yesterday's date
  let dateString;
  if (isSameDate(dateValue, now)) {
    dateString = 'Today';
  } else if (isSameDate(dateValue, yesterday)) {
    dateString = 'Yesterday';
  } else {
    dateString = dateValue.toLocaleDateString('ru', { month: 'long', day: 'numeric' });
  }
  
  // Set time string
  const timeString = now.toLocaleTimeString('ru', { hour: 'numeric', minute: 'numeric' });
  
  comment.innerHTML = `
    <h3>${nameInput.value}</h3>
    <span>${dateString} at ${timeString}</span>
    <p>${textAreaInput.value}</p>
    `;
  
  commentSection.appendChild(comment);
  
  // Clear input fields
  nameInput.value = '';
  dateInput.value = '';
  textAreaInput.value = '';
  
  addDeleteButton(comment);
  addLikeButton(comment);
}

// Making delete button
function addDeleteButton(comment) {
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  comment.appendChild(deleteButton);
  
  deleteButton.addEventListener('click', () => {
    comment.remove();
  });
}

// Making like button
function addLikeButton(comment) {
  const likeButton = document.createElement('button');
  likeButton.classList.add('like-button');
  comment.appendChild(likeButton);
  
  likeButton.addEventListener('click', () => {
    toggleLikeButton(likeButton);
  });
}

// Like button switcher
let isLiked = false;

function toggleLikeButton(likeButton) {
  isLiked = !isLiked;
  
  if (likeButton.classList.contains('liked')) {
    likeButton.classList.remove('liked');
    likeButton.style.backgroundImage = "url('img/Empty-heart.png')";
  } else {
    likeButton.classList.add('liked');
    likeButton.style.backgroundImage = "url('img/Filled-heart.png')";
  }
}

// Helper function to check, if two dates are the same day
function isSameDate(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
}