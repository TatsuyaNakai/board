export type Admin = {
	id: string;
	email: string;
	password: string;
	accessToken: string;
};

export type AdminAttributes = keyof Omit<Admin, "id" | "accessToken">;
