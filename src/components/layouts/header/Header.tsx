import Image from "next/image";
import Link from "next/link";
import RAWLogoDesktop from "../../../../public/assets/RAWAviation_White_Desktop.png";

const headerMenuItems = [
  {
    title: "Reports",
    href: "/reports/",
  },
  {
    title: "Photos",
    href: "/photos/",
  },
  {
    title: "About",
    href: "/about/",
  },
  {
    title: "Contact",
    href: "/contact/",
  },
];

const Header = () => {
  return (
    <header className="bg-red-500 h-28 flex justify-center items-center">
      <div className="max-w-[1200px] h-full w-full p-5 flex items-center bg-amber-950">
        <Link href="/">
          <Image
            src={RAWLogoDesktop}
            alt="RAW Aviation Logo"
            className="w-[300px] h-auto"
            priority
          />
        </Link>
        <div className="ml-auto flex gap-5 text-white uppercase font-bold">
          {headerMenuItems.map((menuItem, index) => (
            <Link key={index} href={menuItem.href}>
              {menuItem.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
