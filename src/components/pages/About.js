import React from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
//   root: {
//     height: 380,
//   },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,

	root: {
		maxWidth: 555,
	  marginTop: '40px',
	  },
	  media: {
		height: 120,
	  },
  },
}));

function About() {
	const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
	return (
		<div>
		<div className={classes.root}>
		<FormControlLabel style={{color: "orange", fontSize: "70px"}}
		  control={<Switch checked={checked} onChange={handleChange} />}
		  label="Mission Statment"
		/>
		<div className={classes.container}>
		  <Zoom in={checked}>
			<Paper elevation={4} className={classes.paper}>	 
				<p className="Paragraph"> "We are on a mission to create everlasting connections between families and their AuPairs’. AuPairs’ choose us because we understand they are more than babysitters to us, as they bring diversity and a new view of life into the homes of our families. Together families and their AuPairs’ exchange cultural experiences and help each other grow their view of the world around them!" </p>
			</Paper>
		  </Zoom>
		</div>
	  </div>
	  <div class="float-container" style ={{
    padding: '20px'}}>
  <div class="float-child" style={{ width: '50%',
    float: 'left',
    padding: '20px'}}>
  <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
    style={{height: 440}}
          className={classes.media}
          image="https://media-exp3.licdn.com/dms/image/C4E03AQELfcK4N0lwlg/profile-displayphoto-shrink_800_800/0/1593476412558?e=1628121600&v=beta&t=po62Qs-S0sqTqHL42DRqO16t01MNKq5lv2R0C13jEuM"
          title="Photo of Founder"
		/>
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            Ashley, Co-Founder (CEO)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
		  Ashley has 6 years experience as an engineer in the energy industry. Her previous focus has been design and operations, but now has shifted her focus to coding as a software developer. When she is not working to ensure AuPaird works seamlessly, she enjoys spending time with her family and traveling once again post-covid. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://ashleykgehring.medium.com/" target="_blank">
          Blog Posts
        </Button>
        <Button size="small" color="primary" href="https://www.linkedin.com/in/ashley-knorr-gehring-08302414/" target="_blank">
          LinkedIn
        </Button>
      </CardActions>
    </Card>
  </div>
  <div class="float-child"style={{ width: '50%',
    float: 'left',
    padding: '20px'}}>
  <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
    style={{height: 440}}
          className={classes.media}
          image="https://media-exp3.licdn.com/dms/image/C5603AQE06YLnG-sz6A/profile-displayphoto-shrink_800_800/0/1564611307314?e=1628121600&v=beta&t=0c9mUAhcNyp2DM3PwoeJQIokL8h--N1OnsA2NGAaBto"
          title="Photo of Founder"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Selam, Co-Founder (CTO)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Born and raised in Addis Ababa, Ethiopia, Selam understands the core need in raising children in a diverse household. Her passion for connecting people and bridging cultural differences is what led her alongside her two co-founders to start Au Pair'd. When she is not busy leading her team, you can find her by the water enjoying time with family and friends. 
		  </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://selam-tadd-degefu.medium.com/" target="_blank" >
          Blog Posts
        </Button>
        <Button size="small" color="primary" href="https://www.linkedin.com/in/selamdegefu/" target="_blank" >
          LinkedIn
        </Button>
      </CardActions>
    </Card>
  </div>
  <div class="float-child"style={{ width: '50%',
    float: 'left',
    padding: '20px'}}>
  <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
    style={{height: 440}}
          className={classes.media}
          image="https://media-exp3.licdn.com/dms/image/C5603AQFp36MFnIprPQ/profile-displayphoto-shrink_400_400/0/1609817110387?e=1628121600&v=beta&t=mYnSQbcIeHlvZSZ2zFmhyHa0cwS4qrHHRMmSBIZSn-8"
          title="Founder Photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Celeste, Co-Founder (CMO)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          A self-proclaimed "branding machine" Celeste joined the startup world in hopes of creating products that allow her to bring her many ideas to life. Although she has a passion for technology, her innate gift is sales & marketing. Celeste often refers to herself as "The Billion Dollar Brain" and fully intends to live up to the title. AuPaird is the first of many ideas to come. She's also the mother of twin girls aka "Twin Turbulence" another brand soon to come.  
		  </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://tweetsbyceleste.medium.com/" target="_blank" > 
		Blog Posts
		</Button>
        <Button size="small" color="primary" href="https://www.linkedin.com/in/celesteanell/" target="_blank" >
          LinkedIn
        </Button>
      </CardActions>
    </Card>
  </div>
</div>
	  </div>
	  
	)
}

export default About
