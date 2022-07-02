import MasterPageBasic from '@/components/website/master/MasterPageBasic';
import HomePage from '@/components/website/pages/HomePage';

export default function Home(props) {
	return (
        <MasterPageBasic hidePrevButton pageName="Homepage" themeHeader="light">
            <HomePage />
        </MasterPageBasic>
    );

}
