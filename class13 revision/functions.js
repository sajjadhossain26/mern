function validation(msg, type = "danger") {
  return `<p class="alert alert-${type}">${msg}</p>`;
}
function loadings(start, current) {
  return (current * 100) / start;
}
