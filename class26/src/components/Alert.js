class Alert {
  static danger(msg) {
    return ` <p class="alert alert-danger w-100 d-flex justify-content-between">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p> `;
  }
  static success(msg) {
    return ` <p class="alert alert-success w-100 d-flex justify-content-between">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p> `;
  }
}

export default Alert;
