import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import PdPokemonCardView from '../../components/PdPokemonCardView';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';
import {mockResponse, pokemonTypes} from '../../constants/constantData';

const PokedexScreen = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonSpecificData, setPokemonSpecificData] = useState([]);
  let tempPokemonData = [];

  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${index}&limit=${index + 10}`,
    ).then(response => {
      response.json().then(data => {
        const tempData = data?.results;
        setPokemonData(tempData);
      });
    });
  }, [index]);

  useEffect(() => {
    pokemonData.map((item, idx) => {
      fetch(item?.url).then(resp =>
        resp.json().then(data => {
          // console.log('DATA1', data);
          // const tempPokemonData = [...pokemonSpecificData, data];
          tempPokemonData.push(data);
          // console.log('DATA2', JSON.stringify(tempPokemonData));
        }),
      );
    });
    setPokemonSpecificData(tempPokemonData);
  }, [pokemonData]);

  // useEffect(() => {
  //   setPokemonSpecificData(tempPokemonData);
  // }, [tempPokemonData]);

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView backgroundColor={'rgba(255,255,255,0.1)'} />
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Pokedex</Text>
        <Image
          source={imagePath.pokeballIcon1}
          height={240}
          width={240}
          style={styles.bigPokeballImage}
          resizeMode="cover"
          resizeMethod="resize"
        />
      </View>
      <View style={styles.pokemonCardsContainer}>
        {mockResponse.map((item, id) => {
          const bgColor = pokemonTypes.filter(val => {
            if (val?.name === item?.types[0]?.type?.name) {
              return val?.backgroundColor;
            }
          });
          console.log('SASUKE', bgColor[0]?.backgroundColor);
          return (
            <PdPokemonCardView
              id={id}
              item={item}
              navigation={navigation}
              bgColor={bgColor}
            />
          );
        })}
      </View>
    </View>
  );
};

// PATHWAY for pokemon image
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png
/* TODO: Apply horizontal animation for search button to move from left to right on click of TextInput */
/* TODO: Apply animtion to seaerch by category Views like easy in or bounce etc. or different animations different times... */
//TODO: Implement API repsonse properly and pass that instead of mockResponse...
//"https://pokeapi.co/api/v2/pokemon?offset=6&limit=6"
//https://pokeapi.co/api/v2/pokemon?limit=6
//https://pokeapi.co/api/v2/pokemon
//https://pokeapi.co/api/v2/pokemon/1
//https://pokeapi.co/api/v2/pokemon?limit=100&offset=200

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
  pokemonCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginEnd: 10,
    marginLeft: 1,
    marginTop: 30,
    width: 350,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
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

export default PokedexScreen;
