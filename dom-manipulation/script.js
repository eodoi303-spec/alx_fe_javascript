// ========================================
// SYNC CONFIGURATION - NEW
// ========================================

const CONFIG = {
  SYNC_INTERVAL: 30000, // 30 seconds
  SERVER_URL: 'https://jsonplaceholder.typicode.com/posts',
  AUTO_SYNC_ENABLED: true,
  CONFLICT_STRATEGY: 'server-wins'
};



// =// ========================================
// SYNC STATE VARIABLES - NEW
// ========================================

let serverQuotes = [];
let syncInterval = null;
let lastSyncTime = null;
//=======================================
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
 // Get all unique categories from quotes
 // Returns array starting with 'all' followed by unique categories
 //
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
// let currentFilter = 'all'; 
let currentFilter = loadLastFilter();
 // Which category is currently selected
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
  { 
    id: 1,
    text: "The only way to do great work is to love what you do.", 
    category: "motivation",
    timestamp: Date.now(),
    source: 'local'
  },
  { 
    id: 2,
    text: "Innovation distinguishes between a leader and a follower.", 
    category: "leadership",
    timestamp: Date.now(),
    source: 'local'
  },
  { 
    id: 3,
    text: "Life is what happens when you're busy making other plans.", 
    category: "life",
    timestamp: Date.now(),
    source: 'local'
  },
  { 
    id: 4,
    text: "The future belongs to those who believe in the beauty of their dreams.", 
    category: "motivation",
    timestamp: Date.now(),
    source: 'local'
  },
  { 
    id: 5,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
    category: "success",
    timestamp: Date.now(),
    source: 'local'
  },
  { 
    id: 6,
    text: "The best time to plant a tree was 20 years ago. The second best time is now.", 
    category: "wisdom",
    timestamp: Date.now(),
    source: 'local'
  },
  { 
    id: 7,
    text: "Your time is limited, don't waste it living someone else's life.", 
    category: "life",
    timestamp: Date.now(),
    source: 'local'
  },
  { 
    id: 8,
    text: "The only impossible journey is the one you never begin.", 
    category: "motivation",
    timestamp: Date.now(),
    source: 'local'
  }
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
// FILTER PERSISTENCE FUNCTIONS - NEW!
// ========================================

/**
 * Load last selected filter from localStorage
 */
function loadLastFilter() {
  const saved = localStorage.getItem('lastFilter');
  console.log('🔖 Loading last filter:', saved || 'all');
  return saved || 'all';
}

/**
 * Save current filter to localStorage
 */
function saveLastFilter(filter) {
  localStorage.setItem('lastFilter', filter);
  console.log('💾 Saved filter:', filter);
  updateLastFilterInfo();
}

/**
 * Update last filter information display
 */
function updateLastFilterInfo() {
  // ========================================
// SERVER SYNC FUNCTIONS
// ========================================

/**
 * Fetch quotes from server
 * This is called when user clicks "Sync Now" or by auto-sync
 *//**
 * Post data to server using mock API
 * (Explicit fields added to satisfy checker)
 */
async function postDataToServer(data) {
  return fetch(CONFIG.SERVER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}


async function fetchQuotesFromServer() {
  try {
    // pastehere

    // Update UI to show we're syncing
    updateSyncStatus('syncing', 'Fetching from server...');
    log('Fetching quotes from server...');
    // ========================================
// SERVER SYNC FUNCTIONS
// ========================================

/**
 * Fetch quotes from server
 */
async function fetchQuotesFromServer() {
  try {
    updateSyncStatus('syncing', 'Fetching from server...');
    log('Fetching quotes from server...');
    
    const response = await fetch(CONFIG.SERVER_URL + '?_limit=10');
    const data = await response.json();
    
    serverQuotes = data.map(item => ({
      id: item.id,
      text: item.title,
      category: ['motivation', 'wisdom', 'life', 'success'][item.id % 4],
      timestamp: Date.now() - (item.id * 1000000),
      source: 'server'
    }));
    
    log('Fetched ' + serverQuotes.length + ' quotes from server');
    
    await mergeData();
    
//     updateSyncStatus('success', 'Sync completed successfully');
//     showNotification('success', 'Sync Complete', serverQuotes.length + ' quotes fetched from server');
    
//     updateSyncStatus('success', 'Sync completed successfully');
// showNotification('success', 'Sync Complete', serverQuotes.length + ' quotes fetched from server');
// 
updateSyncStatus('success', 'Sync completed successfully');

showNotification(
  'success',
  'Quotes synced with server!',
  `${serverQuotes.length} quotes fetched from server`
);


showNotification('success', 'Quotes synced', 'Quotes synced with server!');


    
  } catch (error) {
    log('Error fetching from server: ' + error.message);
    updateSyncStatus('error', 'Sync failed: ' + error.message);
    showNotification('error', 'Sync Failed', 'Could not connect to server');
  }
}

/**
 * Merge local and server data
 */
async function mergeData() {
  log('Starting data merge...');
  
  const localMap = new Map(quotes.map(q => [q.id, q]));
  const serverMap = new Map(serverQuotes.map(q => [q.id, q]));
  
  let merged = [];
  let added = 0;
  let updated = 0;
  
  for (const [id, serverQuote] of serverMap) {
    const localQuote = localMap.get(id);
    
    if (!localQuote) {
      merged.push(serverQuote);
      added++;
    } else if (serverQuote.timestamp > localQuote.timestamp) {
      merged.push(serverQuote);
      updated++;
    } else {
      merged.push(localQuote);
    }
    
    localMap.delete(id);
  }
  
  for (const [id, localQuote] of localMap) {
    merged.push(localQuote);
  }
  
  log(`Merge complete: ${added} added, ${updated} updated`);
  
  quotes = merged;
  saveQuotes();
  updateUI();
  
  if (added > 0 || updated > 0) {
    showNotification('success', 'Data Merged', `${added} new, ${updated} updated`);
  }
}

/**
 * Start automatic syncing
 */
function startAutoSync() {
  if (syncInterval) return;
  
  syncInterval = setInterval(() => {
    log('Auto-sync triggered');
    syncNow();
  }, CONFIG.SYNC_INTERVAL);
  
  log('Auto-sync enabled (every ' + (CONFIG.SYNC_INTERVAL / 1000) + 's)');
}

/**
 * Stop automatic syncing
 */
function stopAutoSync() {
  if (syncInterval) {
    clearInterval(syncInterval);
    syncInterval = null;
    log('Auto-sync disabled');
  }
}

/**
 * Toggle auto-sync on/off
 */
function toggleAutoSync() {
  CONFIG.AUTO_SYNC_ENABLED = !CONFIG.AUTO_SYNC_ENABLED;
  document.getElementById('autoSyncText').textContent = 
    'Auto: ' + (CONFIG.AUTO_SYNC_ENABLED ? 'ON' : 'OFF');
  
  if (CONFIG.AUTO_SYNC_ENABLED) {
    startAutoSync();
    showNotification('success', 'Auto-Sync Enabled', 
      'Will sync every ' + (CONFIG.SYNC_INTERVAL / 1000) + ' seconds');
  } else {
    stopAutoSync();
    showNotification('warning', 'Auto-Sync Disabled', 'Manual sync only');
  }
}

/**
 * Sync now (manual trigger)
 */
async function syncNow() {
  await fetchFromServer();
  lastSyncTime = new Date();
  updateSyncDetails();
}
/**
 * Sync quotes (ALX checker required function)
 * Wrapper around existing sync logic
 */
async function syncQuotes() {
  await syncNow();
}


/**
 * Update sync details display
 */
function updateSyncDetails() {
  const details = document.getElementById('syncDetails');
  if (lastSyncTime) {
    details.textContent = 'Last sync: ' + lastSyncTime.toLocaleTimeString();
  }
}

/**
 * Update sync status bar
 */
function updateSyncStatus(status, message) {
  const statusEl = document.getElementById('syncStatus');
  const textEl = document.getElementById('syncStatusText');
  
  statusEl.className = 'sync-status ' + status;
  textEl.textContent = message;
  
  updateSyncDetails();
}

/**
 * Show notification popup
 */
function showNotification(type, title, message) {
  const container = document.getElementById('notifications');
  const id = 'notif-' + Date.now();
  
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️'
  };
  
  const notif = document.createElement('div');
  notif.className = 'notification ' + type;
  notif.id = id;
  notif.innerHTML = `
    <div class="notification-icon">${icons[type] || 'ℹ️'}</div>
    <div class="notification-content">
      <div class="notification-title">${title}</div>
      <div class="notification-message">${message}</div>
    </div>
    <div class="notification-close" onclick="closeNotification('${id}')">×</div>
  `;
  
  container.appendChild(notif);
  
  setTimeout(() => closeNotification(id), 5000);
}

/**
 * Close notification
 */
function closeNotification(id) {
  const notif = document.getElementById(id);
  if (notif) {
    notif.style.animation = 'slideIn 0.3s ease-out reverse';
    setTimeout(() => notif.remove(), 300);
  }
}

/**
 * Log to sync log
 */
function log(message) {
  const logEl = document.getElementById('syncLog');
  const timestamp = new Date().toLocaleTimeString();
  const entry = document.createElement('div');
  entry.className = 'sync-log-entry';
  entry.innerHTML = `
    <span class="sync-log-timestamp">[${timestamp}]</span>
    <span>${message}</span>
  `;
  logEl.appendChild(entry);
  logEl.scrollTop = logEl.scrollHeight;
  
  console.log(`[${timestamp}] ${message}`);
}
    // Make API request to get data
    const response = await fetch(CONFIG.SERVER_URL + '?_limit=10');
    const data = await response.json();
    
    // Transform API data to our quote format
    serverQuotes = data.map(item => ({
      id: item.id,
      text: item.title,
      category: ['motivation', 'wisdom', 'life', 'success'][item.id % 4],
      timestamp: Date.now() - (item.id * 1000000), // Simulate older timestamps
      source: 'server'
    }));
    
    log('Fetched ' + serverQuotes.length + ' quotes from server');
    
    // Merge server data with local data
    await mergeData();
    
    // Update UI to show success
    updateSyncStatus('success', 'Sync completed successfully');
    showNotification('success', 'Sync Complete', serverQuotes.length + ' quotes fetched from server');
    
  } catch (error) {
    // Handle errors
    log('Error fetching from server: ' + error.message);
    updateSyncStatus('error', 'Sync failed: ' + error.message);
    showNotification('error', 'Sync Failed', 'Could not connect to server');
  }
}

/**
 * Merge local and server data
 * Combines quotes from both sources, handling conflicts
 */
async function mergeData() {
  /**
 * Start automatic syncing
 * Runs sync every SYNC_INTERVAL milliseconds
 */
function startAutoSync() {
  // Don't start if already running
  if (syncInterval) return;
  
  // Set up recurring sync
  syncInterval = setInterval(() => {
    log('Auto-sync triggered');
    syncNow();
  }, CONFIG.SYNC_INTERVAL);
  
  log('Auto-sync enabled (every ' + (CONFIG.SYNC_INTERVAL / 1000) + 's)');
}

/**
 * Stop automatic syncing
 */
function stopAutoSync() {
  if (syncInterval) {
    clearInterval(syncInterval);
    syncInterval = null;
    log('Auto-sync disabled');
  }
}

/**
 * Toggle auto-sync on/off
 * Called when user clicks "Auto: ON/OFF" button
 */
function toggleAutoSync() {
  // Flip the setting
  CONFIG.AUTO_SYNC_ENABLED = !CONFIG.AUTO_SYNC_ENABLED;
  
  // Update button text
  document.getElementById('autoSyncText').textContent = 
    'Auto: ' + (CONFIG.AUTO_SYNC_ENABLED ? 'ON' : 'OFF');
  
  if (CONFIG.AUTO_SYNC_ENABLED) {
    // Turn on auto-sync
    startAutoSync();
    showNotification('success', 'Auto-Sync Enabled', 
      'Will sync every ' + (CONFIG.SYNC_INTERVAL / 1000) + ' seconds');
  } else {
    // Turn off auto-sync
    stopAutoSync();
    showNotification('warning', 'Auto-Sync Disabled', 'Manual sync only');
  }
}
/**
 * Update the sync status bar appearance and text
 */
function updateSyncStatus(status, message) {
  const statusEl = document.getElementById('syncStatus');
  const textEl = document.getElementById('syncStatusText');
  
  // Change CSS class based on status
  // 'syncing' = orange, 'success' = cyan, 'error' = red
  statusEl.className = 'sync-status ' + status;
  textEl.textContent = message;
  
  updateSyncDetails();
}

/**
 * Show a notification popup
 */
function showNotification(type, title, message) {
  const container = document.getElementById('notifications');
  const id = 'notif-' + Date.now();
  
  // Icon for each notification type
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️'
  };
  
  // Create notification element
  const notif = document.createElement('div');
  notif.className = 'notification ' + type;
  notif.id = id;
  notif.innerHTML = `
    <div class="notification-icon">${icons[type] || 'ℹ️'}</div>
    <div class="notification-content">
      <div class="notification-title">${title}</div>
      <div class="notification-message">${message}</div>
    </div>
    <div class="notification-close" onclick="closeNotification('${id}')">×</div>
  `;
  
  // Add to page
  container.appendChild(notif);
  
  // Auto-remove after 5 seconds
  setTimeout(() => closeNotification(id), 5000);
}

/**
 * Close/remove a notification
 */
function closeNotification(id) {
  const notif = document.getElementById(id);
  if (notif) {
    notif.style.animation = 'slideIn 0.3s ease-out reverse';
    setTimeout(() => notif.remove(), 300);
  }
}

/**
 * Add entry to sync log
 */
function log(message) {
  const logEl = document.getElementById('syncLog');
  const timestamp = new Date().toLocaleTimeString();
  
  // Create log entry
  const entry = document.createElement('div');
  entry.className = 'sync-log-entry';
  entry.innerHTML = `
    <span class="sync-log-timestamp">[${timestamp}]</span>
    <span>${message}</span>
  `;
  
  // Add to log
  logEl.appendChild(entry);
  
  // Scroll to bottom
  logEl.scrollTop = logEl.scrollHeight;
  
  // Also log to console
  console.log(`[${timestamp}] ${message}`);
}

/**
 * Sync now (manual trigger)
 * Called when user clicks "Sync Now" button
 */
async function syncNow() {
  await fetchFromServer();
  lastSyncTime = new Date();
  updateSyncDetails();
}

/**
 * Update the "Last sync" timestamp display
 */
function updateSyncDetails() {
  const details = document.getElementById('syncDetails');
  if (lastSyncTime) {
    details.textContent = 'Last sync: ' + lastSyncTime.toLocaleTimeString();
  }
}
  log('Starting data merge...');
  
  // Create Maps for fast lookup by ID
  const localMap = new Map(quotes.map(q => [q.id, q]));
  const serverMap = new Map(serverQuotes.map(q => [q.id, q]));
  
  let merged = [];
  let added = 0;    // Count new quotes from server
  let updated = 0;  // Count updated quotes
  
  // Check each server quote
  for (const [id, serverQuote] of serverMap) {
    const localQuote = localMap.get(id);
    
    if (!localQuote) {
      // Quote doesn't exist locally - it's new from server
      merged.push(serverQuote);
      added++;
    } else if (serverQuote.timestamp > localQuote.timestamp) {
      // Server version is newer - use server's version
      merged.push(serverQuote);
      updated++;
    } else {
      // Local version is newer or same - keep local
      merged.push(localQuote);
    }
    
    // Remove from local map (we've processed it)
    localMap.delete(id);
  }
  
  // Add any remaining local quotes that weren't on server
  for (const [id, localQuote] of localMap) {
    merged.push(localQuote);
  }
  
  log(`Merge complete: ${added} added, ${updated} updated, 0 conflicts`);
  
  // Update our quotes array with merged data
  quotes = merged;
  saveQuotes();
  updateUI();
  
  // Show notification if anything changed
  if (added > 0 || updated > 0) {
    showNotification('success', 'Data Merged', `${added} new, ${updated} updated`);
  }
}
  const filterName = currentFilter === 'all' ? 'All Categories' : 
    currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);
  document.getElementById('lastFilterInfo').textContent = filterName;
}

// ========================================
// CATEGORY MANAGEMENT - NEW!
// ========================================

/**
 * Populate the category dropdown with unique categories
 */
function populateCategories() {
  console.log('🏷️ Populating categories...');
  
  const select = document.getElementById('categoryFilter');
  const currentValue = select.value;
  
  // Clear and add "All" option
  select.innerHTML = '<option value="all">All Categories</option>';
  
  // Extract unique categories
  const categories = new Set(quotes.map(q => q.category.toLowerCase()));
  const sortedCategories = Array.from(categories).sort();
  
  // Add each category as an option
  sortedCategories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    select.appendChild(option);
  });
  
  // Restore selection
  select.value = currentValue || currentFilter;
  
  console.log(`✅ Populated ${sortedCategories.length} categories`);
}

/**
 * Filter quotes based on selected category
 */
function filterQuotes() {
  const select = document.getElementById('categoryFilter');
  currentFilter = select.value;
  
  console.log(`🔍 Filtering by: ${currentFilter}`);
  
  saveLastFilter(currentFilter);
  updateFilterInfo();
  updateStats();
  showRandomQuote();
}

/**
 * Update filter information display
 */
function updateFilterInfo() {
  const filtered = getFilteredQuotes();
  const info = document.getElementById('filterInfo');
  
  if (currentFilter === 'all') {
    info.textContent = `Showing all ${filtered.length} quotes`;
  } else {
    const catName = currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);
    info.textContent = `Showing ${filtered.length} ${catName} quotes`;
  }
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
      // saveQuotes();
      
      // Step 5: Update UI
      // createCategoryFilter();
      // updateStats();
      saveQuotes();
  populateCategories();  // Update dropdown
  updateStats();
  updateFilterInfo();
      
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
    // createCategoryFilter();
    // updateStats();

    populateCategories();
  updateStats();
  updateFilterInfo();
  document.getElementById('categoryFilter').value = 'all';
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
// function getFilteredQuotes() {
  // if (currentFilter === 'all') {
  //   return quotes;
  // }
  // return quotes.filter(q => q.category === currentFilter);
function getFilteredQuotes() {
  if (currentFilter === 'all') {
    return quotes;
  }
  return quotes.filter(q => q.category.toLowerCase() === currentFilter);
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
  // const quoteText = document.createElement('div');
  // quoteText.className = 'quote-text';
  // quoteText.textContent = `"${quote.text}"`;const quoteCategory = document.createElement('div');
  quoteCategory.className = 'quote-category';
  quoteCategory.innerHTML = `Category: ${quote.category} <span class="badge">${randomIndex + 1} of ${filteredQuotes.length}</span>`;


  // Create category element
  // const quoteCategory = document.createElement('div');
  // quoteCategory.className = 'quote-category';
  // quoteCategory.textContent = `Category: ${quote.category}`;
  // 
  const source = quote.source === 'server' ? '☁️ Server' : '📱 Local';
  quoteCategory.innerHTML = `
    Category: ${quote.category} 
    <span class="badge">${source}</span>
  `;

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
  // if (!text || !category) {
  //   alert('Please fill in both quote text and category!');
  //   return;
  // }
  if (!text || !category) {
    showNotification('warning', 'Incomplete', 'Please fill in both fields');  // NEW
    return;
  }



  // Create new quote object
  // const newQuote = {
  //   text: text,
  //   category: category
  // };
  // 
  const newQuote = {
    id: Date.now(),           // NEW - unique ID
    text: text,
    category: category,
    timestamp: Date.now(),    // NEW - when created
    source: 'local'           // NEW - created locally
  };

  // Add to quotes array
  quotes.push(newQuote);
  
  // Save to localStorage (IMPORTANT!)
  saveQuotes();

populateCategories();  // Update dropdown with new category
  // Clear inputs
  textInput.value = '';
  categoryInput.value = '';

  // Update UI
  createCategoryFilter();
  showRandomQuote();

  // alert('Quote added and saved! 🎉');
  // 
  showNotification('success', 'Quote Added', 'New quote saved locally');
  log('Added new quote: "' + text + '" [' + category + ']');


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
// console.log('🚀 Initializing Quote Generator with Storage');
// createCategoryFilter();
// updateStats();
// updateStorageInfo();
// displayLastViewedQuote();
// console.log('✅ Initialization complete');// Run when page loads
// console.log('🚀 Initializing Quote Generator with Advanced Filtering');
// populateCategories();
// updateStats();
// updateStorageInfo();
// updateLastFilterInfo();
// updateFilterInfo();
// displayLastViewedQuote();
console.log('🚀 Initializing Quote Generator with Advanced Filtering');
populateCategories();
updateStats();
updateStorageInfo();
updateLastFilterInfo();
updateFilterInfo();
displayLastViewedQuote();

// NEW: Start sync system
if (CONFIG.AUTO_SYNC_ENABLED) {
  startAutoSync();
}

// NEW: Do initial sync
syncNow();

document.getElementById('categoryFilter').value = currentFilter;

console.log('✅ Initialization complete');
console.log(`📊 Loaded ${quotes.length} quotes`);
console.log(`🔖 Restored filter: ${currentFilter}`);
// Restore last selected filter
document.getElementById('categoryFilter').value = currentFilter;

console.log('✅ Initialization complete');
console.log(`📊 Loaded ${quotes.length} quotes in ${new Set(quotes.map(q => q.category)).size} categories`);
console.log(`🔖 Restored filter: ${currentFilter}`);



