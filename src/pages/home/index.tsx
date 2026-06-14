// images
import BmiChart from '@assets/images/bmi-chart.png'
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

  const renderForm = () => {
    return (
      <>
        <TextField fullWidth type='number' label={TX('HOME.AGE')} color='primary' />
        <TextField
          fullWidth
          label={TX('HOME.WEIGHT')}
          color='primary'
          endIcon={
            <div className={className.units()}>
              <span className={className.unit()}>{TX('HOME.KG')}</span>
              <span className={className.unit()}>{TX('HOME.LB')}</span>
            </div>
          }
        />
        <TextField
          fullWidth
          label={TX('HOME.HEIGHT')}
          color='primary'
          endIcon={
            <div className={className.units()}>
              <span className={className.unit()}>{TX('HOME.CM')}</span>
              <span className={className.unit()}>{TX('HOME.FT')}</span>
            </div>
          }
        />
        <Button>{TX('HOME.CALCULATE')}</Button>
      </>
    )
  }

  return (
    <div className={className.root()}>
      <div className={className.form()}>
        <h1 className={className.title()}>{TX('HOME.BMI_CALCULATOR')}</h1>
        {renderForm()}
      </div>
      <div className={className.image()}>
        <img src={BmiChart} alt='bmi-chart' />
      </div>
    </div>
  )
}
