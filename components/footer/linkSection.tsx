import Link from "next/link";

const LinkSection = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
      <ul className="space-y-3">
        {links.map((item) => (
          <li key={item}>
            <Link
              href="/"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LinkSection;
