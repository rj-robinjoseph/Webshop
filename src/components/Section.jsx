import React from "react";
import "../styles/Section.scss";

function Section() {
  return (
    <section>
      <div className="cat">
        <div className="all">
          <img
            src="https://unsplash.com/photos/CSh-hNHc3Y8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTZ8fG1lbnxlbnwwfHx8fDE2NTczNDQ5OTQ&force=true&w=640"
            alt=""
          />
          <p>Selected for Men.</p>
          <h1>Mens Collection</h1>
        </div>
        <div className="all">
          <img
            src="https://unsplash.com/photos/EDSTj4kCUcw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8amVhbnN8ZW58MHx8fHwxNjU3MzQ1MDI4&force=true&w=640"
            alt=""
          />
          <p>Unisex</p>
          <h1>Explore Jeans</h1>
        </div>
        <div className="all">
          <img
            src="https://unsplash.com/photos/5IcEBmSOQq0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8ZHJlc3N8ZW58MHx8fHwxNjU3MzQ0OTY2&force=true&w=640"
            alt=""
          />
          <p>Selected for Women</p>
          <h1>Women Collection</h1>
        </div>
        <div className="all">
          <img
            src="https://unsplash.com/photos/NoVnXXmDNi0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTV8fHNuZWFrZXJzfGVufDB8fHx8MTY1NzM0NTEwMg&force=true&w=640"
            alt=""
          />
          <p>For Everyone</p>
          <h1>Sneaker Hub</h1>
        </div>
      </div>
    </section>
  );
}

export default Section;
