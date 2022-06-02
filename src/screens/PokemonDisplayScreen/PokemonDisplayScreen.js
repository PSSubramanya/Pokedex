import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import PdPokemonType from '../../components/PdPokemonType';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';
import {capitaliseFirstLetter} from '../../commonUtility/commonFunctions';
import {pokemonTypes} from '../../constants/constantData';

const PokemonDisplayScreen = ({props, navigation, route}) => {
  const decayAnimationVariable = useRef(new Animated.Value(-500)).current;
  const springAnimationVariable = useRef(new Animated.Value(0)).current;
  const anim = useRef(new Animated.Value(0)).current;
  const widthBar = useRef(new Animated.Value(0)).current;

  const [tabNumber, setTabNumber] = useState(0);

  console.log('PARAMS', route?.params);
  const [favouriteState, setFavouriteState] = useState(false);

  const bgColor = pokemonTypes.filter(val => {
    if (val?.name === route?.params?.pokemonData?.types[0]?.type?.name) {
      return val?.backgroundColor;
    }
  });

  const handleDecayAnimation = () => {
    decayAnimationVariable.setValue(-470);
    Animated.decay(decayAnimationVariable, {
      toValue: 50,
      duration: 100,
      velocity: 0.95,
      deceleration: 0.998,
      useNativeDriver: true,
    }).start();
  };

  const handleSpringAnimation = () => {
    springAnimationVariable.setValue(0.75);
    Animated.spring(springAnimationVariable, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start();
  };

  const onAnimate = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  /*
  NEED TO WORK on this
  Refer this link -> https://blog.pusher.com/animation-react-native-part-1/
  let barWidth = {
    width: widthBar,
  };

  const animateBar = () => {
    // const {value, index} = props;
    const value = 45;
    widthBar.setValue(0); // initialize the animated value
    Animated.timing(widthBar, {
      toValue: 1,
      // delay: index * 150, // how long to wait before actually starting the animation
      delay: 1,
    }).start();
  };
  
  */

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const animationDelay = async () => {
    await delay(1000);
    handleDecayAnimation();
    handleSpringAnimation();
  };

  useEffect(() => {
    animationDelay();
  }, []);

  useEffect(() => {
    if (tabNumber === 1) {
      onAnimate();
      // animateBar();
    }
  }, [tabNumber]);

  const renderStatsProgressbar = value => {
    let progressBarColor = 'red';
    if (value >= 60) {
      progressBarColor = 'green';
    } else if (value > 45 && value < 60) {
      progressBarColor = 'yellow';
    } else {
      progressBarColor = 'red';
    }

    return (
      <View style={{marginTop: 8, marginLeft: 10}}>
        <Animated.View
          style={[
            {
              backgroundColor: progressBarColor,
              width: value > 100 ? 200 : value * 2,
              height: 3,
              zIndex: 1,
              transform: [{scaleX: anim}],
            },
            // barWidth,
          ]}
        />
        <View
          style={{
            backgroundColor: colors.transparentBackground,
            width: 200,
            height: 3,
            marginTop: -3,
          }}
        />
      </View>
    );
  };

  const aboutSection = () => {
    //STATIC VIEW FOR NOW... ADD API VALUE HERE LATER...
    return (
      <View
        style={{
          height: 350,
          justifyContent: 'space-evenly',
          marginLeft: 35,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text>Species</Text>
          <Text style={{marginLeft: 80}}>Seed</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Height</Text>
          <Text style={{marginLeft: 88}}>2'3.6" (0.70 cm)</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Weight</Text>
          <Text style={{marginLeft: 86}}>15.2 lbs (6.9 Kg.)</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Abilities</Text>
          <Text style={{marginLeft: 80}}>Overgrow, Chlorophyll</Text>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>Breeding</Text>
        <View style={{flexDirection: 'row'}}>
          <Text>Gender</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', marginLeft: 73}}>
              <Image
                source={imagePath.maleIcon}
                height={15}
                width={15}
                style={{height: 15, width: 15, marginLeft: 10}}
              />
              <Text>87.5%</Text>
              <Image
                source={imagePath.femaleIcon}
                height={1150}
                width={15}
                style={{height: 15, width: 15, marginLeft: 10}}
              />
              <Text>12.5%</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Egg Group</Text>
          <Text style={{marginLeft: 64}}>Monster</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Egg Cycle</Text>
          <Text style={{marginLeft: 68}}>Grass</Text>
        </View>
      </View>
    );
  };

  const baseStatsSection = () => {
    return (
      <View
        style={{
          height: 350,
          justifyContent: 'space-evenly',
          marginLeft: 35,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text>HP</Text>
          <Text style={{marginLeft: 75}}>45</Text>
          {renderStatsProgressbar(45)}
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Attack</Text>
          <Text style={{marginLeft: 52}}>60</Text>
          {renderStatsProgressbar(60)}
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Defense</Text>
          <Text style={{marginLeft: 40}}>48</Text>
          {renderStatsProgressbar(48)}
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text>Sp. Atk</Text>
          <Text style={{marginLeft: 48}}>65</Text>
          {renderStatsProgressbar(65)}
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Sp. Def</Text>
          <Text style={{marginLeft: 45}}>65</Text>
          {renderStatsProgressbar(65)}
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Speed</Text>
          <Text style={{marginLeft: 52}}>45</Text>
          {renderStatsProgressbar(45)}
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>Total</Text>
          <Text style={{marginLeft: 61}}>317</Text>
          {renderStatsProgressbar(317)}
          {/* THIS THIG OF BAR SHOULD BE COUNTED WRT TO TOTAL VALUE WHEN VALUE IS MORE THAN 100 */}
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>
          Types of defenses
        </Text>
        <Text style={{marginLeft: 0}}>
          The effectivness of each type on {route?.params?.pokemonData?.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: bgColor[0]?.backgroundColor}}>
      <SafeAreaView backgroundColor={bgColor[0]?.backgroundColor} />

      {/* HEADER Section */}
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={imagePath.backArrow}
            height={22}
            width={22}
            style={{height: 22, width: 22, marginLeft: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFavouriteState(!favouriteState);
          }}>
          <Image
            source={
              favouriteState ? imagePath.favouriteOn : imagePath.favouriteOff
            }
            height={22}
            width={22}
            style={{height: 22, width: 22, marginRight: 10}}
          />
        </TouchableOpacity>
      </View>

      {/* NAME Section */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 80,
        }}>
        <View>
          <Text
            style={{
              color: colors.white,
              fontSize: 30,
              marginLeft: 10,
              marginTop: 5,
              fontWeight: 'bold',
            }}>
            {capitaliseFirstLetter(route?.params?.pokemonData?.name)}
          </Text>
          <View style={{flexDirection: 'row'}}>
            {route?.params?.pokemonData?.types.map((typeData, typeIndex) => (
              <PdPokemonType data={typeData?.type?.name} />
            ))}
          </View>
        </View>
        <View
          style={{
            width: 65,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: colors.white,
              fontSize: 14,
              marginTop: 5,
              fontWeight: 'bold',
            }}>
            {`#00${route?.params?.pokemonData?.id}`}
          </Text>
        </View>
      </View>

      {/* IMAGE section */}
      <View style={{alignItems: 'center', zIndex: 1}}>
        <Image
          source={imagePath.pokeballIcon2}
          height={200}
          width={200}
          style={styles.smallPokeballImage}
          resizeMode="cover"
          resizeMethod="resize"
        />
        <Animated.View
          style={{
            transform: [{translateY: decayAnimationVariable}],
          }}>
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${route?.params?.pokemonData?.id}.png`,
            }}
            height={240}
            width={240}
            style={styles.pokemonImage}
            resizeMode="cover"
            resizeMethod="resize"
          />
        </Animated.View>
      </View>

      {/* STATS section */}
      <Animated.View
        style={{
          backgroundColor: colors.white,
          flex: 1,
          marginTop: -40,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          transform: [{scale: springAnimationVariable}],
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            height: 50,
            alignItems: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity
            onPress={() => {
              setTabNumber(0);
            }}>
            <View
              style={{
                borderColor: colors.violetColor,
                borderBottomWidth: tabNumber === 0 ? 2 : 0,
                height: 50,
                justifyContent: 'center',
              }}>
              <Text>About</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTabNumber(1);
            }}>
            <View
              style={{
                borderColor: colors.violetColor,
                borderBottomWidth: tabNumber === 1 ? 2 : 0,
                height: 50,
                justifyContent: 'center',
              }}>
              <Text>Base Stats</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTabNumber(2);
            }}>
            <View
              style={{
                borderColor: colors.violetColor,
                borderBottomWidth: tabNumber === 2 ? 2 : 0,
                height: 50,
                justifyContent: 'center',
              }}>
              <Text>Evolution</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTabNumber(3);
            }}>
            <View
              style={{
                borderColor: colors.violetColor,
                borderBottomWidth: tabNumber === 3 ? 2 : 0,
                height: 50,
                justifyContent: 'center',
              }}>
              <Text>Moves</Text>
            </View>
          </TouchableOpacity>
        </View>

        {tabNumber === 0 && aboutSection()}
        {tabNumber === 1 && baseStatsSection()}
      </Animated.View>
    </View>
  );
};

//TODO: Implement plop files and handlebars
// IMPORTANT: Add spring animation to pokemon image and decay animation from bottom to top for stats view...
// jest concepts and test cases
// component wise code building
// atomic code structure
// Animations
// Font style
// New packages
// Write your own packages
// android and ios native concepts implement
// Scale width and height and component sizes and fontsizes based on screen resolutions...
// eslint implement
// IMPORTANT: Integrate both APIs cos both combined have complete pack of information on the pokemon

const styles = StyleSheet.create({
  smallPokeballImage: {
    height: 200,
    width: 200,
    right: -20,
    opacity: 0.2,
    position: 'absolute',
  },
  pokemonImage: {
    height: 220,
    width: 220,
  },
});

export default PokemonDisplayScreen;
