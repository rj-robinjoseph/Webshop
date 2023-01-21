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
          <h2>Mens Collection</h2>
        </div>
        <div className="all">
          <img
            src="https://unsplash.com/photos/EDSTj4kCUcw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8amVhbnN8ZW58MHx8fHwxNjU3MzQ1MDI4&force=true&w=640"
            alt=""
          />
          <p>Unisex</p>
          <h2>Explore Jeans</h2>
        </div>
        <div className="all">
          <img
            src="https://unsplash.com/photos/AX-7NFFrOZo/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8d29tZW4lMjBkcmVzc3xlbnwwfHx8fDE2NzQyNjM4NTQ&force=true&w=640"
            alt=""
          />
          <p>Selected for Women</p>
          <h2>Women Collection</h2>
        </div>
        <div className="all">
          <img
            src="https://unsplash.com/photos/NoVnXXmDNi0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTV8fHNuZWFrZXJzfGVufDB8fHx8MTY1NzM0NTEwMg&force=true&w=640"
            alt=""
          />
          <p>For Everyone</p>
          <h2>Sneaker Hub</h2>
        </div>
      </div>
    </section>
  );
}

export default Section;
