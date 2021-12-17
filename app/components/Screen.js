import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

export default function Screen({children}) {
    return (
        <SafeAreaView>
           {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
