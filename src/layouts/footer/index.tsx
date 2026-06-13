// hooks
import { useText } from '@hooks'
// locals
import { useClasses } from './useClasses'

type FooterProps = {}

export const Footer: React.FC<FooterProps> = () => {
  const className = useClasses()
  const { TX } = useText()

  return (
    <div className={className.root()}>
      <p className={className.copyright()}>{TX('FOOTER.COPYRIGHT')}</p>
    </div>
  )
}
