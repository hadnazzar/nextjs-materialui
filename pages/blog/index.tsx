import * as React from 'react';
import {NextPage} from "next";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MediaCard from "../../components/mediaCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Blog: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', border: 1, justifyContent: 'center' }}>
        <Typography variant="h2" gutterBottom component="div">
          Blog
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, mt: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <MediaCard
              title={'Lizard'}
              description={
                `Lizards are a widespread group of squamate reptiles, with over 6,000 
                species, ranging across all continents except Antarctica`
              }
              imageUrl={'https://mui.com/static/images/cards/contemplative-reptile.jpg'}
            />
          </Grid>
          <Grid item xs={4}>
            <MediaCard
              title={'Paella'}
              description={
                `Recipe of the Paella`
              }
              imageUrl={'https://mui.com/static/images/cards/paella.jpg'}
            />
          </Grid>
          <Grid item xs={4}>
            <MediaCard
              title={'Puppy'}
              description={
                `Your best friend`
              }
              imageUrl={'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/px885282-image-kwvuv06h.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=ac302797fc6c9f27ac395f078d46293d'}
            />
          </Grid>
          <Grid item xs={4}>
            <MediaCard
              title={'Lizard'}
              description={
                `Lizards are a widespread group of squamate reptiles, with over 6,000 
                species, ranging across all continents except Antarctica`
              }
              imageUrl={'https://mui.com/static/images/cards/contemplative-reptile.jpg'}
            />
          </Grid>
          <Grid item xs={4}>
            <MediaCard
              title={'Paella'}
              description={
                `Recipe of the Paella`
              }
              imageUrl={'https://mui.com/static/images/cards/paella.jpg'}
            />
          </Grid>
          <Grid item xs={4}>
            <MediaCard
              title={'Puppy'}
              description={
                `Your best friend`
              }
              imageUrl={'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/px885282-image-kwvuv06h.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=ac302797fc6c9f27ac395f078d46293d'}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Blog;
