// locals
import { useClasses } from './useClasses'

type HomePageProps = {}

export const HomePage: React.FC<HomePageProps> = () => {
  const className = useClasses()

  return <>HomePage</>
}
