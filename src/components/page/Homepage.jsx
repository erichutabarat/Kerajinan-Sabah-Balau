import Popularproduct from '../component/Popularproduct';
import Recentproduct from '../component/Recentproduct';
import Recentarticle from '../component/Recentarticle';
import Imageslider from '../component/Imageslider';

function Homepage(){
	return(
		<div>
			<Imageslider/>
			<Popularproduct/>
			<Recentproduct/>
			<Recentarticle/>
		</div>
		)
}

export default Homepage;