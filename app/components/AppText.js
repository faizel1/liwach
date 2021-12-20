


import React from 'react';
import { Text} from 'react-native';

import DefaultStyles from "../config/style";


export default function AppText({children, style}) {
  return(<Text style={[DefaultStyles.text, style]}>{children}</Text>);
}


