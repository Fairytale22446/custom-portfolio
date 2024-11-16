import Image from "next/image";


export default function Home() {
  return (
    <section>
      <div className="main-first">
        <div className="intro">
          <h5> Hello , My Name is </h5>
          <h1>Fakiha Khalid</h1>
          <h5>A creative Web Develepor.</h5>
        </div>
        <div className="image">
          <img src="image.jpg" alt="image"></img>
        </div>
      </div>

      <div className="main-second">
        <div className="image"> 
        <img src="image.jpg" alt="image"></img>
        </div>
        <div className="text">
          <h1>About Me</h1>
          <p>“Hello! I’m Fakiha Khalid, a dedicated pre-engineering student and aspiring software developer.</p>
          <p> I have hands-on experience in front-end development, including HTML, CSS, and JavaScript, and am currently exploring advanced technologies like Next.js and TypeScript.</p>
            <p> My goal is to create engaging and impactful web experiences, blending creativity with technical skills to bring ideas to life. Join me on my journey as I grow in the world of tech!”</p>
        </div>
     </div>
      
    </section>
  );
}
