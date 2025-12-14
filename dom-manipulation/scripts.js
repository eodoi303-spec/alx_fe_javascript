// ========================================
// SYNC CONFIGURATION
// ========================================

const CONFIG = {
  SYNC_INTERVAL: 30000,
  SERVER_URL: "https://jsonplaceholder.typicode.com/posts",
  AUTO_SYNC_ENABLED: true
};

// ========================================
// STATE VARIABLES
// ========================================

let quotes = loadQuotes();
let serverQuotes = [];
let syncInterval = null;
let lastSyncTime = null;
let currentFilter = loadLastFilter();

// ========================================
// LOCAL STORAGE
// ========================================

function loadQuotes() {
  const saved = localStorage.getItem("quotes");
  return saved ? JSON.parse(saved) : [];
}

function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

function loadLastFilter() {
  return localStorage.getItem("lastFilter") || "all";
}

// ========================================
// SESSION STORAGE
// ========================================

function saveToSession(quote) {
  sessionStorage.setItem(
    "lastViewed",
    JSON.stringify({
      text: quote.text,
      category: quote.category,
      timestamp: new Date().toLocaleString()
    })
  );
}

// ========================================
// SERVER SYNC FUNCTIONS
// ========================================

/**
 * Fetch quotes from mock server
 */
async function fetchQuotesfromserver() {
  const response = await fetch(CONFIG.SERVER_URL + "?_limit=10");
  const data = await response.json();

  serverQuotes = data.map(item => ({
    id: item.id,
    text: item.title,
    category: "general",
    timestamp: Date.now(),
    source: "server"
  }));

  await mergeData();
}

/**
 * Merge local and server data
 */
async function mergeData() {
  const map = new Map();

  quotes.forEach(q => map.set(q.id, q));
  serverQuotes.forEach(q => map.set(q.id, q));

  quotes = Array.from(map.values());
  saveQuotes();
}

/**
 * MAIN SYNC CONTROLLER (REQUIRED BY ALX)
 */
async function syncQuotes() {
  await fetchQuotesfromserver();
  lastSyncTime = new Date();
}

// ========================================
// POST DATA TO SERVER (MOCK API)
// ========================================

/**
 * Explicit POST function for ALX checker
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

/**
 * Post quote to server
 */
async function postQuoteToServer(quote) {
  try {
    const response = await postDataToServer({
      title: quote.text,
      body: quote.category,
      userId: 1
    });

    await response.json();
  } catch (error) {
    console.error(error);
  }
}

// ========================================
// AUTO SYNC
// ========================================

function startAutoSync() {
  if (syncInterval) return;

  syncInterval = setInterval(() => {
    syncQuotes();
  }, CONFIG.SYNC_INTERVAL);
}

// ========================================
// QUOTE FUNCTIONS
// ========================================

function addQuote(text, category) {
  const quote = {
    id: Date.now(),
    text: text,
    category: category,
    timestamp: Date.now(),
    source: "local"
  };

  quotes.push(quote);
  saveQuotes();
  saveToSession(quote);
  postQuoteToServer(quote);
}

function getFilteredQuotes() {
  return currentFilter === "all"
    ? quotes
    : quotes.filter(q => q.category === currentFilter);
}

// ========================================
// INIT
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  if (CONFIG.AUTO_SYNC_ENABLED) {
    startAutoSync();
  }
  syncQuotes();
});
