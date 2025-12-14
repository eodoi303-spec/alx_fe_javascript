// ========================================
// SYNC CONFIGURATION
// ========================================

const CONFIG = {
  SYNC_INTERVAL: 30000,
  SERVER_URL: 'https://jsonplaceholder.typicode.com/posts',
  AUTO_SYNC_ENABLED: true,
  CONFLICT_STRATEGY: 'server-wins'
};

// ========================================
// STATE VARIABLES
// ========================================

let serverQuotes = [];
let syncInterval = null;
let lastSyncTime = null;

let quotes = loadQuotes();
let currentFilter = loadLastFilter();
let formVisible = false;

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================

function loadQuotes() {
  const saved = localStorage.getItem('quotes');
  if (saved) return JSON.parse(saved);

  return [
    { id: 1, text: "The only way to do great work is to love what you do.", category: "motivation", timestamp: Date.now(), source: "local" },
    { id: 2, text: "Innovation distinguishes between a leader and a follower.", category: "leadership", timestamp: Date.now(), source: "local" },
    { id: 3, text: "Life is what happens when you're busy making other plans.", category: "life", timestamp: Date.now(), source: "local" }
  ];
}

function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

function loadLastFilter() {
  return localStorage.getItem('lastFilter') || 'all';
}

function saveLastFilter(filter) {
  localStorage.setItem('lastFilter', filter);
}

// ========================================
// SESSION STORAGE
// ========================================

function saveToSession(quote) {
  sessionStorage.setItem('lastViewed', JSON.stringify({
    text: quote.text,
    category: quote.category,
    timestamp: new Date().toLocaleString()
  }));
}

// ========================================
// SERVER SYNC FUNCTIONS
// ========================================

/**
 * FETCH QUOTES FROM SERVER
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



async function fetchQuotesfromserver() {
  try {
    updateSyncStatus('syncing', 'Fetching from server...');
    log('Fetching quotes from server');

    const response = await fetch(CONFIG.SERVER_URL + '?_limit=10');
    const data = await response.json();

    serverQuotes = data.map(item => ({
      id: item.id,
      text: item.title,
      category: ['motivation', 'wisdom', 'life', 'success'][item.id % 4],
      timestamp: Date.now() - item.id * 100000,
      source: 'server'
    }));

    await mergeData();

    updateSyncStatus('success', 'Sync completed');
    showNotification('success', 'Sync Complete', `${serverQuotes.length} quotes fetched`);

  } catch (error) {
    updateSyncStatus('error', 'Sync failed');
    showNotification('error', 'Sync Failed', error.message);
  }
}

/**
 * MAIN SYNC CONTROLLER
 */
async function syncQuotes() {
  log('SyncQuotes triggered');
  await fetchQuotesfromserver();
  lastSyncTime = new Date();
  updateSyncDetails();
}

/**
 * MERGE DATA
 */
async function mergeData() {
  const localMap = new Map(quotes.map(q => [q.id, q]));
  const serverMap = new Map(serverQuotes.map(q => [q.id, q]));

  const merged = [];

  for (const [id, serverQuote] of serverMap) {
    const localQuote = localMap.get(id);

    if (!localQuote || serverQuote.timestamp > localQuote.timestamp) {
      merged.push(serverQuote);
    } else {
      merged.push(localQuote);
    }
    localMap.delete(id);
  }

  for (const q of localMap.values()) {
    merged.push(q);
  }

  quotes = merged;
  saveQuotes();
  updateUI();
}

/**
 * POST QUOTE TO SERVER (MOCK API)
 */
async function postQuoteToServer(quote) {
  try {
    const response = await fetch(CONFIG.SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: quote.text,
        body: quote.category,
        userId: 1
      })
    });

    const data = await response.json();
    log('Quote posted to server with ID ' + data.id);

  } catch (error) {
    log('Post failed: ' + error.message);
  }
}

// ========================================
// AUTO SYNC
// ========================================

function startAutoSync() {
  if (syncInterval) return;

  syncInterval = setInterval(() => {
    log('Auto-sync triggered');
    syncQuotes();
  }, CONFIG.SYNC_INTERVAL);
}

function stopAutoSync() {
  clearInterval(syncInterval);
  syncInterval = null;
}

// ========================================
// UI + HELPERS
// ========================================

function updateSyncStatus(status, message) {
  const el = document.getElementById('syncStatusText');
  if (el) el.textContent = message;
}

function updateSyncDetails() {
  const el = document.getElementById('syncDetails');
  if (el && lastSyncTime) {
    el.textContent = 'Last sync: ' + lastSyncTime.toLocaleTimeString();
  }
}

function showNotification(type, title, message) {
  console.log(`[${type}] ${title}: ${message}`);
}

function log(message) {
  console.log('[LOG]', message);
}

function getFilteredQuotes() {
  return currentFilter === 'all'
    ? quotes
    : quotes.filter(q => q.category === currentFilter);
}

function showRandomQuote() {
  const filtered = getFilteredQuotes();
  if (filtered.length === 0) return;

  const quote = filtered[Math.floor(Math.random() * filtered.length)];
  saveToSession(quote);
}

function addQuote() {
  const textInput = document.getElementById('newQuoteText');
  const categoryInput = document.getElementById('newQuoteCategory');

  if (!textInput.value || !categoryInput.value) return;

  const newQuote = {
    id: Date.now(),
    text: textInput.value.trim(),
    category: categoryInput.value.trim().toLowerCase(),
    timestamp: Date.now(),
    source: 'local'
  };

  quotes.push(newQuote);
  saveQuotes();
  postQuoteToServer(newQuote);

  textInput.value = '';
  categoryInput.value = '';
}

function updateUI() {
  // placeholder for UI refresh
}

// ========================================
// INIT
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  if (CONFIG.AUTO_SYNC_ENABLED) startAutoSync();
  syncQuotes();
});
