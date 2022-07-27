import React, { createContext, useContext, useState } from 'react'

const layoutContext = createContext();

export const useContextLayout = () => useContext(layoutContext);

export const UseLayoutContextProvider = ({ children }) => {
	const [openDrawer, setOpenDrawer] = useState(true)
	const [primaryColor, setPrimaryColor] = useState('#1B1C35')
	const [secondaryColor, setSecondaryColor] = useState('#ffffff')
	const distribution = {
		openDrawer,
		setOpenDrawer,
		primaryColor,
		setPrimaryColor,
		secondaryColor,
		setSecondaryColor
	};
	return <layoutContext.Provider value={distribution}>{children}</layoutContext.Provider>;

}
