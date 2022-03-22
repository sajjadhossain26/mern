class Storage {
  static has(key) {
    return localStorage.getItem(key) ? localStorage.getItem(key) : false;
  }

  static get(key) {
    if (this.has(key)) {
      return JSON.parse(this.has(key));
    } else {
      return "Data not found";
    }
  }
  static set(key, data) {
    let staff_arr = [];
    if (this.has(key)) {
      staff_arr = JSON.parse(this.has(key));
    }
    staff_arr.push(data);
    localStorage.setItem(key, JSON.stringify(staff_arr));
  }
}

export default Storage;
