import React from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const ProductItem = props => {
  const { item, onViewDetail, onCartAdd } = props;
  return (
    <TouchableOpacity onPress={onViewDetail} >
      <Container>
        <PrdImage source={{uri: item.imageUrl}} />
        <Text>
          {item.title}      
        </Text>
        <Button title="VIEW" onPress={onViewDetail} />
        <Button title="CART" onPress={onCartAdd} />
      </Container>
    </TouchableOpacity>
  )
}

const Container = styled.View`    
  padding: 10px;
  margin: 0 0 10px;
  border: 1px solid #ddd;
  background: #fff;
  align-items: center;
`;

const PrdImage = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  margin-left: 20px;
`;


export default ProductItem;