module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
  // comment_time: (date) => {
  //   if (new Date(date).getHours() > 12) {
  //     return `${new Date(
  //       date
  //     ).getHours()-12}:${("0" + new Date(date).getMinutes()).slice(-2)} PM`;
  //   } else {
  //     return `${new Date(
  //       date
  //     ).getHours()}:${("0" + new Date(date).getMinutes()).slice(-2)} AM`;
  //   }
  // },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },
  format_time: (time) => {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  },
};
