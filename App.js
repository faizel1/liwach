import React, {useState} from 'react';

import {TextInput, Switch, Text} from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

export default function App() {
  const [isNew, setIsNew] = useState(false);
const categories=[
  {label:"furn1", value:1},
  {label:"furn2", value:2},
  {label:"furn3", value:3},
  {label:"furn4", value:4},
  {label:"furn5", value:5},
]
  return (
    <Screen>
      <AppPicker items={categories} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
