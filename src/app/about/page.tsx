import image from "next/image";

export default function About() {
  return (
    <div className="about">
      <h1 className="about-heading">Skills !!</h1>

     <div className="about-image">
        <img src="image.jpg" alt="image"></img>
      </div>

      <div className="about-text">
        <h2>Frontened Develepor</h2>
      </div>

      <div className="skills">
       
        <div className="skill-one">
          <img className="skill-image1" src="download.png" alt="image"></img>
          <p>
            "With a solid understanding of HTML, I build well-structured and
            accessible web pages. I am proficient in creating semantic markup
            that follows best practices, ensuring my websites are both
            user-friendly and search-engine optimized."
          </p>
        </div>

        <div className="skill-two">
          <p>
            "I am skilled in CSS, using it to create visually appealing and
            responsive designs. From layout techniques like Flexbox and Grid to
            animations and custom styling, I use CSS to bring web interfaces to
            life, ensuring they look great on any device."
          </p>
          <img className="skill-image2" src="download2.png" alt="image"></img>
        </div>

        <div className="skill-three">
          <img className="skill-image3" src="download3.png" alt="image"></img>
          <p>
            "With JavaScript, I add interactivity and functionality to my web
            projects. I am comfortable with essential concepts like DOM
            manipulation, events, and functions, and I have built dynamic
            features that enhance user experience and engagement on my
            websites."
          </p>
        </div>

        <div className="skill-four">
          <p>
          Next.js is a popular framework built on top of React. It helps developers create fast, scalable, and user-friendly websites and web applications. With Next.js, you can easily build web pages that load quickly because it has features like server-side rendering and static site generation. This means that the content is generated on the server before it reaches the user's browser, making the site faster. It also makes it easy to handle routing, manage data, and create dynamic pages without much effort.
          </p>
          <img className="skill-image4" src="download4.png" alt="image"></img>
        </div>
      </div>
    </div>
  );
}
