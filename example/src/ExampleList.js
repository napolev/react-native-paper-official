/* @flow */

import * as React from 'react';
import { FlatList } from 'react-native';
import { List, Divider, withTheme, type Theme } from 'react-native-paper';
import BottomNavigationExample from './BottomNavigationExample';
import CardExample from './CardExample';

type Props = {
  theme: Theme,
  navigation: any,
};

export const examples = {
  bottomNavigation: BottomNavigationExample,
  card: CardExample,
};

const data = Object.keys(examples).map(id => ({ id, data: examples[id] }));

class ExampleList extends React.Component<Props> {
  static navigationOptions = {
    title: 'Examples',
  };

  _renderItem = ({ item }) => (
    <List.Item
      title={item.data.title}
      onPress={() => this.props.navigation.navigate(item.id)}
    />
  );

  _keyExtractor = item => item.id;

  render() {
    const {
      theme: {
        colors: { background },
      },
    } = this.props;

    return (
      <FlatList
        contentContainerStyle={{ backgroundColor: background }}
        ItemSeparatorComponent={Divider}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        data={data}
      />
    );
  }
}

export default withTheme(ExampleList);
