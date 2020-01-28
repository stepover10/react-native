import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Platform } from 'react-native';
import ProductsOverviewScreean from '../screens/shop/ProductsOverviewScreean';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import Colors from '../constants/Colors';

import { Fonts } from '../Fonts';

const ProductsNavigator = createStackNavigator({
  
  ProductsOverview: ProductsOverviewScreean, // component
  ProductDetail: ProductDetailScreen // component


}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
      fontFamily: Fonts.BMHANNAAir_ttf
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }
})

export default createAppContainer(ProductsNavigator);

/**
 * @Platform
 * : 유저 기기 체크 
 */