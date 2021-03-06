import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import { 
  Link as RouterLink,
  withRouter
} from 'react-router-dom';

const styles = theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  content: {
    backgroundColor: 'rgb(242, 251, 254)',
  },
  action: {
    backgroundColor: 'rgb(242, 251, 254)',
  }
});

class MediaCard extends React.Component {
  render() {
    const { 
      classes,
      title,
      description,
      img,
      className,
    } = this.props;

    const {
      url,
    } = this.props.match;

    let trimUrl = url;
    if (url[url.length - 1] === '/') {
      trimUrl = url.slice(0, -1);
    }

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
          />
          <CardContent
            className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              { title }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              { description }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.action}>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" component={RouterLink} to={`${trimUrl}/${className}`}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles, { withTheme: true })(withRouter(MediaCard));
