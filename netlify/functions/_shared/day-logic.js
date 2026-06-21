/* ---------------- DAILY PUZZLE LOGIC (server-side mirror) ----------------
   Same case for everyone worldwide, tied to UTC midnight.
   Easy and Hard each cycle through their own list independently,
   so they don't always land on the "same numbered" case. */

const { CASES_EASY, CASES_HARD } = require('./cases-data.js');

const EPOCH_UTC = Date.UTC(2026, 0, 1); // launch day = day #1
const MODE_OFFSETS = { easy: 0, hard: 17 }; // decorrelates easy/hard picks
const MAX_GUESSES = 5;

function getUTCDayNumber() {
  const now = new Date();
  const todayUTC = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.floor((todayUTC - EPOCH_UTC) / 86400000) + 1;
}

function getSet(mode) {
  return mode === 'hard' ? CASES_HARD : CASES_EASY;
}

function getDailyIndex(mode, day) {
  const set = getSet(mode);
  const offsetDay = day + MODE_OFFSETS[mode === 'hard' ? 'hard' : 'easy'];
  return ((offsetDay - 1) % set.length + set.length) % set.length;
}

// Returns today's case object (or for an explicitly requested day, mainly
// for safety we only ever resolve the *current* UTC day server-side so a
// client can't ask for tomorrow's answer early).
function getCaseForToday(mode) {
  const day = getUTCDayNumber();
  const set = getSet(mode);
  const index = getDailyIndex(mode, day);
  return { day, case: set[index] };
}

module.exports = {
  EPOCH_UTC,
  MAX_GUESSES,
  getUTCDayNumber,
  getDailyIndex,
  getSet,
  getCaseForToday,
};
