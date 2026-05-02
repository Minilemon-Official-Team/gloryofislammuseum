import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import AutoGuide from "./pages/AutoGuide";
import ObjectPage from "./pages/ObjectPage";
import VirtualTour from "./pages/VirtualTour";
import VirtualTourIHM from "./pages/VirtualTourIHM";
import VirtualTourCandiJago from "./pages/VirtualTourCandiJago";
import VirtualTourCandiKidal from "./pages/VirtualTourCandiKidal";
import VirtualTourIHM2023 from "./pages/VirtualTourIHM2023";
import VirtualTourCandiJago2023 from "./pages/VirtualTourCandiJago2023";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Visit from "./pages/Visit";
import MetaMuseum from "./pages/MetaMuseum";
import Testimoni from "./pages/Testimoni";
import Education from "./pages/Education";
import EducationGeneralFamily from "./pages/EducationGeneralFamily";
import EducationInstitution from "./pages/EducationInstitution";
import EducationalSeries from "./pages/EducationalSeries";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "auto-guide", Component: AutoGuide },
      {
        path: "autoguide",
        loader: () => redirect("/auto-guide")
      },
      { path: "object/:id", Component: ObjectPage },
      { path: "virtual-tour", Component: VirtualTour },
      { path: "virtual-tour-ihm", Component: VirtualTourIHM },
      { path: "virtual-tour-candi-jago", Component: VirtualTourCandiJago },
      { path: "virtual-tour-candi-kidal", Component: VirtualTourCandiKidal },
      { path: "virtual-tour-ihm-2023", Component: VirtualTourIHM2023 },
      { path: "virtual-tour-candi-jago-2023", Component: VirtualTourCandiJago2023 },
      { path: "news", Component: News },
      { path: "gallery", Component: Gallery },
      { path: "visit", Component: Visit },
      { path: "meta-museum", Component: MetaMuseum },
      { path: "testimoni", Component: Testimoni },
      { path: "education", Component: Education },
      { path: "education/general-family", Component: EducationGeneralFamily },
      { path: "education/educational-institution", Component: EducationInstitution },
      { path: "education/educational-series", Component: EducationalSeries },
      { path: "*", Component: NotFound },
    ],
  },
]);
