export interface CollapseSidebarItem {
    id: number;
    name: string;
    link: string
}

export interface CollapseSidebarL2Item {
    id: number;
    name: string;
    link: string;
    items: CollapseSidebarItem[]
}