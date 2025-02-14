import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';
import AuthGuard from 'store/AuthGuard';
import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (

  

  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    exact: 'true',
    path: '/auth/signin',
    element: lazy(() => import('./views/auth/SignIn'))
  },
  {
    exact: 'true',
    path: '/auth/otp-verify',
    element: lazy(() => import('./views/auth/otpverify'))
  },
  {
    exact: 'true',
    path: '/auth/forgotpassword',
    element: lazy(() => import('./views/auth/Forgotpassword'))
  },
  {
    exact: 'true',
    path: '/auth/resetpassword/:token?',
    element: lazy(() => import('./views/auth/Resetpassword'))
  },
  {
    exact: 'true',
    path: 'logout',
    element: lazy(() => import('./views/auth/Logout'))
  },
  {
    exact: 'true',
    path: '/dev-forms/details-form',
    element: lazy(() => import('./views/dev-forms/DevForm'))
  },
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      // Company list
      {
        path: '*',
        exact: 'true',
        element: () => <Navigate to={BASE_URL} />
      },

      {
        exact: 'true',
        path: '/company/create-new-project',
        guard: AuthGuard, // Protect this route
        element: lazy(() => import('./views/company/CreateNewProject'))
      },
      {
        exact: "true",
        path: "/module/add-module",
        element: lazy(() => import("./views/module/AddModule")),
      },
      {
        exact: "true",
        path: "/module/module-list",
        element: lazy(() => import("./views/module/ModuleList")),
      },
      {
        exact: "true",
        path: "/module/edit-module/:id?",
        element: lazy(() => import("./views/module/AddModule")),
      },
      {
        exact: "true",
        path: "/module-preview/add-module-preview/:id?",
        element: lazy(() => import("./views/module-preview/AddModulePreview")),
      },
      {
        exact: "true",
        path: "/module-preview/list-module-preview",
        element: lazy(() => import("./views/module-preview/ListModulePreview")),
      },
      {
        exact: "true",
        path: "/product/product-features",
        element: lazy(() => import("./views/product/product-features")),
      },
      {
        exact: "true",
        path: "/custom/list",
        element: lazy(() => import("./views/custom/list")),
      },
      {
        exact: "true",
        path: "/custom/theme",
        element: lazy(() => import("./views/custom/theme")),
      },
      {
        exact: "true",
        path: "/custom/editor",
        element: lazy(() => import("./views/custom/editor")),
      },
    ]
  }
];

export default routes;
