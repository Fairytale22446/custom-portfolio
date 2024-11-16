import Link from "next/link";


export default function Header() {
    return (
      <div className="links-parent">
        <ul className="links" >
            <li className="links"><Link href="/"> Home</Link></li>
            <li className="links"><Link href="/about"> About</Link></li>
            <li className="links"> <Link href="/Contact"> Contact</Link></li>
        </ul>
      </div>
    );
  }