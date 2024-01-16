// routes.js

const routes = [
  // Default route for larger screens
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/MobileIndexPage', component: () => import('pages/MobileIndexPage.vue') }
      // Add other routes for the default layout as needed
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MobileLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/LoginPage.vue') },
      { path: '/DashBoard', component: () => import('pages/DashBoard.vue') },
      { path: '/DashBoardd', component: () => import('pages/DashBoardd.vue') },
      { path: '/InspectionCar', component: () => import('pages/InspectionCar.vue') },
      { path: '/InspectionDraft', component: () => import('pages/InspectionDraft.vue') },
      { path: '/InspectionComp', component: () => import('pages/InspectionComp.vue') },
      { path: '/CouncilReq', component: () => import('pages/CouncilReq.vue') },
      

      // Add other routes for the default layout as needed
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MobileLayout2.vue'),
    children: [
      { path: '/InspectionOver', component: () => import('pages/InspectionOver.vue') },
      // Add other routes for the default layout as needed
    ]
  },
  {
    path: '/',
    component: () => import('layouts/SkeletonLayout.vue'),
    children: [
      { path: '/SkelDash', component: () => import('components/skeleton/SkelDash.vue') },
      // Add other routes for the default layout as needed
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
