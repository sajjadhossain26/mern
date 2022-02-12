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

// /**
//  * set data local storage
//  * @param {*} key
//  * @param {*} array
//  */
// function setdata(key, array) {
//   let data = JSON.stringify(array);
//   localStorage.setItem(key, data);
// }
// /**
//  * get data local storage
//  * @param {*} key
//  * @returns
//  */
// function getdata(key) {
//   let data = localStorage.getItem(key);
//   return data ? JSON.parse(data) : false;
// }
