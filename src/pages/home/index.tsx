// images
import BmiChart from '@assets/images/bmi-chart.jpg'
// components
import { Button, TextField } from '@components'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'

type HomePageProps = {}

export const HomePage: React.FC<HomePageProps> = () => {
  const className = useClasses()
  const { TX } = useText()

  return (
    <div className={className.root()}>
      <div className={className.form()}>
        <h1 className={className.title()}>BMI Calculator</h1>
        <TextField fullWidth label={TX('HOME.AGE')} color='primary' />
        <TextField
          fullWidth
          label={TX('HOME.WEIGHT')}
          color='primary'
          endIcon={
            <div className={className.units()}>
              <span className={className.unit()}>Kg</span>
              <span className={className.unit()}>Lb</span>
            </div>
          }
        />
        <TextField
          fullWidth
          label={TX('HOME.HEIGHT')}
          color='primary'
          endIcon={
            <div className={className.units()}>
              <span className={className.unit()}>Cm</span>
              <span className={className.unit()}>Ft</span>
            </div>
          }
        />
        <Button>{TX('HOME.CALCULATE')}</Button>
      </div>
      <div className={className.image()}>
        <img src={BmiChart} alt='bmi-chart' />
      </div>
    </div>
  )
}
