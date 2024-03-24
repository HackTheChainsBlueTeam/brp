//changing this to a string so that it can be a ts file
//currently unused
export interface RouteConfig {
    name: string;
    path: string;
    visible: boolean;
    icon: any | undefined;
    id: string;
}

export const routes: Array<RouteConfig> = [
    {
        name: 'Home',
        path: '/',
        visible: false,
        icon: "HomeIcon",
        id: 'home',
      },
      {
        name: 'Dashboard',
        path: '/dashboard',
        visible: true,
        icon: "DashboardIcon",
        id: 'dashboard',
      },
      {
        name: 'A Missing Page',
        path: '/404',
        visible: true,
        icon: "TestIcon",
        id: '404',
      },
    ];
    