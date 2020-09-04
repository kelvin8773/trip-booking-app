import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {COLORS, SIZES, FONTS, images, optionItems} from '../constants';

const OptionItem = ({icon, bgColor, label, onPress}) => (
  <TouchableOpacity
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    onPress={onPress}>
    <View style={{height: 60, width: 60}}>
      <LinearGradient
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
        }}
        colors={bgColor}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{height: 30, width: 30, tintColor: COLORS.white}}
        />
      </LinearGradient>
    </View>
    <Text style={{marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3}}>
      {label}
    </Text>
  </TouchableOpacity>
);

const Home = () => (
  <View style={styles.container}>
    {/* Banner  */}
    <View
      style={{
        flex: 1,
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
      }}>
      <Image
        source={images.homeBanner}
        resizeMode="cover"
        style={{width: '100%', height: '100%', borderRadius: 15}}
      />
    </View>

    {/* Options */}
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}>
        {optionItems.slice(0, 4).map(({icon, bgColor, label}) => (
          <OptionItem
            icon={icon}
            bgColor={bgColor}
            label={label}
            onPress={() => console.log(`${label} Press.`)}
          />
        ))}
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
        }}>
        {optionItems.slice(4).map(({icon, bgColor, label}) => (
          <OptionItem
            icon={icon}
            bgColor={bgColor}
            label={label}
            onPress={() => console.log(`${label} Press.`)}
          />
        ))}
      </View>
    </View>

    {/* Destination */}
    <View style={{flex: 1}}></View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Home;
