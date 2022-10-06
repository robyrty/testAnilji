import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';
const Navbar = () => {
  return (
    <nav>
      <ul>
      <li className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </li>
      </ul>
    </nav>
  );
};

export default Navbar;