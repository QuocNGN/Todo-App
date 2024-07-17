const taskInput = document.querySelector('.task-input input');
const taskBox = document.querySelector('.task-box');
const selectFilters = document.querySelector('.filter select');
const emptyImage = document.querySelector('.empty-image');
const addButton = document.querySelector('.add-button');
const resetButton = document.querySelector('.reset-button');

let editId;
let isEditedTask = false;
let todos = JSON.parse(localStorage.getItem('todo-list')) || [];
let currentFilter = 'all'; // Add this variable to store the current filter
