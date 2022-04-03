class Post {
  constructor() {
    this.allpostshow = document.querySelector(".allpostshow");
  }

  /**
   * get post
   */
  showposts(post) {
    let allpost = "";

    post.reverse().map((data, index) => {
      const { name, user_photo, content, photo } = data;
      allpost += `
             <div class="card shadow  my-2">
          <div class="card-body">
           <div class="post">
              <div class="post-info d-flex justify-content-lg-between">
                <div class="post-author d-flex align-items-center">
                  <img
                    src="${user_photo}"
                    alt=""
                  />
                  <h5 class="ms-2">${name}</h5>
                </div>
                <div class="post-btn">
                  <button>...</button>
                </div>
              </div>
            </div>
            <hr />
            <div class="post-content">
              <p>
                ${content}
              </p>
              <img
                src="${photo}"
                alt=""
              />
            </div>
          </div>
        </div>
            
        
        
        `;
    });
    this.allpostshow.innerHTML = allpost;
  }
}

let posts = new Post();
export default posts;
