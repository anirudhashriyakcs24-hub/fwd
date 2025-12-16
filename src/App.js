import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import CTASection from "./CTASection";
import LearnNew from "./LearnNew";
import ScienceCategories from "./ScienceCategories";

import MathsPage from "./pages/MathsPage";
import PhysicsPage from "./pages/PhysicsPage";
import ChemistryPage from "./pages/ChemistryPage";

function App() {
  return (
    <BrowserRouter>
      {/* ALWAYS visible on all pages */}
      <Header />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <LearnNew />
              <CTASection />
              <ScienceCategories />
            </>
          }
        />

        {/* SUBJECT PAGES */}
        <Route path="/maths" element={<MathsPage />} />
        <Route path="/physics" element={<PhysicsPage />} />
        <Route path="/chemistry" element={<ChemistryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
