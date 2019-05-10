import SortBar from '../components/sortBar';
import NoFilmFound from '../components/noFilmFound';
import dynamic from 'next/dynamic'
const MainHeader = dynamic(() => import('../components/mainHeader'))

export default function Main() {
  return (
    <div>
      <MainHeader />
      <SortBar />
      <NoFilmFound />
    </div>
  )
}
