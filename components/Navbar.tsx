import { FaAdjust } from "react-icons/fa";

const availableThemes = [
  "light",
  "dark",
  "cupcake",
  //   "bumblebee",
  //   "emerald",
  //   "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  //   "garden",
  //   "forest",
  //   "aqua",
  //   "lofi",
  //   "pastel",
  //   "fantasy",
  //   "wireframe",
  //   "black",
  //   "luxury",
  //   "dracula",
  //   "cmyk",
  //   "autumn",
  //   "business",
  //   "acid",
  //   "lemonade",
  //   "night",
  //   "coffee",
  //   "winter",
];

type NavbarProps = {
  setTheme: (value: string) => void;
};

const Navbar = ({ setTheme }: NavbarProps) => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">title</a>
    </div>

    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-ghost m-1">
        <FaAdjust/>
      </label>

      <ul tabIndex={0} className="dropdown-content menu p-2 w-52">
        {availableThemes.map((themeName) => (
          <li key={themeName}>
            <div data-theme={themeName} className="m-1 p-0">
              <div
                className="btn btn-outline btn-block p-1"
                onClick={() => setTheme(themeName)}
                data-theme={themeName}
              >
                {themeName}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Navbar;
