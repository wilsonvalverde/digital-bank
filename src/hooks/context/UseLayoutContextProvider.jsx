import React, { createContext, useContext, useState } from 'react'

const layoutContext = createContext();

export const useContextLayout = () => useContext(layoutContext);

export const UseLayoutContextProvider = ({ children }) => {
	const [openDrawer, setOpenDrawer] = useState(true)
	const distribution = { openDrawer, setOpenDrawer };

	return <layoutContext.Provider value={distribution}>{children}</layoutContext.Provider>;

}
