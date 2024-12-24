import React, { useState } from 'react'
import { Box, Card, Checkbox, Rating, Typography } from '@mui/material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

import styled from 'styled-components'
import { Buttons } from './button'






const ProductCards = styled(Card)(() => ({
  width: '100%',
  height: '395px'
}))

const DiscountText = styled(Typography)(theme => ({
  background: '#DB4444',
  padding: '0px 8px',
  borderRadius: '4px',
  position: 'relative',
  zIndex: 111
}))

const ProductImg = styled(Box)(theme => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '12px',
  background: '#F5F5F5',
  position: 'relative',
  height: '237px'
}))

const ProductIcon = styled(Box)(theme => ({
  background: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '35px',
  width: '37px',
  borderRadius: '61%',
  marginTop: 8,
  position: 'relative',
  zIndex: 11
}))

const Productimgs = styled('img')(() => ({
  width: '139px',
  height: '123px',
  position: 'absolute',
  left: '56px',
  top: '61px'
}))


interface IProductProps {
  productDeatils: {
    id: number
    image: string
    title: string
    price: number
    rating: {
      rate: number
      count: number
    }
  }
}

const ProductTitile = styled(Typography)({
  height: '53px',
  width: '221px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
})
const buttonStyle = {
  width: 250,
  borderRadius: 0.3,
  background: "black"
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export function Cards({ productDeatils }: IProductProps) {
  const [cartbutton, setcartbutton] = useState<boolean>(false)

  let showButton = () => {
    setcartbutton(true)
  }
  let hideButton = () => {
    setcartbutton(false)
  }

  return (
    <>
      <Box width={'22%'} onMouseEnter={showButton} onMouseLeave={hideButton}>
        <ProductCards>
          <ProductImg>
            <Box>
              <DiscountText variant='subtitle2'>-50%</DiscountText>
            </Box>
            <Box>
              <ProductIcon>
                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              </ProductIcon>

              <ProductIcon>
                <RemoveRedEyeIcon />
              </ProductIcon>
            </Box>
            <Productimgs src={productDeatils.image} />
          </ProductImg>
          {cartbutton ? (
            <Buttons
              text='Add To Cart'
              variant1='contained'
              styleProps={{ ...buttonStyle }}
            ></Buttons>
          ) : (
            ''
          )}

          <Box padding={2}>
            <ProductTitile variant='subtitle1'>
              {productDeatils.title}
            </ProductTitile>
            <Typography variant='subtitle2'>
              ${productDeatils.price}
              <Box component='span'>{ }</Box>
            </Typography>
            <Box display={'flex'} alignItems={'center'} gap={1} marginTop={1}>
              <Rating
                name='half-rating-read'
                defaultValue={2.5}
                precision={productDeatils.rating.rate}
                readOnly
              />
              <Box component='span'>({productDeatils.rating.count})</Box>
            </Box>
          </Box>
        </ProductCards>
      </Box>
    </>
  )
}
