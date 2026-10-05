export type Priority = "Low" | "Medium" | "High" | "Critical";

export type Arena = "North" | "South" | "Center";

export type Status = "Active" | "Handled";

export type NewAlert = {
    displayName: string;
    description: string;
    priority: Priority;
    arena: Arena;
    status: Status;
    lon: number;
    lat: number;
};

export type Alert = NewAlert & {
    id: string;
};

export type UpdateAlert = Partial<NewAlert>;
