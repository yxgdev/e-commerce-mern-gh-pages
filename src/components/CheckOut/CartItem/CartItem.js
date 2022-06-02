import React from "react";
import {
  CartItemContainer,
  ItemPicContainer,
  ItemPic,
  ItemTitleContainer,
  ItemTitle,
  ItemQuantityContainer,
  ItemQuantitySelect,
  ItemQuantityOption,
  ItemPriceAndRemoveContainer,
  ItemPrice,
  ItemRemoveButton,
  ItemQuantityTitle,
  ProductTitle,
} from "./CartItemStyles";

import iPhone from "../../../images/iphone-13-pro-family-hero.png";
import { items } from "../../ItemsList/itemsInItemsList";
import { useDispatch } from "react-redux";
import { deleteItemFromCart, updateItemInCart } from "../../../redux/authSlice";

const CartItem = ({ item, user }) => {
  const currentItem = items.find((i) => i.id == item.productId);
  const itemPicture = currentItem.image;
  const dispatch = useDispatch();

  const onChange = (e, userId, productId) => {
    const quantity = parseInt(e.target.value);
    updateItemInCart(dispatch, userId, productId, e.target.value, quantity);
  };

  const onRemove = (userId, productId) => {
    deleteItemFromCart(dispatch, userId, productId);
  };
  return (
    <CartItemContainer>
      <ItemPicContainer>
        <ItemPic src={itemPicture} />
      </ItemPicContainer>

      <ItemTitleContainer>
        <ProductTitle>Product Name </ProductTitle>
        <ItemTitle>{item.title}</ItemTitle>
      </ItemTitleContainer>

      <ItemQuantityContainer>
        <ItemQuantityTitle>Quantity</ItemQuantityTitle>
        <ItemQuantitySelect
          name="quantity"
          onChange={(e) => {
            onChange(e, user.id, item.productId);
          }}
          defaultValue={item.quantity}
        >
          <ItemQuantityOption>1</ItemQuantityOption>
          <ItemQuantityOption>2</ItemQuantityOption>
          <ItemQuantityOption>3</ItemQuantityOption>
          <ItemQuantityOption>4</ItemQuantityOption>
          <ItemQuantityOption>5</ItemQuantityOption>
        </ItemQuantitySelect>
      </ItemQuantityContainer>

      <ItemPriceAndRemoveContainer>
        <ItemPrice>RM {item.price * item.quantity}</ItemPrice>
        <ItemRemoveButton onClick={() => onRemove(user.id, item.productId)}>
          REMOVE
        </ItemRemoveButton>
      </ItemPriceAndRemoveContainer>
    </CartItemContainer>
  );
};

export default CartItem;
