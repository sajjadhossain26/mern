/**
 * send data localstorage
 * @param {*} key
 * @param {*} array
 */
function senddata(key, array) {
  let data = JSON.stringify(array);
  localStorage.setItem(key, data);
}

/**
 * get data from ls
 * @param {*} key
 */
function getdata(key) {
  let getdata = localStorage.getItem(key);

  return getdata ? JSON.parse(getdata) : false;
}
