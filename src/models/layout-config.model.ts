import { ConfigModel } from "./config.model";

export interface LayoutConfigModel {
	showMainSidenav: boolean;
	showSecondSideNav: boolean;
	secondSideNavMode: "over" | "push" | "side";
	mainSideNavMode: "over" | "push" | "side";
	mainSideNavItems: {
		route: string;
		icon: string;
		roles: string[];
		title: string;
	}[];
	showLeftNavBar: boolean;
	stickyLeftNavBar: boolean;
	layoutMode: "with-margin" | "without-margin" | "default";
	title: string;
}
