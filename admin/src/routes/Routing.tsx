import React, { Suspense } from "react";
import MainComponent from "../screen/MainComponent";

const Category = React.lazy(() =>
  import("../screen").then((module) => ({ default: module.Category }))
);
const Customers = React.lazy(() =>
  import("../screen").then((module) => ({ default: module.Customers }))
);
const Dashboard = React.lazy(() =>
  import("../screen").then((module) => ({ default: module.Dashboard }))
);
const Inbox = React.lazy(() =>
  import("../screen").then((module) => ({ default: module.Inbox }))
);
const Orders = React.lazy(() =>
  import("../screen").then((module) => ({ default: module.Orders }))
);
const Products = React.lazy(() =>
  import("../screen").then((module) => ({ default: module.Products }))
);
const Reports = React.lazy(() =>
  import("../screen").then((module) => ({ default: module.Reports }))
);

export const routeArray = [
  {
    path: "/",
    element: <MainComponent />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Category />
          </Suspense>
        ),
      },
      { path: "orders", element: 
       <Suspense fallback={<div>Loading...</div>}>
            <Orders />
          </Suspense>
      },
      { path: "products", element: 
       <Suspense fallback={<div>Loading...</div>}>
           <Products />
          </Suspense>
      },
      { path: "category", element: 
       <Suspense fallback={<div>Loading...</div>}>
           <Category />
          </Suspense>
      },
      { path: "inbox", element: 
       <Suspense fallback={<div>Loading...</div>}>
           <Inbox />
          </Suspense>
      },
      { path: "reports", element: 
       <Suspense fallback={<div>Loading...</div>}>
           <Reports />
          </Suspense>
      },
      { path: "customers", element: 
       <Suspense fallback={<div>Loading...</div>}>
           <Customers />
          </Suspense>
      },
    ],
  },
];
