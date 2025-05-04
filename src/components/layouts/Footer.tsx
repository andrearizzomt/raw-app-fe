import FacebookIcon from "../../../public/assets/facebook.svg";
import Image from "next/image";
import InstagramIcon from "../../../public/assets/instagram.svg";
import Link from "next/link";
import RAWLogoMobile from "../../../public/assets/RAWAviationRoundel_White_Mobile.png";
import YoutubeIcon from "../../../public/assets/youtube.svg";

const year = 2025;

const footerMenuItems = [
  {
    section: "RAW Aviation",
    links: [
      {
        title: "About",
        url: "/about/",
      },
      {
        title: "Our Team",
        url: "/our-team/",
      },
      {
        title: "Contact",
        url: "/contact/",
      },
    ],
  },
  {
    section: "Reports",
    links: [
      {
        title: "All Reports",
        url: "/reports/all/",
      },
      {
        title: "2025 Reports",
        url: "/reports/2025/",
      },
      {
        title: "2024 Reports",
        url: "/reports/2024/",
      },
      {
        title: "2023 Reports",
        url: "/reports/2023/",
      },
    ],
  },
  {
    section: "Photos",
    links: [
      {
        title: "All Photos",
        url: "/photos/all/",
      },
      {
        title: "2025 Photos",
        url: "/photos/2025/",
      },
      {
        title: "2024 Reports",
        url: "/photos/2024/",
      },
      {
        title: "2023 Reports",
        url: "/photos/2023/",
      },
    ],
  },
];

interface FooterLinks {
  title: string;
  url: string;
}

interface FooterItem {
  section: string;
  links: FooterLinks[];
}

const FooterMenuItems = ({ items }: { items: FooterItem[] }) => (
  <div className="w-full flex flex-col items-center justify-center justify-items-center px-2 pb-2 sm:flex-row sm:items-start sm:justify-around text-neutral-500">
    {items.map((item, index) => (
      <div
        key={index}
        className="basis-1/4 w-full flex flex-col items-center md:items-start"
      >
        <span className="mb-2 flex text-base font-bold">{item.section}</span>
        <div className="mb-6 sm:mb-0 flex flex-col items-center gap-2 md:items-start text-neutral-400">
          {item?.links.map((i) => (
            <Link
              key={i.title}
              href={i.url}
              className="cursor-pointer text-base no-underline duration-200 hover:text-tertiary-100"
            >
              {i.title}
            </Link>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-amber-500 min-h-48 flex justify-center items-center">
      <div className="max-w-[1200px] h-full w-full p-5 flex flex-col items-center justify-center bg-indigo-600">
        {/* Footer Menu Item Links + Logo + Socials */}
        <div className="w-full h-full flex items-center bg-black">
          {/* Links */}
          <FooterMenuItems items={footerMenuItems} />
          {/* Logo and Socials */}
          <div className="basis-1/4 flex flex-col gap-5 items-center py-5">
            {/* Mobile Logo */}
            <Link href="/">
              <Image
                src={RAWLogoMobile}
                alt="RAW Aviation Logo"
                className="w-[150px] h-auto"
                priority
              />
            </Link>
            {/* Socials Links */}
            <div className="w-full flex flex-col gap-5 items-center">
              <span className="font-bold uppercase">Follow Us</span>
              <div className="flex gap-5">
                {/* INSTAGRAM */}
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <InstagramIcon className="scale-120" />
                </a>
                {/* FACEBOOK */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <FacebookIcon className="scale-120" />
                </a>
                {/* YOUTUBE */}
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <YoutubeIcon className="scale-120" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <span className="w-full text-center text-sm font-medium bg-black">
          &copy; RAW Aviation {year}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
