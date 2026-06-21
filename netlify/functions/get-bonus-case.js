const { getSet } = require('./_shared/day-logic.js');

exports.handler = async (event) => {
  try {
    const params = event.queryStringParameters || {};
    const mode = params.mode === 'hard' ? 'hard' : 'easy';
    const set = getSet(mode);

    // Client supplies the index so it can track seen cases locally.
    // We validate and serve clues only — answer never leaves server until game over.
    const raw = parseInt(params.index, 10);
    if (!Number.isFinite(raw) || raw < 0 || raw >= set.length) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Invalid index' }),
      };
    }

    const theCase = set[raw];
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify({
        mode,
        index: raw,
        clues: theCase.clues,
        clueCount: theCase.clues.length,
        total: set.length,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to load bonus case' }),
    };
  }
};
