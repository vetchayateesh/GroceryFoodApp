import { Button, useMediaQuery } from '@mui/material';
import { groceryContext } from '../../Layout/Layout';
import { useContext } from 'react';
import { checkoutContext } from '../Cart';
import { DEFAULT_DELIVERY_CHARGE, formatInr } from '../../../utils/utils';

const OrderSummary = () => {
    // Get Cart Items from Context
    const { cartItemsState } = useContext(groceryContext);
    const [cartItems, setCartItems] = cartItemsState;
    const [isProceedToCheckout, setIsProceedToCheckout] = useContext(checkoutContext);

    // Media Query
    const isMediumScreen = useMediaQuery('(max-width:1024px)');

    const subtotal = cartItems.reduce((total, item) => {
        const itemTotal = Number.parseFloat(item.total);
        return total + (Number.isNaN(itemTotal) ? 0 : itemTotal);
    }, 0);
    const deliveryCharge = DEFAULT_DELIVERY_CHARGE;

    return (
        <div className='flex justify-center md:pt-16 col md:col-span-4 lg:col-span-1'>
            <div className={`lg:space-y-4 sticky top-0 bottom-0 w-full max-w-[25rem] space-y-3`}>
                {/* Title */}
                <h3 className='lg:text-xl text-lg sm:font-semibold font-bold tracking-wide'>Order Summary</h3>

                {/* Total Bill */}
                <table className='table-auto h-28 text-sm w-full'>
                    <tbody>
                        {/* Subtotal */}
                        <tr className='font-medium lg:text-gray-800 text-gray-6000'>
                            <td>Subtotal</td>
                            <td>{formatInr(subtotal)}</td>
                        </tr>
                        {/* Delivery Charge */}
                        <tr className='font-medium text-sm lg:text-gray-800 text-gray-600'>
                            <td>Delivery charge</td>
                            <td>{formatInr(deliveryCharge)}</td>
                        </tr>
                        {/* Total */}
                        <tr className='lg:font-medium font-semibold lg:text-lg'>
                            <td>Total</td>
                            <td style={{ color: 'green' }}>{formatInr(subtotal + deliveryCharge)}</td>
                        </tr>
                    </tbody>
                </table>

                {/* Proceed to checkout */}
                <Button
                    fullWidth
                    onClick={() => setIsProceedToCheckout(!isProceedToCheckout)}
                    sx={{ textTransform: 'capitalize', transition: 'display 1000s ease-in-out', display: isProceedToCheckout ? 'none' : 'block' }}
                    variant='contained'
                    size={isMediumScreen ? 'small' : 'medium'}
                    color='success'>
                    Proceed to checkout
                </Button>
            </div>
        </div>
    );
};

export default OrderSummary;