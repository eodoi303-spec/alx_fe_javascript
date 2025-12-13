// ========================================
// DATA STORAGE
// ========================================

// Array of quote objects - our main data
// let quotes = [
//   { text: "The only way to do great work is to love what you do.", category: "motivation" },
//   { text: "Innovation distinguishes between a leader and a follower.", category: "leadership" },
//   { text: "Life is what happens when you're busy making other plans.", category: "life" },
//   { text: "The future belongs to those who believe in the beauty of their dreams.", category: "motivation" },
//   { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "success" },
//   { text: "The best time to plant a tree was 20 years ago. The second best time is now.", category: "wisdom" },
//   { text: "Your time is limited, don't waste it living someone else's life.", category: "life" },
//   { text: "The only impossible journey is the one you never begin.", category: "motivation" }
// ];

// State variables - track current status
// let currentFilter = 'all';  // Which category is selected
// let formVisible = false;    // Is the add quote form showing?


// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Get all unique categories from quotes
 * Returns array starting with 'all' followed by unique categories
 */
// function getCategories() {
  // Get all categories from quotes array
  // const categoryArray = quotes.map(q => q.category);
  
  // Use Set to remove duplicates
  // const uniqueCategories = new Set(categoryArray);
  
  // Convert back to array and add 'all' at the beginning
//   return ['all', ...Array.from(uniqueCategories)];
// }

/**
 * Get quotes filtered by current category
 * Returns all quotes if 'all' is selected, otherwise filters by category
 */
// function getFilteredQuotes() {
//   if (currentFilter === 'all') {
//     return quotes;
//   }
//   return quotes.filter(q => q.category === currentFilter);
// }


// ========================================
// MAIN DISPLAY FUNCTIONS
// ========================================

/**
 * Display a random quote from the filtered quotes
 */
// function showRandomQuote() {
  // Get quotes based on current filter
  // const filteredQuotes = getFilteredQuotes();
  
  // Check if there are any quotes to show
  // if (filteredQuotes.length === 0) {
  //   const display = document.getElementById('quoteDisplay');
  //   display.innerHTML = '<div class="empty-state">No quotes available in this category. Add some quotes!</div>';
  //   return;
  // }

  // Generate random index
  // const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  // const quote = filteredQuotes[randomIndex];

  // Get the display element
  // const display = document.getElementById('quoteDisplay');
  // display.className = 'fade-in';
  
  // Clear existing content
  // display.innerHTML = '';

  // Create quote text element
  // const quoteText = document.createElement('div');
  // quoteText.className = 'quote-text';
  // quoteText.textContent = `"${quote.text}"`;

  // Create category element
  // const quoteCategory = document.createElement('div');
  // quoteCategory.className = 'quote-category';
  // quoteCategory.textContent = `Category: ${quote.category}`;

  // Add elements to display
  // display.appendChild(quoteText);
  // display.appendChild(quoteCategory);

  // Update statistics
//   updateStats();
// }

/**
 * Create category filter buttons dynamically
 */
// function createCategoryFilter() {
  // Get the container for filter buttons
  // const filterContainer = document.getElementById('categoryFilter');
  // filterContainer.innerHTML = '';

  // Get all categories
  // const categories = getCategories();
  
  // Create a button for each category
  // categories.forEach(cat => {
    // Create button element
    // const btn = document.createElement('button');
    // btn.className = 'category-btn';
    
    // Capitalize first letter
    // btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    
    // Mark active button
    // if (cat === currentFilter) {
    //   btn.classList.add('active');
    // }

    // Add click event
    // btn.onclick = () => {
    //   currentFilter = cat;           // Update current filter
      // createCategoryFilter();        // Recreate buttons (to update active state)
    //   showRandomQuote();             // Show a quote from new category
    // };

    // Add button to container
//     filterContainer.appendChild(btn);
//   });
// }


// ========================================
// FORM FUNCTIONS
// ========================================

/**
 * Toggle the add quote form visibility
 */
// function createAddQuoteForm() {
//   const formContainer = document.getElementById('formContainer');
  
  // If form is visible, hide it
  // if (formVisible) {
  //   formContainer.innerHTML = '';
  //   formVisible = false;
  //   return;
  // }

  // Clear any existing content
  // formContainer.innerHTML = '';

  // Create form container
  // const form = document.createElement('div');
  // form.className = 'add-quote-form fade-in';

  // Create form title
  // const title = document.createElement('div');
  // title.className = 'form-title';
  // title.textContent = '📝 Add a New Quote';

  // Create text input group
  // const textGroup = document.createElement('div');
  // textGroup.className = 'form-group';
  
  // const textInput = document.createElement('input');
  // textInput.type = 'text';
  // textInput.id = 'newQuoteText';
  // textInput.placeholder = 'Enter a new quote';

  // Create category input group
  // const categoryGroup = document.createElement('div');
  // categoryGroup.className = 'form-group';
  
  // const categoryInput = document.createElement('input');
  // categoryInput.type = 'text';
  // categoryInput.id = 'newQuoteCategory';
  // categoryInput.placeholder = 'Enter quote category';

  // Create add button
  // const addButton = document.createElement('button');
  // addButton.textContent = 'Add Quote';
  // addButton.onclick = addQuote;

  // Assemble the form
  // textGroup.appendChild(textInput);
  // categoryGroup.appendChild(categoryInput);
  
  // form.appendChild(title);
  // form.appendChild(textGroup);
  // form.appendChild(categoryGroup);
  // form.appendChild(addButton);

  // Add form to page
//   formContainer.appendChild(form);
//   formVisible = true;
// }

/**
 * Add a new quote to the collection
 */
// function addQuote() {
  // Get input elements
  // const textInput = document.getElementById('newQuoteText');
  // const categoryInput = document.getElementById('newQuoteCategory');

  // Get values and clean them
  // const text = textInput.value.trim();
  // const category = categoryInput.value.trim().toLowerCase();

  // Validate inputs
  // if (!text || !category) {
  //   alert('Please fill in both quote text and category!');
  //   return;
  // }

  // Create new quote object
  // const newQuote = {
  //   text: text,
  //   category: category
  // };

  // Add to quotes array
  // quotes.push(newQuote);

  // Clear inputs
  // textInput.value = '';
  // categoryInput.value = '';

  // Update UI
  // createCategoryFilter();  // Recreate category buttons (new category might exist)
  // showRandomQuote();       // Show a quote (maybe the new one)

  // Show success message
//   alert('Quote added successfully! 🎉');
// }


// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Clear all quotes from the collection
 */
// function clearAllQuotes() {
  // Confirm with user
  // if (confirm('Are you sure you want to clear all quotes? This cannot be undone.')) {
  //   quotes = [];                      // Empty the array
    // currentFilter = 'all';            // Reset filter
    // createCategoryFilter();           // Update category buttons
    
    // Show empty message
    // const display = document.getElementById('quoteDisplay');
    // display.innerHTML = '<div class="empty-state">No quotes available. Add some quotes to get started!</div>';
    
//     updateStats();                    // Update statistics
//   }
// }

/**
 * Update the statistics display
 */
// function updateStats() {
//   const statsDiv = document.getElementById('stats');
  
  // Calculate statistics
  // const totalQuotes = quotes.length;
  // const totalCategories = new Set(quotes.map(q => q.category)).size;
  // const filteredCount = getFilteredQuotes().length;

  // Display statistics
//   statsDiv.innerHTML = `
//     <strong>Total Quotes:</strong> ${totalQuotes} | 
//     <strong>Categories:</strong> ${totalCategories} | 
//     <strong>Current Filter:</strong> ${filteredCount} quotes
//   `;
// }


// ========================================
// EVENT LISTENERS
// ========================================

// Add event listeners to buttons
// document.getElementById('newQuote').addEventListener('click', showRandomQuote);
// document.getElementById('toggleForm').addEventListener('click', createAddQuoteForm);
// document.getElementById('clearQuotes').addEventListener('click', clearAllQuotes);


// ========================================
// INITIALIZATION
// ========================================

// Run when page loads
// createCategoryFilter();  // Create category buttons
// updateStats();           // Show initial statistics// ========================================
// DATA STORAGE WITH LOCAL STORAGE
// ========================================

/**
 * Initialize quotes from localStorage or use defaults
 * This runs immediately when the script loads
 */
let quotes = loadQuotes();

// State variables
let currentFilter = 'all';  // Which category is currently selected
let formVisible = false;    // Is the add quote form showing?

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================

/**
 * Load quotes from localStorage
 * Returns saved quotes or default quotes if none exist
 */
function loadQuotes() {
  // Try to get quotes from localStorage
  const savedQuotes = localStorage.getItem('quotes');
  
  if (savedQuotes) {
    // Found saved quotes - parse JSON string back to array
    console.log('📖 Loading quotes from localStorage');
    return JSON.parse(savedQuotes);
  } else {
    // No saved quotes - use default quotes
    console.log('📝 Using default quotes');
    return [
      { text: "The only way to do great work is to love what you do.", category: "motivation" },
      { text: "Innovation distinguishes between a leader and a follower.", category: "leadership" },
      { text: "Life is what happens when you're busy making other plans.", category: "life" },
      { text: "The future belongs to those who believe in the beauty of their dreams.", category: "motivation" },
      { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", category: "success" },
      { text: "The best time to plant a tree was 20 years ago. The second best time is now.", category: "wisdom" },
      { text: "Your time is limited, don't waste it living someone else's life.", category: "life" },
      { text: "The only impossible journey is the one you never begin.", category: "motivation" }
    ];
  }
}

/**
 * Save quotes to localStorage
 * Called every time quotes array changes
 */
function saveQuotes() {
  // Convert quotes array to JSON string and save
  localStorage.setItem('quotes', JSON.stringify(quotes));
  console.log('💾 Quotes saved to localStorage');
  updateStorageInfo();
}

/**
 * Update storage information display
 * Shows how much data is stored
 */
function updateStorageInfo() {
  // Calculate size of stored data
  const quotesSize = new Blob([JSON.stringify(quotes)]).size;
  const sizeKB = (quotesSize / 1024).toFixed(2);
  
  // Update the display
  document.getElementById('sessionInfo').textContent = 
    `Stored ${quotes.length} quotes (${sizeKB} KB in localStorage)`;
}

// ========================================
// SESSION STORAGE FUNCTIONS
// ========================================

/**
 * Save last viewed quote to sessionStorage
 * This data only lasts for the current browser session (until tab closes)
 */
function saveLastViewedQuote(quote) {
  // Create object with quote data and timestamp
  const quoteData = {
    text: quote.text,
    category: quote.category,
    timestamp: new Date().toLocaleString()
  };
  
  // Save to sessionStorage (temporary)
  sessionStorage.setItem('lastViewedQuote', JSON.stringify(quoteData));
  
  // Update the display
  displayLastViewedQuote();
}

/**
 * Display last viewed quote from sessionStorage
 */
function displayLastViewedQuote() {
  // Try to get last viewed quote
  const lastQuote = sessionStorage.getItem('lastViewedQuote');
  const displayDiv = document.getElementById('lastViewedQuote');
  
  if (lastQuote) {
    // Parse and display the quote info
    const quoteData = JSON.parse(lastQuote);
    displayDiv.innerHTML = `
      <strong>🕒 Last Viewed:</strong> "${quoteData.text.substring(0, 50)}..." 
      (${quoteData.category}) - ${quoteData.timestamp}
    `;
  } else {
    // No quote viewed yet
    displayDiv.innerHTML = '<strong>🕒 Session Storage:</strong> No quote viewed yet this session';
  }
}

// ========================================
// JSON IMPORT/EXPORT FUNCTIONS
// ========================================

/**
 * Export quotes to JSON file
 * Creates a downloadable file with all quotes
 */
function exportToJson() {
  // Step 1: Convert quotes array to JSON string with pretty formatting
  const jsonString = JSON.stringify(quotes, null, 2);
  
  // Step 2: Create a Blob (file-like object) from the JSON string
  const blob = new Blob([jsonString], { type: 'application/json' });
  
  // Step 3: Create a temporary download URL
  const url = URL.createObjectURL(blob);
  
  // Step 4: Create an invisible download link
  const link = document.createElement('a');
  link.href = url;
  link.download = `quotes-${new Date().getTime()}.json`;  // Filename with timestamp
  
  // Step 5: Trigger the download
  document.body.appendChild(link);
  link.click();
  
  // Step 6: Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  // Show success message
  alert(`✅ Exported ${quotes.length} quotes successfully!`);
}

/**
 * Import quotes from JSON file
 * Reads file and adds quotes to existing collection
 */
function importFromJsonFile(event) {
  // Get the selected file
  const file = event.target.files[0];
  
  if (!file) {
    return;  // No file selected
  }

  // Create FileReader to read the file
  const fileReader = new FileReader();
  
  // Set up what happens when file is loaded
  fileReader.onload = function(e) {
    try {
      // Step 1: Parse JSON string into JavaScript object
      const importedQuotes = JSON.parse(e.target.result);
      
      // Step 2: Validate that it's an array
      if (!Array.isArray(importedQuotes)) {
        alert('❌ Invalid file format. Expected an array of quotes.');
        return;
      }
      
      // Step 3: Validate and add each quote
      let validQuotes = 0;
      importedQuotes.forEach(quote => {
        // Check if quote has required properties
        if (quote.text && quote.category) {
          quotes.push(quote);
          validQuotes++;
        }
      });
      
      // Step 4: Save to localStorage
      saveQuotes();
      
      // Step 5: Update UI
      createCategoryFilter();
      updateStats();
      
      // Show success message
      alert(`✅ Successfully imported ${validQuotes} quotes!`);
      
      // Reset file input
      event.target.value = '';
      
    } catch (error) {
      // Handle errors (invalid JSON, etc.)
      alert('❌ Error reading file: ' + error.message);
    }
  };
  
  // Start reading the file as text
  fileReader.readAsText(file);
}

/**
 * Clear all data from localStorage and reset
 */
function clearAllData() {
  // Confirm with user
  if (confirm('⚠️ Are you sure you want to clear ALL quotes and data? This cannot be undone!')) {
    // Clear localStorage
    localStorage.removeItem('quotes');
    
    // Clear sessionStorage
    sessionStorage.removeItem('lastViewedQuote');
    
    // Reset quotes array to empty
    quotes = [];
    
    // Update UI
    currentFilter = 'all';
    createCategoryFilter();
    updateStats();
    updateStorageInfo();
    displayLastViewedQuote();
    
    // Show empty state
    const display = document.getElementById('quoteDisplay');
    display.innerHTML = '<div class="empty-state">All data cleared. Add some quotes to get started!</div>';
    
    alert('✅ All data cleared successfully!');
  }
}

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Get all unique categories from quotes
 * Returns array starting with 'all' followed by unique categories
 */
function getCategories() {
  const categories = new Set(quotes.map(q => q.category));
  return ['all', ...Array.from(categories)];
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
// DISPLAY FUNCTIONS
// ========================================

/**
 * Display a random quote from the filtered quotes
 */
function showRandomQuote() {
  const filteredQuotes = getFilteredQuotes();
  
  // Check if there are any quotes to show
  if (filteredQuotes.length === 0) {
    const display = document.getElementById('quoteDisplay');
    display.innerHTML = '<div class="empty-state">No quotes available. Add some quotes!</div>';
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

  // Save to sessionStorage (temporary)
  saveLastViewedQuote(quote);
  
  // Update statistics
  updateStats();
}

/**
 * Create category filter buttons dynamically
 */
function createCategoryFilter() {
  const filterContainer = document.getElementById('categoryFilter');
  filterContainer.innerHTML = '';

  const categories = getCategories();
  
  // Create a button for each category
  categories.forEach(cat => {
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
      currentFilter = cat;
      createCategoryFilter();
      showRandomQuote();
    };

    filterContainer.appendChild(btn);
  });
}

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
  
  // Save to localStorage (IMPORTANT!)
  saveQuotes();

  // Clear inputs
  textInput.value = '';
  categoryInput.value = '';

  // Update UI
  createCategoryFilter();
  showRandomQuote();

  alert('Quote added and saved! 🎉');
}

/**
 * Update the statistics display
 */
function updateStats() {
  const statsDiv = document.getElementById('stats');
  
  const totalQuotes = quotes.length;
  const totalCategories = new Set(quotes.map(q => q.category)).size;
  const filteredCount = getFilteredQuotes().length;

  statsDiv.innerHTML = `
    <strong>Total Quotes:</strong> ${totalQuotes} | 
    <strong>Categories:</strong> ${totalCategories} | 
    <strong>Current Filter:</strong> ${filteredCount} quotes
  `;
}

// ========================================
// EVENT LISTENERS
// ========================================

// Set up event listeners for buttons
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
document.getElementById('toggleForm').addEventListener('click', createAddQuoteForm);
document.getElementById('exportBtn').addEventListener('click', exportToJson);
document.getElementById('importFile').addEventListener('change', importFromJsonFile);
document.getElementById('clearStorage').addEventListener('click', clearAllData);

// ========================================
// INITIALIZATION
// ========================================

// Run when page loads
console.log('🚀 Initializing Quote Generator with Storage');
createCategoryFilter();
updateStats();
updateStorageInfo();
displayLastViewedQuote();
console.log('✅ Initialization complete');


