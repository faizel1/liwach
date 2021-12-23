import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import * as Yup from 'yup';

import {
  AppForm,
  AppFormField ,
  AppFormPicker ,
  SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object.shape({
  titel: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(100).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const category = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Camera', value: 3},
];

export default function ListingEditiScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValue={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={255}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={ccategories}
          name="category"
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
