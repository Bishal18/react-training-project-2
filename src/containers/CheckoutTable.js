import { connect } from 'react-redux';
import Checkout from '../pages/Checkout';

const mapStateToProps = ({cart:{cartItems}}) => {
//console.log("checkout mapStateToProps", cartItems);
return ({
        cartItems 
});
}

export default connect(mapStateToProps)(Checkout);