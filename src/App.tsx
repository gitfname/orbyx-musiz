
import { Routes, Route } from "react-router-dom"
import ApplicationLayout from "./layouts/ApplicationLayout";
import { HomePage } from "./pages/Home";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { BaseLayout } from "./layouts";


function App() {

  const [_, i18n] = useTranslation()

  useEffect(
    () => {
      if (i18n.dir(i18n.language) === "rtl") {
        document.body.setAttribute("dir", "rtl")
      }
      else {
        document.body.setAttribute("dir", "ltr")
      }
    },
    [i18n.language]
  )

  return (
    <div className="w-screen h-screen overflow-hidden">

      <BaseLayout>

        <ApplicationLayout>

          <Routes>

            <Route
              path="/"
              element={
                <HomePage />
              }
            />

            <Route
              path="about"
              element={<div>About page</div>}
            />

          </Routes>

        </ApplicationLayout>
      </BaseLayout>
    </div>
  )
}

export default App