const { getSet, MAX_GUESSES } = require('./_shared/day-logic.js');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const mode = payload.mode === 'hard' ? 'hard' : 'easy';
  const guess = typeof payload.guess === 'string' ? payload.guess.trim() : '';
  const guessNumber = Number.isFinite(payload.guessNumber) ? payload.guessNumber : 1;
  const index = typeof payload.index === 'number' ? payload.index : -1;

  try {
    const set = getSet(mode);
    if (index < 0 || index >= set.length) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Invalid case index' }) };
    }

    const theCase = set[index];
    const isSkip = guess === '';
    const correct = !isSkip && guess.toLowerCase() === theCase.answer.toLowerCase();
    const gameOver = correct || guessNumber >= MAX_GUESSES;

    const result = { mode, index, correct, gameOver };

    if (gameOver) {
      result.answer = theCase.answer;
      result.explainer = theCase.explainer;
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify(result),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to process bonus guess' }),
    };
  }
};
