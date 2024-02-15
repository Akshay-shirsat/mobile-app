// routes.js

const routes = [
  // Default route for larger screens

  {
    path: '/auth',
    component: () => import('layouts/MobileLayout.vue'),
    children: [
       // Add other routes for the default layout as needed


      { path: '/dashboard',name: 'dashboard', component: () => import('pages/DashBoardd.vue') },
      { path: '/inspectionCar',name: 'inspectionCar', component: () => import('pages/inspections/InspectionCar.vue') },
      { path: '/inspectionOver',name: "inspectionOver", component: () => import('pages/inspections/InspectionOver.vue') },
      { path: '/inspectionDraft',name: 'draft', component: () => import('pages/inspections/InspectionDraft.vue') },
      { path: '/inspectionComp',name: 'inspectionComp', component: () => import('pages/inspections/InspectionComp.vue') },


      { path: '/signupUser', component: () => import('pages/SignupUser.vue') },
      { path: '/vehicleDetails', component: () => import('pages/VehicleDetails.vue') },

      { path: '/sosDetails',name: "Emergency", component: () => import('../pages/SosDetails.vue') },



//accident report
{ path: '/accidenntReport',name: "Accident", component: () => import('pages/accident-report/AccidenntReport.vue') },



{ path: '/continueAcc', component: () => import('pages/accident-report/ContinueAcc.vue') },
{ path: '/completedaccRepo', component: () => import('pages/accident-report/CompletedaccRepo.vue') },



//settings
{ path: '/settingPage',name: "setting", component: () => import('pages/settings/SettingPage.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MobileLayout2.vue'),
    children: [
      { path: '/', component: () => import('pages/LoginPage.vue') },
      { path: '/ForgotPassword', component: () => import('pages/ForgotPassword.vue') },
      // Checklist form

      { path: '/inspectionOver',name: "inspectionOver", component: () => import('pages/inspections/InspectionOver.vue') },
{ path: '/councilReq', component: () => import('pages/form/CouncilReq.vue') },
{ path: '/interiorCheck', component: () => import('pages/form/InteriorCheck.vue') },
{ path: '/exteriorCheck', component: () => import('pages/form/ExteriorCheck.vue') },
{ path: '/lightingCheck', component: () => import('pages/form/LightingCheck.vue') },
{ path: '/wiper&WsherCheck', component: () => import('pages/form/Wiper&WsherCheck.vue') },
{ path: '/tyreCheck', component: () => import('pages/form/TyreCheck.vue') },
{ path: '/bodyWork', component: () => import('pages/form/BodyWork.vue') },
{ path: '/odoMeter', component: () => import('pages/form/OdoMeter.vue') },
{ path: '/commentsD', component: () => import('pages/form/CommentsD.vue') },

      // Accident checklist
      { path: '/acciReportOver',name:"Accidentchecklist", component: () => import('pages/accident-report/AcciReportOver.vue') },
      { path: '/dtLocation', component: () => import('pages/accident-report/DtLocation.vue') },
      { path: '/collisionDetails', component: () => import('pages/accident-report/CollisionDetails.vue') },


      //insurence report
{ path: '/insuranceDetails', component: () => import('pages/insurence/InsuranceDetails.vue') },
{ path: '/CanvasImage', component: () => import('pages/insurence/CanvasImage.vue') },




//logmiles
{ path: '/logMiles', name:"logMile" ,component: () => import('../pages/LogMiles.vue') },

    ]
  },

  {
    path: '/',
    component: () => import('layouts/SkeletonLayout.vue'),
    children: [
      { path: '/skelOver', component: () => import('components/skeleton/SkelOver.vue') },
      { path: '/skelDrafts', component: () => import('components/skeleton/SkelDrafts.vue') },
      { path: '/SkelAccidentReport', component: () => import('src/components/skeleton/SkelAccompleted.vue') },
      { path: '/SkelAccompleted', component: () => import('src/components/skeleton/SkelAccompleted.vue') },
      { path: '/SkelDashboard', component: () => import('src/components/skeleton/SkelDashboard.vue') },
      { path: '/SkelLogmiles', component: () => import('src/components/skeleton/SkelLogmiles.vue') },
      { path: '/SkelSos', component: () => import('src/components/skeleton/SkelSos.vue') },
      { path: '/SkelSetting', component: () => import('src/components/skeleton/SkelSetting.vue') },
      { path: '/SkelQuestioncard', component: () => import('src/components/skeleton/SkelQuestioncard.vue') },

      // Add other routes for the default layout as needed SkelQuestioncard
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
