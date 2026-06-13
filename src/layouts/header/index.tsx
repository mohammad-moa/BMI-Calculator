import { NavLink } from 'react-router'
// constants
import { HISTORY_ROUTE } from '@constants/routes'
// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'

type HeaderProps = {}

export const Header: React.FC<HeaderProps> = () => {
  const className = useClasses()
  const { TX } = useText()

  return (
    <div className={className.root()}>
      <h1 className={className.title()}>
        IM<strong className={className.subTitle()}>FIT</strong>
      </h1>
      <div>
        <NavLink to={HISTORY_ROUTE} className='opacity-50 pointer-events-none'>
          {TX('HISTORY')} ({TX('COMING_SOON')})
        </NavLink>
      </div>
    </div>
  )
}
