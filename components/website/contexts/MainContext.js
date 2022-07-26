import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { notification, message } from "antd";

export const MainContext = createContext({});

export default function MainContextProvider({ children }) {
	const languageList = ["vi", "en"];
	const [navStatus, setNavStatus] = useState(false);
	const [languageCurrent, setLanguageCurrent] = useState(languageList[0]);

	const changeLanguage = () => {
		if (languageCurrent === languageList[0]) {
			setLanguageCurrent(languageList[1]);
		} else {
			setLanguageCurrent(languageList[0]);
		}
	};
    const changeNavStatus = () => {
        setNavStatus(!navStatus);
    }

	// const changeNavStatus = useEffect(() => {
	// 	}, [navStatus]);

	return (
		<MainContext.Provider
			value={{
				navStatus,
                changeNavStatus,

				languageCurrent,
				changeLanguage,
			}}>
			{children}
		</MainContext.Provider>
	);
}
