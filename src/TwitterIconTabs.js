import React from 'react';
import Tabs from '@mui-treasury/components/tabs/twitterIcon';
import Home from '@material-ui/icons/Home';
import Search from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications';
import MailOutlineRounded from '@material-ui/icons/MailOutlineRounded';

const TwitterIconTabs = () => {
	const [index, setIndex] = React.useState(0);
	return (
		<Tabs
			tabs={[
				{ icon: <Home />, badgeProps: { badgeContent: '' } },
				{ icon: <Search /> },
				{ icon: <Notifications />, badgeProps: { badgeContent: 99 } },
				{ icon: <MailOutlineRounded /> },
			]}
			value={index}
			onChange={(e, i) => setIndex(i)}
		/>
	);
};

export default TwitterIconTabs;
