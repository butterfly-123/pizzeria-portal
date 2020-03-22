import React from 'react';
import styles from './OrderNew.scss';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const OrderingOrderID = () => (
  <div className={styles.component}>
    <h2>Order</h2>

    <Card className={styles.root}>
        <CardContent>
          <Typography className={styles.title} color="inherit" gutterBottom>
            Table 3
          </Typography>
          <Typography variant="h5" component="h2" color="secondary">
            Active order
          </Typography>
          <Typography variant="body2" component="p">
            Delivered
            <br />
            {'"guaranteed seat"'}
          </Typography>
          <br />
          <br />
          <Typography className={styles.title} color="primary" gutterBottom>
            pizza, coffee, ice cream
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            Time order: 18:00
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            Price: 50$
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color='secondary'>ORDER</Button>
        </CardActions>
      </Card>
  </div>
);

export default OrderingOrderID;