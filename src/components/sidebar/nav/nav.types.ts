import { SVGProps } from "../../icons";

export interface NavItemType {
    name: string,
    icon: React.ComponentType<SVGProps>,
    path: string
}