import { withRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Main from '../components/main';
const DescriptionHeader = dynamic(() => import('../components/descriptionHeader'))

function Film() {
  return (
    <div>
      <h1>Film page</h1>
      <DescriptionHeader />
      <Main />
    </div>  
  )
}

export default withRouter(Film)
