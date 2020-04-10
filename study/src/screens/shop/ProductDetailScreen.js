import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import { Fonts } from '../../Fonts';

const ProductDetailScreen = props => {  
  const productId = props.navigation.getParam('productId');

  /**
   * @useSelector 기본 Reducer에 접근
   **/
  const selectedProduct = useSelector( state => 
    state.products.availableProducts.find( prod => prod.id === productId )
  )

  return (
    <ContainerScrollView>      
      <PrdImage source={{uri:selectedProduct.imageUrl}} />
      <PrdTitle>{selectedProduct.title}</PrdTitle>
    </ContainerScrollView>
  )
}

ProductDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('productTitle')
  }
}

const ContainerScrollView = styled.ScrollView`      
  padding: 20px;
  text-align: center;
`;

const PrdImage = styled.Image`        
  width: 100%;
  height: 500px;  
`;

const PrdTitle = styled.Text`        
  font-family: ${Fonts.BMHANNAAir};
  font-size: 20px;
`;

/**
 * @ScrollView 
 * - 컨텐츠양이 많을때 사용 
 * - ScrollViews는 작동하기 위해 높이가 제한되어 있어야 한다
 **/

export default ProductDetailScreen;