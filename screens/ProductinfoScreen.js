import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Mic from 'react-native-vector-icons/Entypo';
import Sharealt from 'react-native-vector-icons/AntDesign';
import Heart from 'react-native-vector-icons/AntDesign';
import Location from 'react-native-vector-icons/Entypo';
import {useNavigation, useRoute} from '@react-navigation/native';

const ProductinfoScreen = () => {
  const route = useRoute();
  const {width} = Dimensions.get('window');
  const navigation = useNavigation();
  const height = (width * 100) / 100;
  return (
    <ScrollView
      style={{marginTop: 45, flex: 1, backgroundColor: 'white'}}
      showsHorizontalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: '#00CED1',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: 'white',
            borderRadius: 3,
            height: 38,
            flex: 1,
          }}>
          <Icon
            style={{paddingLeft: 10}}
            name="search1"
            size={22}
            color="black"
          />
          <TextInput placeholder="Search Amazon.in" />
        </Pressable>
        <Mic name="mic" size={24} color="black" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            style={{width, height, marginTop: 25, resizeMode: 'contain'}}
            source={{uri: item}}
            key={index}>
            <View
              style={{
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#C60C30',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: 12,
                  }}>
                  20% off
                </Text>
              </View>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#E0E0E0',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Sharealt name="sharealt" size={24} color="black" />
              </View>
            </View>

            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#E0E0E0',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 'auto',
                marginLeft: 20,
                marginBottom: 20,
              }}>
              <Heart name="heart" size={24} color="black" />
            </View>
          </ImageBackground>
        ))}
      </ScrollView>

      <View style={{padding: 10}}>
        <Text style={{fontSize: 15, fontWeight: '500'}}>
          {route?.params?.title}
        </Text>

        <Text style={{fontSize: 18, fontWeight: '600'}}>
          ₹{route?.params?.price}
        </Text>
      </View>

      <Text style={{height: 1, borderColor: 'D0D0D0', borderWidth: 1}} />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}>
        <Text>Color:</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          {route?.params?.color}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}>
        <Text>Size:</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          {route?.params?.size}
        </Text>
      </View>

      <Text style={{height: 1, borderColor: 'D0D0D0', borderWidth: 1}} />

      <View style={{padding: 10}}>
        <Text style={{fontSize: 15, fontWeight: 'bold', marginVertical: 5}}>
          Total: ₹{route.params.price}
        </Text>
        <Text style={{color: '#00CED1'}}>
          FREE delivery Tomorrow by 3 PM.Order within 10hrs 30 mins
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            alignItems: 'center',
            gap: 5,
          }}>
          <Location name="location" size={24} color="black" />
          <Text style={{fontSize: 15, fontWeight: '500'}}>
            deliver To Sujan - Bangalore 560019
          </Text>
        </View>
      </View>

      <Text style={{color: 'green', marginHorizontal: 10, fontWeight: '500'}}>
        IN Stock
      </Text>

      <Pressable
        style={{
          backgroundColor: '#FFC72C',
          padding: 10,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text>Add To Cart</Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: '#FFAC1C',
          padding: 10,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <Text>Buy Now</Text>
      </Pressable>
    </ScrollView>
  );
};

export default ProductinfoScreen;

const styles = StyleSheet.create({});
