import footerImage from "../../assets/green-bg.webp";

const Footer = () => {
  return (
    <footer className="bg-no-repeat relative">
      <div className="absolute w-full top-0 left-0 right-0 bottom-0 overflow-hidden">
        <img
          src={footerImage}
          alt=""
          className="absolute w-full top-0 left-0 right-0 bottom-0 overflow-hidden min-h-full min-w-full"
        />
      </div>
      <div className="overflow-hidden h-72">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ transform: "scaleX(-1) scale(1.5) translate3d(7%,-76px,0)" }}
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,160L80,181.3C160,203,320,245,480,229.3C640,213,800,139,960,144C1120,149,1280,235,1360,277.3L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="footer p-10 container-class text-base-content relative">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.880-.880 0-1.601-.564-1.860 0.565l2.433-.809-.842-2.515c-.33-1.020.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553 0.819 0 1.585.509 1.850 1.326l.841 2.517 2.431-.810c1.020-.330 2.131.210 2.461 1.229 0.331 1.018-.209 2.126-1.229 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.010 1.675 1.619 4.828 5.011-1.674-1.620-4.829z"></path>
          </svg>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
