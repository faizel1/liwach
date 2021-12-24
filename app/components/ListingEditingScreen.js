import React from 'react';
import {StyleSheet, Text, View} from 'react-native';



import CategoryPickerItem from "./CategoryPickerItem";
import AppPicker from './AppPicker';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormField ,
  AppFormPicker ,
  SubmitButton,
} from './forms';
import Screen from './Screen';

const validationSchema = Yup.object().shape({
  titel: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(100).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {label: 'Furniture', value: 1,backgrounColor:'red',icon:"apps"},
  {label: 'Clothing', value: 2,backgrounColor:'green',icon:"email"},
  {label: 'Camera', value: 3,backgrounColor:'blue',icon:"lock"},
];

export default function ListingEditingScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValue={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});
