import './css/radio.scss';
import './css/radio-button.scss';
import './css/radio-group.scss';

import radio from './src/radio';
import radioButton from './src/radio-button';
import radioGroup from './src/radio-group';

radio.Button = radioButton;
radio.Group = radioGroup;

export default radio;
