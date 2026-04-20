import { Button, Fade, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import { groceryContext } from '../../Layout/Layout';
import { useContext, useState } from 'react';
import GoBackButton from '../GoBackButton/GoBackButton';
import { DEFAULT_DELIVERY_CHARGE, handleSessionStorage, WHATSAPP_ORDER_NUMBER } from '../../../utils/utils';
import PopUpDialog from '../../PopUpDialog/PopUpDialog';
import { useNavigate } from 'react-router-dom';

const DeliveryForm = () => {
    const { cartItemsState } = useContext(groceryContext);
    const [cartItems, setCartItems] = cartItemsState;
    const [openDialog, setOpenDialog] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate()

    // Handle PlaceOrder
    const onSubmit = (data) => {
        const subtotal = cartItems.reduce((total, item) => {
            const quantity = Number.parseFloat(item.quantity) || 1;
            const price = Number.parseFloat(item.price) || 0;
            const itemTotal = Number.parseFloat(item.total);

            return total + (Number.isNaN(itemTotal) ? quantity * price : itemTotal);
        }, 0);

        const deliveryCharge = DEFAULT_DELIVERY_CHARGE;
        const grandTotal = subtotal + deliveryCharge;

        const payload = {
            customer: data,
            items: cartItems.map((item) => {
                const quantity = Number.parseFloat(item.quantity) || 1;
                const price = Number.parseFloat(item.price) || 0;
                const itemTotal = Number.parseFloat(item.total);

                return {
                    name: item.name,
                    unit: item.unit,
                    quantity,
                    total: Number.isNaN(itemTotal) ? quantity * price : itemTotal,
                };
            }),
            subtotal,
            deliveryCharge,
            total: grandTotal,
        };

        const itemDetails = payload.items
            .map((item, index) => `${index + 1}. ${item.name} - Qty: ${item.quantity} ${item.unit} - INR ${Number.parseFloat(item.total).toFixed(2)}`)
            .join('\n');

        const whatsappMessage = [
            'New Grocery Order',
            '',
            `Customer: ${data.full_name}`,
            `Phone: ${data.phone}`,
            `Email: ${data.email}`,
            `Address: ${data.address}`,
            '',
            'Items:',
            itemDetails,
            '',
            `Subtotal: INR ${subtotal.toFixed(2)}`,
            `Delivery Charge: INR ${deliveryCharge.toFixed(2)}`,
            `Total: INR ${grandTotal.toFixed(2)}`,
        ].join('\n');

        const whatsappLink = `https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank', 'noopener,noreferrer');

        setOpenDialog(true)
        handleSessionStorage('set', 'deliveryDetails', data)
    }
    // Handle Dialog 
    const handleOK = () => {
        // Reset the Cart_items
        handleSessionStorage('remove', 'cartItems')
        setCartItems([])
        setOpenDialog(false)
        navigate('/')
    }

    return (
        <>
            <PopUpDialog
                open={openDialog}
                message={'Order Placed successfully'}
                handleOk={handleOK}
                placeOrder={true} />
            <div className='md:mx-0 mx-auto space-y-4 max-w-[37rem]'>
                {/* Go back Btn */}
                <GoBackButton />
                <div className='space-y-9 lg:space-y-10 '>
                    {/* Title */}
                    <h1 className='lg:text-2xl text-xl font-semibold text-gray-600'>
                        Complete Delivery Details
                    </h1>

                    {/* Delivery Form */}
                    <Fade in={true}>
                        <form action="post"
                            className='lg:space-y-8  space-y-7'
                            onSubmit={handleSubmit(onSubmit)} >
                            {/* Full */}
                            <TextField
                                {...register('full_name', {
                                    required: 'Name is required',
                                })}
                                defaultValue={'John Doe'}
                                label='Full Name'
                                size='small'
                                error={errors.full_name ? true : false}
                                helperText={errors.full_name ? errors.full_name.message : ''}
                                fullWidth
                                color='success'
                                variant='outlined' />

                            {/* Email */}
                            <TextField
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern:
                                    {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                defaultValue={'vetchayateesh@gmail.com'}
                                label='Email'
                                size='small'
                                error={errors.email ? true : false}
                                helperText={errors.email ? errors.email.message : ''}
                                fullWidth
                                color='success'
                                variant='outlined' />

                            {/* Phone */}
                            <TextField
                                {...register('phone', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^(\+91)?[6-9]\d{9}$/,
                                        message: 'Enter a valid Indian mobile number'
                                    }
                                })}
                                defaultValue={'7013639877'}
                                label='Phone Number'
                                size='small'
                                error={errors.phone ? true : false}
                                helperText={errors.phone ? errors.phone.message : ''}
                                fullWidth
                                placeholder='+91XXXXXXXXXX'
                                color='success'
                                variant='outlined' />

                            {/* Address */}
                            <TextField
                                {...register('address', {
                                    required: 'Address is required',
                                })}
                                defaultValue={'Machilipatnam, AndhraPradesh'}
                                label='Address'
                                size='small'
                                error={errors.address ? true : false}
                                helperText={errors.address ? errors.address.message : ''}
                                fullWidth
                                placeholder='street, city, state'
                                color='success'
                                variant='outlined' />

                            {/* Submit Button */}
                            <Button type='submit'
                                fullWidth
                                variant='contained'
                                sx={{ textTransform: 'capitalize' }}
                                color='success'>
                                Place Order
                            </Button>
                        </form>
                    </Fade>
                </div>
            </div>
        </>
    );
};

export default DeliveryForm;