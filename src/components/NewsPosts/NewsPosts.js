import React, { Component } from "react";
// import { Link } from "react-router-dom";
const classes = require('./NewsPosts.scss');

class NewsPosts extends Component {
  render() {
    return (
      // <div className={classes.NewsBody}>
        <div className={classes.NewsPosts}>
          <div className={classes.inside}>
            <div className={classes.PostSide}>
              <h4>Categories</h4>
              <div id="dib-categories" className={classes.PostCats}></div>
            
              <h4 className={classes.RecentH4}>Recent Posts</h4>
              <div id="dib-recent-post-list" className={classes.RecentPosts}></div>
            </div> 
            
            <div className={classes.PostsBody}>
              {/* <Link to="/news-center" className={classes.backLink1}>« Back to All Posts *</Link> */}
              <div className={classes.clearfix} />
              <div id="dib-posts"></div>
            </div>
          </div>
      </div>
    );
  }
}
export default NewsPosts;