import './css/select.scss';
import './css/option.scss';
import './css/optionGroup.scss';

import Select from './src/select';
import Option from './src/option';
import Group from './src/group';

Select.Option = Option;
Select.Group = Group;

export default Select;
