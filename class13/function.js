function zero(time) {
  return time < 10 ? "0" + time : time;
}
function loaders(start, current) {
  return (current * 100) / start;
}
