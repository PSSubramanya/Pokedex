import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import PdPokemonType from '../components/PdPokemonType';
import colors from '../constants/colors';
import imagePath from '../constants/imagePath';

const PdPokemonCardView = ({item, navigation, bgColor, id}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('PokemonDisplayScreen', {
          pokemonData: item,
        });
      }}>
      <View
        style={[
          styles.optionButton,
          {
            // backgroundColor: colorOptions[id % 4],
            backgroundColor: bgColor[0]?.backgroundColor,
            shadowColor: bgColor[0]?.backgroundColor,
          },
        ]}>
        <View style={styles.optionsView}>
          <View style={{marginTop: 15}}>
            <Text style={styles.optionTexts}>{item?.name}</Text>
            {item.types.map((typeData, typeIndex) => (
              <PdPokemonType data={typeData?.type?.name} />
            ))}
          </View>

          <Image
            source={imagePath.pokeballIcon2}
            height={100}
            width={100}
            style={styles.smallPokeballImage}
            resizeMode="cover"
            resizeMethod="resize"
          />
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                id + 1
              }.png`,
            }}
            height={100}
            width={100}
            style={styles.pokemonImage}
            resizeMode="cover"
            resizeMethod="resize"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionsView: {
    width: 165,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  optionButton: {
    width: 165,
    height: 100,
    marginLeft: 10,
    marginBottom: 10,
    justifyContent: 'center',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,
  },
  smallPokeballImage: {
    height: 100,
    width: 100,
    top: 20,
    left: 75,
    opacity: 0.4,
    position: 'absolute',
  },
  optionTexts: {
    alignSelf: 'center',
    marginLeft: 10,
    color: colors.white,
    fontWeight: 'bold',
  },
  pokemonImage: {
    height: 80,
    width: 80,
    top: 20,
    left: 85,
    position: 'absolute',
    zIndex: 1,
  },
});

export default PdPokemonCardView;
