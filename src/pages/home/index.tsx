// images
import BmiChart from '@assets/images/bmi-chart.png'
// components
import { Button, TextField } from '@components'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'
import { Units, useData } from './useData'

type HomePageProps = {}

export const HomePage: React.FC<HomePageProps> = () => {
  const className = useClasses()
  const { TX } = useText()
  const data = useData()

  const renderUnits = (key: keyof Units, unit: Units[keyof Units], text: string) => {
    return (
      <span
        className={className.unit({
          selected: data.unitSelected[key] === unit,
        })}
        onClick={() => data.handleUnitSelected(key, unit)}
      >
        {text}
      </span>
    )
  }

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
              {renderUnits('weight', 'kg', TX('HOME.KG'))}
              {renderUnits('weight', 'lb', TX('HOME.LB'))}
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
              {renderUnits('height', 'cm', TX('HOME.CM'))}
              {renderUnits('height', 'ft', TX('HOME.FT'))}
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
