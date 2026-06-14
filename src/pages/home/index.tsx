// images
import BmiChart from '@assets/images/bmi-chart.png'
// components
import { Button, TextField } from '@components'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'
import { useData } from './useData'

type HomePageProps = {}

export const HomePage: React.FC<HomePageProps> = () => {
  const className = useClasses()
  const { TX } = useText()
  const data = useData()

  const renderForm = () => {
    return (
      <form className={className.form()}>
        <TextField fullWidth type='number' label={TX('HOME.AGE')} color='primary' />
        <TextField
          fullWidth
          type='number'
          label={TX('HOME.WEIGHT')}
          color='primary'
          endIcon={
            <div className={className.units()}>
              <span
                className={className.unit({
                  selected: data.unitSelected.weight === 'kg',
                })}
                onClick={() => data.handleUnitSelected('weight', 'kg')}
              >
                {TX('HOME.KG')}
              </span>
              <span
                className={className.unit({
                  selected: data.unitSelected.weight === 'lb',
                })}
                onClick={() => data.handleUnitSelected('weight', 'lb')}
              >
                {TX('HOME.LB')}
              </span>
            </div>
          }
        />
        <TextField
          fullWidth
          type='number'
          label={TX('HOME.HEIGHT')}
          color='primary'
          endIcon={
            <div className={className.units()}>
              <span
                className={className.unit({
                  selected: data.unitSelected.height === 'cm',
                })}
                onClick={() => data.handleUnitSelected('height', 'cm')}
              >
                {TX('HOME.CM')}
              </span>
              <span
                className={className.unit({
                  selected: data.unitSelected.height === 'ft',
                })}
                onClick={() => data.handleUnitSelected('height', 'ft')}
              >
                {TX('HOME.FT')}
              </span>
            </div>
          }
        />
        <Button type='submit' size='large'>
          {TX('HOME.CALCULATE')}
        </Button>
      </form>
    )
  }

  return (
    <div className={className.root()}>
      <div className={className.formContainer()}>
        <div>
          <h1 className={className.title()}>{TX('HOME.BMI_CALCULATOR')}</h1>
          <p className={className.text()}>{TX('HOME.BMI_CALCULATOR_MESSAGE')}</p>
        </div>
        {renderForm()}
      </div>
      <div className={className.image()}>
        <img src={BmiChart} alt='bmi-chart' />
      </div>
    </div>
  )
}
