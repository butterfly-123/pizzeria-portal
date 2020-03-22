import React from 'react';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const bull = <span className={styles.bullet}>•</span>;

const Ordering = () => (
  <div className={styles.component}>
    <h2>Ordering view</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/ordering/new`}>New Order</Link> <br />
      <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`}>Order id</Link>

      <br /> 
      <br />
        <Card className={styles.root}>
        <CardContent>
          <Typography className={styles.title} color="inherit" gutterBottom>
            Table 1
          </Typography>
          <Typography variant="h5" component="h2" color="secondary">
            for smo{bull}kers
          </Typography>
          <Typography variant="body2" component="p">
            everything in place
            <br />
            {'"comfortable places"'}
          </Typography>
          <br />
          <br />
          <Typography className={styles.title} color="primary" gutterBottom>
            Place:
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            occupied: 0
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            free: 2
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color='secondary'>New order</Button>
        </CardActions>
      </Card>

      <br /> 
      <br />
        <Card className={styles.root}>
        <CardContent>
          <Typography className={styles.title} color="inherit" gutterBottom>
            Table 1
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
            Place:
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            occupied: 10
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            free: 1
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color='secondary'>New order</Button>
        </CardActions>
      </Card>

      <br /> 
      <br />
        <Card className={styles.root}>
        <CardContent>
          <Typography className={styles.title} color="inherit" gutterBottom>
            Table 3
          </Typography>
          <Typography variant="h5" component="h2" color="secondary">
            re{bull}ser{bull}va{bull}tion
          </Typography>
          <Typography variant="body2" component="p">
            enough space
            <br />
            {'"guaranteed seat"'}
          </Typography>
          <br />
          <br />
          <Typography className={styles.title} color="primary" gutterBottom>
            Place:
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            occupied: 1
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            free: 8
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color='secondary'>New order</Button>
        </CardActions>
      </Card>

      <br /> 
      <br />
        <Card className={styles.root}>
        <CardContent>
          <Typography className={styles.title} color="inherit" gutterBottom>
            Table 4
          </Typography>
          <Typography variant="h5" component="h2" color="secondary">
            for co{bull}u{bull}ples
          </Typography>
          <Typography variant="body2" component="p">
            clean and tidy
            <br />
            {'"calm and romantic places"'}
          </Typography>
          <br />
          <br />
          <Typography className={styles.title} color="primary" gutterBottom>
            Place:
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            occupied: 2
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            free: 3
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color='secondary'>New order</Button>
        </CardActions>
      </Card>
    </div>
  </div>
);

export default Ordering;