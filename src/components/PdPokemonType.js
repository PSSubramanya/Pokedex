import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {capitaliseFirstLetter} from '../commonUtility/commonFunctions';

const PdPokemonType = ({data}) => {
  return (
    <View style={styles.typeOuterStyle}>
      <Text style={styles.typeTextStyle}>{capitaliseFirstLetter(data)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  typeOuterStyle: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    height: 20,
    width: 55,
    marginTop: 5,
    marginLeft: 10,
    borderRadius: 10,
  },
  typeTextStyle: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 12,
    marginTop: 2,
    fontWeight: 'bold',
  },
});

export default PdPokemonType;
