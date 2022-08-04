import React from 'react';

import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Button,
} from '@material-ui/core';
import useStyles from '../style';

function Item() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            Heading
          </Typography>
          <Typography>Lorem ipsum dolor sit amet.</Typography>
        </CardContent>
        <CardActions>
          <Button size="sm" color="primary">
            View
          </Button>
          <Button size="sm" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Item;
