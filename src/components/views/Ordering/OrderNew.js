import React from 'react';
import styles from './OrderNew.scss';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const bull = <span className={styles.bullet}>•</span>;

const OrderNew = () => (
  <div className={styles.component}>
    <h2>New Order</h2>

    <Card className={styles.root}>
        <CardContent>
          <Typography className={styles.title} color="inherit" gutterBottom>
            Table 2
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            Active
          </Typography>
          <Typography variant="h5" component="h2" color="secondary">
            for non{bull}smo{bull}kers
          </Typography>
          <Typography variant="body2" component="p">
            peace and quiet
            <br />
            {'"relax in comfortable places"'}
          </Typography>
          <br />
          <br />
          <Typography className={styles.title} color="primary" gutterBottom>
            Date: 06.04.2020
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            Order: pizza, coffe, ice cream
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42'}}>
            <Button size="small" color='secondary'>Your order</Button>
          </Link>
        </CardActions>
      </Card>
  </div>
);

export default OrderNew;