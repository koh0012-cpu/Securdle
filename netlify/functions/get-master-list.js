const { getSet } = require('./_shared/day-logic.js');

exports.handler = async (event) => {
  try {
    const mode = (event.queryStringParameters && event.queryStringParameters.mode) === 'hard' ? 'hard' : 'easy';
    const set = getSet(mode);
    const list = set.map(c => c.answer);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=3600' },
      body: JSON.stringify({ mode, list }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to load master list' }),
    };
  }
};
