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
    <h2>Ordering</h2>
    <div>
      <br /> 
      <br />
        <Card className={styles.root}> 
        <CardContent>
          <Typography className={styles.title} color="inherit" gutterBottom>
            Table 1
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            Inactive
          </Typography>
          <Typography variant="h5" component="h2" color="secondary">
            for smo{bull}kers
          </Typography>
          <img width='100px' heihgt='100px' alt='forSmokimg' src='https://www.galerialimonka.pl/pics/prod/znaczek-informacyjny-strefa-dla-palacych-indici-zack-zack-50720.jpg'></img>
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
            occupied: 5
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            free: 0
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            Date: 15.03.2020
          </Typography>
        </CardContent>
      </Card>

      <br /> 
      <br />
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
          <img width='100px' heihgt='100px' alt='forNoSmoking' src='https://hhp-blog.s3.amazonaws.com/2019/02/iStock-941094224.jpg'></img>
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
          <Typography className={styles.title} color="primary" gutterBottom>
            Date: 06.04.2020
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`${process.env.PUBLIC_URL}/ordering/new`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42' }}>
            <Button size="small" color='secondary'>New order</Button>
          </Link>
        </CardActions>
      </Card>

      <br /> 
      <br />
        <Card className={styles.root}>
        <CardContent>
          <Typography className={styles.title} color="inherit" gutterBottom>
            Table 3
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            Active
          </Typography>
          <Typography variant="h5" component="h2" color="secondary">
            re{bull}ser{bull}va{bull}tion
          </Typography>
          <img width='200px' height='100px' alt='reservation' src='https://lh3.googleusercontent.com/proxy/3t8tTnsuFBRdGAjLPhshGvisFvjnvjDKZvlO9WjAbGwVZalGo9OrBc4a_Y_ICiUrJQu5U6AWUkYJi6sLuhPcA52GiJjZ1Lpr52NYfaSe_Fnou6fSjvaxRQkt7QkPZTlv3b1ENNvKgPNH838-lBMvxrLd1s8F8w'></img>
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
          <Typography className={styles.title} color="primary" gutterBottom>
            Date: 30.03.2020
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`${process.env.PUBLIC_URL}/ordering/new`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42' }}>
            <Button size="small" color='secondary'>New order</Button>
          </Link>
        </CardActions>
      </Card>

      <br /> 
      <br />
        <Card className={styles.root}>
        <CardContent>
          <Typography className={styles.title} color="inherit" gutterBottom>
            Table 4
          </Typography>
          <Typography className={styles.title} color="primary" gutterBottom>
            Active
          </Typography>
          <Typography variant="h5" component="h2" color="secondary">
            for co{bull}u{bull}ples
          </Typography>
          <img width='200px' height='100px' alt='forCouples' src='https://image.shutterstock.com/image-illustration/two-person-served-table-260nw-78669565.jpg'></img>
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
          <Typography className={styles.title} color="primary" gutterBottom>
            Date: 01.04.2020
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`${process.env.PUBLIC_URL}/ordering/new`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42' }}>
            <Button size="small" color='secondary'>New order</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  </div>
);

export default Ordering;