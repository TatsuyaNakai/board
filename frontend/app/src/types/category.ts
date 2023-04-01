export type Category = {
	id: string;
	name: string;
	postsCnt: number;
};

export type CategoryInputs = {
	id: string;
	name: string;
};

export type CategoryAttributes = keyof Omit<Category, "id" | "postsCnt">;
