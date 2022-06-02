import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/strings';

/* <CardContainer
     item={item}
     index={index}
     navigation={{navigation}}
   />
*/

const CardContainer = (item, index, navigation) => {
  const colorOptions = [
    colors.grassGreen,
    colors.lightScarlettRed,
    colors.skyBlue,
    colors.paleYellow,
  ];
  return (
    <TouchableOpacity
      onPress={() => {
        if (item?.name === strings.pokedex) {
          navigation.navigate('PokedexScreen');
        }
      }}>
      <View
        style={[
          styles.optionButton,
          {
            backgroundColor: colorOptions[index],
            shadowColor: colorOptions[index],
          },
        ]}>
        <View style={styles.optionsView}>
          <Text style={styles.optionTexts}>{item?.name}</Text>
          <Image
            source={imagePath.pokeballIcon2}
            height={100}
            width={100}
            style={styles.smallPokeballImage}
            resizeMode="cover"
            resizeMethod="resize"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = ({navigation}) => {
  const colorOptions = [
    colors.grassGreen,
    colors.lightScarlettRed,
    colors.skyBlue,
    colors.paleYellow,
  ];
  const searchCategories = [
    {name: strings.pokedex},
    {name: strings.moves},
    {name: strings.abilities},
    {name: strings.items},
  ];
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView backgroundColor={'rgba(255,255,255,0.1)'} />
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Pokemon</Text>
        {/* TODO: Apply horizontal animation for search button to move from left to right on click of TextInput */}
        {/* TODO: Apply animtion to seaerch by category Views like easy in or bounce etc. or different animations different times... */}
        <Image
          source={imagePath.pokeballIcon1}
          height={240}
          width={240}
          style={styles.bigPokeballImage}
          resizeMode="cover"
          resizeMethod="resize"
        />
      </View>
      <View style={styles.searchBoxContainer}>
        <Image
          source={imagePath.searchIcon}
          height={22}
          width={22}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchBoxStyle}
          placeholder={'Search Pokemon name'}
        />
      </View>
      <View style={styles.optionsContainer}>
        {searchCategories.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (item?.name === strings.pokedex) {
                  navigation.navigate('PokedexScreen');
                }
              }}>
              <View
                style={[
                  styles.optionButton,
                  {
                    backgroundColor: colorOptions[index],
                    shadowColor: colorOptions[index],
                  },
                ]}>
                <View style={styles.optionsView}>
                  <Text style={styles.optionTexts}>{item?.name}</Text>
                  <Image
                    source={imagePath.pokeballIcon2}
                    height={100}
                    width={100}
                    style={styles.smallPokeballImage}
                    resizeMode="cover"
                    resizeMethod="resize"
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

// PATHWAY for pokemon image
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  bigPokeballImage: {
    height: 240,
    width: 240,
    top: -150,
    left: 220,
    opacity: 0.4,
    position: 'absolute',
  },
  searchIcon: {
    height: 22,
    width: 22,
    marginLeft: 5,
    marginTop: 6,
  },
  searchBoxStyle: {
    height: 36,
    width: 260,
    marginLeft: 10,
    marginTop: -1,
  },
  smallPokeballImage: {
    height: 100,
    width: 100,
    top: -20,
    left: 60,
    opacity: 0.4,
    position: 'absolute',
  },
  optionTexts: {
    alignSelf: 'center',
    marginLeft: 10,
    color: colors.white,
  },
  optionsView: {
    width: 145,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  optionButton: {
    width: 145,
    height: 60,
    marginLeft: 10,
    marginBottom: 20,
    justifyContent: 'center',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginEnd: 10,
    marginLeft: 10,
    marginTop: 30,
    width: 330,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBoxContainer: {
    height: 36,
    width: 330,
    marginLeft: 35,
    marginTop: 20,
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 0.05,
    flexDirection: 'row',
    backgroundColor: colors.transparentBackground,
  },
  headerText: {
    fontSize: 30,
    marginTop: 40,
    marginLeft: 40,
  },
  headerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
