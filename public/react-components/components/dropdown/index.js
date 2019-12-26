import './css/dropdown.scss';
import './css/dropdownItem.scss';
import './css/dropdownMenu.scss';

import Dropdown from './src/dropdown';
import Item from './src/dropdownItem';
import Menu from './src/dropdownMenu';

Dropdown.Item = Item;
Dropdown.Menu = Menu;

export default Dropdown;
