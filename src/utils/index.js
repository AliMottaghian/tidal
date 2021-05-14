export const timeFormat = (time) => {
  if (typeof time === "number") {
    let seconds = Math.floor(time % 60),
      minutes = Math.floor((time / 60) % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + ":" + seconds;
  }
  throw Error("Please pass the time as a number")
};
