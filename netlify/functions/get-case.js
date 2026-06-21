const { getCaseForToday } = require('./_shared/day-logic.js');

exports.handler = async (event) => {
  try {
    const mode = (event.queryStringParameters && event.queryStringParameters.mode) === 'hard' ? 'hard' : 'easy';
    const { day, case: theCase } = getCaseForToday(mode);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: JSON.stringify({
        day,
        mode,
        clues: theCase.clues,
        clueCount: theCase.clues.length,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to load case' }),
    };
  }
};
