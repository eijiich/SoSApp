import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Aprenda mais!',
    imgPath:
      'https://knowlab.in/wp-content/uploads/2019/12/666-1200x675.jpg',
  },
  {
    label: 'Aprenda em menos tempo!',
    imgPath:
      'https://www.rambabu.ca/assets/img/photos/coach/faster-time-to-market.jpg',
  },
  {
    label: 'Aprenda melhor!',
    imgPath:
      'https://smiletutor.sg/wp-content/uploads/2016/08/learn-better.jpg',
  },
];

const styles = theme => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    width: '100%',
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    width: '30%',
    display: 'block',
    maxWidth: '100vw',
    maxHeight: '60vh',
    overflow: 'hidden',
    width: '100%',
  },
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
    return (
      <div className={classes.root}>

        <Typography style={{ whiteSpace: 'pre-line' },{margin: "0vh 0vh 2vh 0vh"}} variant="h4">{tutorialSteps[activeStep].label}</Typography>
        <Typography
  variant="body1"
  style={{whiteSpace: 'pre-line'}}
>
  
</Typography>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Próximo
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Anterior
        </Button>
          }
        />
      </div>
    );
  }
}
SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);

