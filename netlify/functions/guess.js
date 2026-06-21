const { getCaseForToday, MAX_GUESSES } = require('./_shared/day-logic.js');

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

  try {
    const { day, case: theCase } = getCaseForToday(mode);

    const isSkip = guess === '';
    const correct = !isSkip && guess.toLowerCase() === theCase.answer.toLowerCase();
    const gameOver = correct || guessNumber >= MAX_GUESSES;

    const result = {
      day,
      mode,
      correct,
      gameOver,
    };

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
      body: JSON.stringify({ error: 'Failed to process guess' }),
    };
  }
};
