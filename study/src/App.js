import React from 'react';
import { View, Text } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

const App = () => {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect( async () => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>LOADING...</Text>
      </View>
    )
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>    
  )
}

export default App;

/**
 * @ShopNavigator
 * : 전체를 감싸는 모듈 
 * : 앱안에서의 리액트 라우터 같은 느낌
 **/