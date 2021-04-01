// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Body, Title, Left, Right, Content, List, ListItem, Text, Spinner } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';


export default function App() {
  const [isReady, setIsReady] = useState(false)


  useEffect(() => {
    (
      async () => {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        })
      }
    )()
    setIsReady(true)
  }, [])


  // const data = [
  //   {
  //     id: 1,
  //     text: "1st",
  //   }
  // ]


  if (!isReady) {
    return (
      <Spinner color='red' />
    )
  }
  return (
    <Container>
      <Header hasTabs>
      <Left/>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right/>
      </Header>
      <Tabs>
        <Tab heading={<TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
          <Tab1 />
        </Tab>
        <Tab heading={<TabHeading><Text>No Icon</Text></TabHeading>}>
          <Tab2 />
        </Tab>
        <Tab heading={<TabHeading><Icon name="apps" /></TabHeading>}>
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalAmounts: {
    flex: 1,

  }
});
