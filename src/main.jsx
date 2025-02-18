import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"

import { createBrowserRouter, RouterProvider } from "react-router"
import FoodItems from "./Components/Pages/FoodItems.jsx"
import Error from "./Components/OtherComponents/Error.jsx"
import AboutPage from "./Components/Pages/AboutPage.jsx"
import CartPage from "./Components/Pages/CartPage.jsx"
import { Provider } from "react-redux"
import { Store } from "./store/store.js"
import SearchPage from "./Components/Pages/SearchPage.jsx"
import RestaurantMenu from "./Components/Pages/RestaurantMenu.jsx"
import Body from "./Components/Pages/Body.jsx"

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <Provider store={Store}>
        <App />
      </Provider>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/fooditem/:collection_id",
        element: <FoodItems />,
      },
      {
        path: "/:restaurant",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
