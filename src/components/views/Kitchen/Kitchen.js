import React from 'react';
import styles from './Kitchen.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const bull = <span className={styles.bullet}>•</span>;

const Kitchen = () => (
  <div className={styles.component}>
    <h2>Kitchen</h2>
    <br />
    <div className={styles.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={styles.paper} style={{ backgroundColor: '#FFEBCD' }}>
            <Card className={styles.root}>
              <CardContent>
                <Typography className={styles.title} color="inherit" gutterBottom>
                  Table 2
                </Typography>
                <Typography className={styles.title} color="primary" gutterBottom>
                  Delivered
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
                  Date: 06.04.2020
                </Typography>
                <Typography className={styles.title} color="primary" gutterBottom>
                  Order: pizza, coffe, ice cream
                </Typography>
                <Typography className={styles.title} color="primary" gutterBottom>
                  Time: 12:00
                </Typography>
              </CardContent>
            </Card>
            <br />
            <br />
            <Card className={styles.root}>
              <CardContent>
                <Typography className={styles.title} color="inherit" gutterBottom>
                  Table 3
                </Typography>
                <Typography className={styles.title} color="primary" gutterBottom>
                  Delivered
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
                  Date: 06.04.2020
                </Typography>
                <Typography className={styles.title} color="primary" gutterBottom>
                  Order: chicken with salad and chips, orange juice
                </Typography>
                <Typography className={styles.title} color="primary" gutterBottom>
                  Time: 14:30
                </Typography>
              </CardContent>
            </Card>
            <br /> 
            <br />
            <Card className={styles.root}>
              <CardContent>
                <Typography className={styles.title} color="inherit" gutterBottom>
                  Table 4
                </Typography>
                <Typography className={styles.title} color="primary" gutterBottom>
                  Delivered
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
                  Date: 06.04.2020
                </Typography>
                <Typography className={styles.title} color="primary" gutterBottom>
                  Order: spaghetti, red wine, apple cake
                </Typography>
                <Typography className={styles.title} color="primary" gutterBottom>
                  Time: 19:00
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={styles.paper} style={{ backgroundColor: '#FFEBCD' }}>
            <Card className={styles.root}>
              <CardContent>
                <Typography className={styles.title} color="inherit" gutterBottom>
                  Delivery:
                </Typography>
                <Typography className={styles.title} color="primary" gutterBottom>
                  Address: Kcdsfsf Frfsdf 34 Jkiol 35-4543 
                </Typography>
              </CardContent>
            </Card>
            <br />
            <br />
            <Card className={styles.root} style={{ marginTop: 300 }}>
              <CardContent>
                <Typography className={styles.title} color="inherit" gutterBottom>
                  Delivery:
                </Typography>
                <Typography className={styles.title} color="primary" gutterBottom>
                  Address: Jkijnx Frfsdf 5 Hdjeowp 55-0000 Hdjeowp
                </Typography>
              </CardContent>
            </Card>
            <Card className={styles.root} style={{ marginTop: 340 }}>
              <CardContent>
                <Typography className={styles.title} color="inherit" gutterBottom>
                  Delivery:
                </Typography>
                <Typography className={styles.title} color="primary" gutterBottom>
                  Address: Lonen Jiko 277 Jkiol 33-6666 
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default Kitchen;