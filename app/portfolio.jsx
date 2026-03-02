import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';
import React from 'react'

const portfolio = () => {
  return (
    <View>
      <Text>This is the portfolio page.</Text>

      <Link href="/blog" style={styles.link}>Go to Blog Page</Link>
    </View>
  )
}

export default portfolio

const styles = StyleSheet.create({})