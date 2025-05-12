const NavLink = ({
  href,
  label,
  icon: Icon,
  isActive,
  showOnlyName,
  showIcon,
}) => {
  return (
    <li className="relative">
      <a
        href={href}
        className={`flex items-center gap-2 px-3 py-1 rounded-full transition-colors duration-300 absolute ${
          isActive
            ? "bg-white/10 text-white"
            : "text-white/60 hover:text-white hover:bg-white/5"
        }`}
      >
        {showIcon && <Icon className="text-lg" />}
        <span className="text-sm">{label}</span>
      </a>
    </li>
  );
};

export default NavLink;
