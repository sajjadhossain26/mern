function setdata(key, array) {
  let data = JSON.stringify(array);
  localStorage.setItem(key, data);
  return true;
}
function getdata(key) {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : false;
}
