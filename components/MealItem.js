import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

export default function MealItem(props) {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                  <View style={styles.textInfoContainer}>
                    <Text style={styles.textInfo}>{props.duration}</Text>
                  </View>
                  <View style={styles.textInfoContainer}>
                    <Text style={styles.textInfo}>{props.affordability}</Text>
                  </View>
                  <View style={styles.textInfoContainer}>
                    <Text style={styles.textInfo}>{props.complexity}</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    height: 250,
    width: '90%',
    // backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '100%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingVertical: 5,
    height: '100%',
    paddingHorizontal: 22,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'openSans-Bold',
    fontSize: 22,
    color: '#fff',
    // backgroundColor: 'rgba(0,0,0,0.3)',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 5,
    textAlign: 'left',
  },
  textInfo: {
    color: '#fff',
  },
  textInfoContainer: {
    borderRadius: 5,
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
});
