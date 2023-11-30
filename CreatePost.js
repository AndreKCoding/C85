import React, {Component} from "react";
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView, ScrollView, TextInput } from "react-native-web";

export default class CreatePost extends Component {
  render() {
    return (
      <View>
        <SafeAreaView/>
        <View>
          <View>
          </View>
          <View>
            <Text>Novo Post</Text>
          </View>
        </View>
        <View>
          <ScrollView>
            <View>
              <DropDownPicker/>
            </View>
            <TextInput/>
          </ScrollView>
        </View>
      </View>
    );
  }
}