// locals
import { useClasses } from './useClasses'

type HeaderProps = {}

export const Header: React.FC<HeaderProps> = () => {
  const className = useClasses()

  return <>Header</>
}
