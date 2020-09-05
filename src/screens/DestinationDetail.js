import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, FONTS, styles, images, icons} from '../constants';

const StarReview = ({rate}) => {
  const stars = [];
  const fullStar = Math.floor(rate);
  const noStar = Math.floor(5 - rate);
  const halfStar = 5 - fullStar - noStar;

  // Full Star
  for (let i = 0; i < fullStar; i++) {
    stars.push(
      <Image
        key={`full-${i}`}
        source={icons.starFull}
        resizeMode="cover"
        style={{height: 20, width: 20}}
      />,
    );
  }

  // Half Star
  for (let i = 0; i < halfStar; i++) {
    stars.push(
      <Image
        key={`Half-${i}`}
        source={icons.starHalf}
        resizeMode="cover"
        style={{height: 20, width: 20}}
      />,
    );
  }

  // No Star
  for (let i = 0; i < noStar; i++) {
    stars.push(
      <Image
        key={`Empty-${i}`}
        source={icons.starEmpty}
        resizeMode="cover"
        style={{height: 20, width: 20}}
      />,
    );
  }

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {stars}
      <Text
        style={{marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3}}>
        {rate}
      </Text>
    </View>
  );
};

const DestinationDetail = () => (
  <View style={styles.container}>
    {/* header */}
    <View style={{flex: 2}}>
      <Image
        source={images.skiVillaBanner}
        resizeMode="cover"
        style={{height: '80%', width: '100%'}}
      />
      <View
        style={[
          {
            position: 'absolute',
            bottom: '5%',
            left: '5%',
            right: '5%',
            borderRadius: 15,
            padding: SIZES.padding,
            backgroundColor: COLORS.white,
          },
          styles.shadow,
        ]}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.shadow}>
            <Image
              source={images.skiVilla}
              resizeMode="cover"
              style={{width: 70, height: 70, borderRadius: 15}}
            />
          </View>
          <View
            style={{
              marginHorizontal: SIZES.radius,
              justifyContent: 'space-around',
            }}>
            <Text style={{...FONTS.h3}}>Ski Villa</Text>
            <Text style={{color: COLORS.gray, ...FONTS.body3}}>France</Text>
            <StarReview rate={3.5} />
          </View>
        </View>

        <View style={{marginTop: SIZES.radius}}>
          <Text style={{color: COLORS.gray, ...FONTS.body3}}>
            Ski Villa offers simple rooms with mountain views in front of the
            ski lift to the Ski Resort
          </Text>
        </View>
      </View>
    </View>

    {/* body */}
    <View style={{flex: 1.5}}></View>

    {/* footer */}
    <View style={{flex: 0.5}}></View>
  </View>
);

export default DestinationDetail;
