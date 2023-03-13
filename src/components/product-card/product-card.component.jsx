import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cartItems/cartItems.selector';
import { addItemToCart } from '../../store/cartItems/cartItems.action';

import Button from '../buttons/buttons.component';
import { Button_Type_Classes } from '../buttons/buttons.component';
import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={Button_Type_Classes.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
