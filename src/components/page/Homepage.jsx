import Popularproduct from '../component/Popularproduct';
import Recentproduct from '../component/Recentproduct';
import Recentarticle from '../component/Recentarticle';
import Imageslider from '../component/Imageslider';
import Introduction from '../component/Introduction';

function Homepage(){
	return(
		<div className="flex flex-col gap-2 p-3">
			<Introduction/>
			<Imageslider/>
			<Popularproduct/>
			<Recentproduct/>
			<Recentarticle/>
		</div>
		)
}

export default Homepage;