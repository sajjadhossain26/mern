/**
 * send data localstorage
 * @param {*} key
 * @param {*} array
 */
function set_data(key, array) {
  let data = JSON.stringify(array);
  localStorage.setItem(key, data);
}
/**
 * get data local storage
 * @param {*} key
 * @returns
 */
function get_data(key) {
  let getdata = localStorage.getItem(key);
  return getdata ? JSON.parse(getdata) : false;
}
