import Popularproduct from '../component/Popularproduct';
import Recentproduct from '../component/Recentproduct';
import Recentarticle from '../component/Recentarticle';

function Homepage(){
	return(
		<div>
			<Popularproduct/>
			<Recentproduct/>
			<Recentarticle/>
		</div>
		)
}

export default Homepage;