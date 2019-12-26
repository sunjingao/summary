import './css/checkbox.scss';
import './css/checkbox-button.scss';
import './css/checkbox-group.scss';

import Checkbox from './src/checkbox';
import CheckboxButton from './src/checkbox-button';
import CheckboxGroup from './src/checkbox-group';

Checkbox.Button = CheckboxButton;
Checkbox.Group = CheckboxGroup;

export default Checkbox;
