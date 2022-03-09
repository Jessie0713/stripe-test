import React, { useEffect } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import Pug from '../images/pug-big.png'
import Layout from '../layouts'
import getStripe from '../components/utils/stripe'

// item u want to sell
const item = {
  price: 'price_1KZRORIJlvNDy7qbAK4ExWye',
  quantity: 1,
}
const checkoutOption = {
  lineItems: [item],
  mode: 'payment',
  successUrl: `${window.location.origin}/success`,
  cancelUrl: `${window.location.origin}/cancel`,
}
const redirectToCheckout = async () => {
  console.log('redirectToCheckout')
  const stripe = await getStripe()
  const { error } = await stripe.redirectToCheckout(checkoutOption)
  console.log('stripe checkout error', error)
}

export default function index() {
  return (
    <Layout>
      <Box sx={{ position: 'relative', height: '100vh' }}>
        <Card
          sx={{
            maxWidth: 345,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        >
          <CardMedia component='img' height='140' image={Pug} />
          <CardContent>
            <Typography
              gutterBottom
              variant='h2'
              component='div'
              sx={{ color: 'primary.main' }}
            >
              The Cutest Pug
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size='medium'
              sx={{ margin: 'auto', width: '100%' }}
              onClick={redirectToCheckout}
            >
              BUY
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Layout>
  )
}
