import React, { createContext } from "react";
import type { Admin } from "../types/admin";

export const AdminContext = createContext({} as Admin);

type Props = {
	children: React.ReactNode;
	value: any;
};

export const AdminProvider = ({ children, value }: Props) => {
	return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};
