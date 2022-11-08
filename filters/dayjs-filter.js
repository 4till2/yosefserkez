const dayjs = require("dayjs");

/* defaultFormat could be any other valid dayjs format,
 * or null, in which case we’d get dayjs().format() */
const defaultFormat = "YYYY-MM-DD-mmss";

function dayjsFilter(date, format = defaultFormat) {
  return dayjs(date).format(format);
}

module.exports = dayjsFilter;
