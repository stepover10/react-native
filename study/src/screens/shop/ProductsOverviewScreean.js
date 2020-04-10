import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from './ProductItem';
import styled from 'styled-components/native';
import { ADD_TO_CART, addToCart } from '../../store/actions/cart';

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  const _addProductCart = (product) => e => {
    console.log(product);
    dispatch( {
      type: ADD_TO_CART,
      product
    });
  }

  return (    
    <ContainerFlatList
      data={products} 
      keyExtractor={item => item.id}
      renderItem={
        itemData => 
          <ProductItem 
            { ...itemData} 
            onViewDetail={() => {            
              props.navigation.navigate('ProductDetail',{
                productId: itemData.item.id
              })
            }}
            onCartAdd={_addProductCart(itemData.item)}
          /> 
      }      
    />   
  )
}

ProductsOverviewScreen.navigationOptions = {
  headerTitle: '상품 리스트'
}

const ContainerFlatList = styled.FlatList`
  marginTop: 10px;  
`;

export default ProductsOverviewScreen;

/**
 * @FlatList 
 * : 리스트 컴포넌트
 * : data prop에 배열(array)을 넘겨주면 자료를 보여준다
 * 
 * @useSelector
 * : redux 상태에 접근
 */