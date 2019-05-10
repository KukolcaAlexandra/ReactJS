import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Main from '../components/main';
const MainHeader = dynamic(() => import('../components/mainHeader'))


function Search() {
  return (
    <div>
      <h1>Movies List</h1>
      <MainHeader />
      <Main />
    </div>
  )
}

export default withRouter(Search)
