// ========================================
// DATA STORAGE
// ========================================

// Array of quote objects - our main data
let quotes = [
  { text: "The only way to do great work is to love what you do.", category: "motivation" },
  { text: "Innovation distinguishes between a leader and a follower.", category: "leadership" },
  { text: "Life is what happens when you're busy making other plans.", category: "life" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", category: "motivation" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "success" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", category: "wisdom" },
  { text: "Your time is limited, don't waste it living someone else's life.", category: "life" },
  { text: "The only impossible journey is the one you never begin.", category: "motivation" }
];

// State variables - track current status
let currentFilter = 'all';  // Which category is selected
let formVisible = false;    // Is the add quote form showing?


// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Get all unique categories from quotes
 * Returns array starting with 'all' followed by unique categories
 */
function getCategories() {
  // Get all categories from quotes array
  const categoryArray = quotes.map(q => q.category);
  
  // Use Set to remove duplicates
  const uniqueCategories = new Set(categoryArray);
  
  // Convert back to array and add 'all' at the beginning
  return ['all', ...Array.from(uniqueCategories)];
}

/**
 * Get quotes filtered by current category
 * Returns all quotes if 'all' is selected, otherwise filters by category
 */
function getFilteredQuotes() {
  if (currentFilter === 'all') {
    return quotes;
  }
  return quotes.filter(q => q.category === currentFilter);
}


// ========================================
// MAIN DISPLAY FUNCTIONS
// ========================================

/**
 * Display a random quote from the filtered quotes
 */
function showRandomQuote() {
  // Get quotes based on current filter
  const filteredQuotes = getFilteredQuotes();
  
  // Check if there are any quotes to show
  if (filteredQuotes.length === 0) {
    const display = document.getElementById('quoteDisplay');
    display.innerHTML = '<div class="empty-state">No quotes available in this category. Add some quotes!</div>';
    return;
  }

  // Generate random index
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  const quote = filteredQuotes[randomIndex];

  // Get the display element
  const display = document.getElementById('quoteDisplay');
  display.className = 'fade-in';
  
  // Clear existing content
  display.innerHTML = '';

  // Create quote text element
  const quoteText = document.createElement('div');
  quoteText.className = 'quote-text';
  quoteText.textContent = `"${quote.text}"`;

  // Create category element
  const quoteCategory = document.createElement('div');
  quoteCategory.className = 'quote-category';
  quoteCategory.textContent = `Category: ${quote.category}`;

  // Add elements to display
  display.appendChild(quoteText);
  display.appendChild(quoteCategory);

  // Update statistics
  updateStats();
}

/**
 * Create category filter buttons dynamically
 */
function createCategoryFilter() {
  // Get the container for filter buttons
  const filterContainer = document.getElementById('categoryFilter');
  filterContainer.innerHTML = '';

  // Get all categories
  const categories = getCategories();
  
  // Create a button for each category
  categories.forEach(cat => {
    // Create button element
    const btn = document.createElement('button');
    btn.className = 'category-btn';
    
    // Capitalize first letter
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    
    // Mark active button
    if (cat === currentFilter) {
      btn.classList.add('active');
    }

    // Add click event
    btn.onclick = () => {
      currentFilter = cat;           // Update current filter
      createCategoryFilter();        // Recreate buttons (to update active state)
      showRandomQuote();             // Show a quote from new category
    };

    // Add button to container
    filterContainer.appendChild(btn);
  });
}


// ========================================
// FORM FUNCTIONS
// ========================================

/**
 * Toggle the add quote form visibility
 */
function createAddQuoteForm() {
  const formContainer = document.getElementById('formContainer');
  
  // If form is visible, hide it
  if (formVisible) {
    formContainer.innerHTML = '';
    formVisible = false;
    return;
  }

  // Clear any existing content
  formContainer.innerHTML = '';

  // Create form container
  const form = document.createElement('div');
  form.className = 'add-quote-form fade-in';

  // Create form title
  const title = document.createElement('div');
  title.className = 'form-title';
  title.textContent = '📝 Add a New Quote';

  // Create text input group
  const textGroup = document.createElement('div');
  textGroup.className = 'form-group';
  
  const textInput = document.createElement('input');
  textInput.type = 'text';
  textInput.id = 'newQuoteText';
  textInput.placeholder = 'Enter a new quote';

  // Create category input group
  const categoryGroup = document.createElement('div');
  categoryGroup.className = 'form-group';
  
  const categoryInput = document.createElement('input');
  categoryInput.type = 'text';
  categoryInput.id = 'newQuoteCategory';
  categoryInput.placeholder = 'Enter quote category';

  // Create add button
  const addButton = document.createElement('button');
  addButton.textContent = 'Add Quote';
  addButton.onclick = addQuote;

  // Assemble the form
  textGroup.appendChild(textInput);
  categoryGroup.appendChild(categoryInput);
  
  form.appendChild(title);
  form.appendChild(textGroup);
  form.appendChild(categoryGroup);
  form.appendChild(addButton);

  // Add form to page
  formContainer.appendChild(form);
  formVisible = true;
}

/**
 * Add a new quote to the collection
 */
function addQuote() {
  // Get input elements
  const textInput = document.getElementById('newQuoteText');
  const categoryInput = document.getElementById('newQuoteCategory');

  // Get values and clean them
  const text = textInput.value.trim();
  const category = categoryInput.value.trim().toLowerCase();

  // Validate inputs
  if (!text || !category) {
    alert('Please fill in both quote text and category!');
    return;
  }

  // Create new quote object
  const newQuote = {
    text: text,
    category: category
  };

  // Add to quotes array
  quotes.push(newQuote);

  // Clear inputs
  textInput.value = '';
  categoryInput.value = '';

  // Update UI
  createCategoryFilter();  // Recreate category buttons (new category might exist)
  showRandomQuote();       // Show a quote (maybe the new one)

  // Show success message
  alert('Quote added successfully! 🎉');
}


// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Clear all quotes from the collection
 */
function clearAllQuotes() {
  // Confirm with user
  if (confirm('Are you sure you want to clear all quotes? This cannot be undone.')) {
    quotes = [];                      // Empty the array
    currentFilter = 'all';            // Reset filter
    createCategoryFilter();           // Update category buttons
    
    // Show empty message
    const display = document.getElementById('quoteDisplay');
    display.innerHTML = '<div class="empty-state">No quotes available. Add some quotes to get started!</div>';
    
    updateStats();                    // Update statistics
  }
}

/**
 * Update the statistics display
 */
function updateStats() {
  const statsDiv = document.getElementById('stats');
  
  // Calculate statistics
  const totalQuotes = quotes.length;
  const totalCategories = new Set(quotes.map(q => q.category)).size;
  const filteredCount = getFilteredQuotes().length;

  // Display statistics
  statsDiv.innerHTML = `
    <strong>Total Quotes:</strong> ${totalQuotes} | 
    <strong>Categories:</strong> ${totalCategories} | 
    <strong>Current Filter:</strong> ${filteredCount} quotes
  `;
}


// ========================================
// EVENT LISTENERS
// ========================================

// Add event listeners to buttons
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
document.getElementById('toggleForm').addEventListener('click', createAddQuoteForm);
document.getElementById('clearQuotes').addEventListener('click', clearAllQuotes);


// ========================================
// INITIALIZATION
// ========================================

// Run when page loads
createCategoryFilter();  // Create category buttons
updateStats();           // Show initial statistics