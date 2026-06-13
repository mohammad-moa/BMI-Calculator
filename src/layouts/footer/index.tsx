// locals
import { useClasses } from './useClasses'

type FooterProps = {}

export const Footer: React.FC<FooterProps> = () => {
  const className = useClasses()

  return <div className={className.root()}></div>
}
