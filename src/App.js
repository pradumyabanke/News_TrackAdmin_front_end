import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personalinfromation from "./COMPONENTS/Personalinfromation";
import Vendorinformation from "./COMPONENTS/Vendorinformation";
import AdminPage from "./COMPONENTS/Admin-page";
import Maindashboard from "./COMPONENTS/Maindashboard";
import NewsApproval from "./COMPONENTS/News-Approval";
import ViewNews from "./COMPONENTS/ViewNews";
import Addnewsarticle from "./COMPONENTS/Addnewsarticle";
import Epaper from "./COMPONENTS/Epaper";
import NewspaperAgencyLogin from "./COMPONENTS/NewspaperAgencyLogin";
import NewsAgencyAddnewsarticle from "./COMPONENTS/NewsAgencyAddnewsarticle";
import Template from "./COMPONENTS/Template";
import Template2 from "./COMPONENTS/Template2";
import Template3 from "./COMPONENTS/Template3";
import NewsAgencyNewsApproval from "./COMPONENTS/NewsAgencyNewsApproval";
import RoleManagement from "./COMPONENTS/Role-Management";
import EpaperPreview from "./COMPONENTS/EpaperPreview";
import EditDraft from "./COMPONENTS/EditDraft";
import EditArticle from "./COMPONENTS/EditArticle";
import  Categorys from "./COMPONENTS/Categorys";
import Tags from "./COMPONENTS/Tags";
import  Location  from "./COMPONENTS/Location";
import RoleBasedUserList from "./COMPONENTS/RoleBasedUserList";
import VendorRegistrationList from "./COMPONENTS/VendorRegistrationList";
import CreateAd from "./COMPONENTS/CreateAd";
import CatList from "./COMPONENTS/CatList";
import TagList from "./COMPONENTS/TagList";
import TemplateSett from "./COMPONENTS/TemplateSett";
import AddSett from "./COMPONENTS/AddSett";
import CategorySett from "./COMPONENTS/CategorySett"
import UpdateCat from "./COMPONENTS/UpdateCat";
import UpdateTagList from "./COMPONENTS/UpdateTagList";
import UpdateVendorList from "./COMPONENTS/UpdateVendorList";
import UpdateRoleBasedUserList from "./COMPONENTS/UpdateRoleBasedUserList";
import AdvertisementList from "./COMPONENTS/AdvertisementList";
import TemplateSelection from "./COMPONENTS/TemplateSelection";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/dashboard" element={<Maindashboard />} />
        <Route path="/role" element={<Personalinfromation />} />
        <Route path="/vendor" element={<Vendorinformation />} />
        <Route path="/news-approval" element={<NewsApproval />} />
        <Route path="/viewNews" element={<ViewNews />} />
        <Route path="/addNewsArticle" element={<Addnewsarticle />} />
        <Route path="/editDraft" element={<EditDraft />} />
        <Route path="/editArticle" element={<EditArticle />} />
        <Route path="/updateCat" element={<UpdateCat />} />
        <Route path="/epaper" element={<Epaper />} />
        <Route path="/categorys" element={<Categorys />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/location" element={<Location />} />
        <Route path="/vendorregistrationlist" element={<VendorRegistrationList />} />
        <Route path="/rolebaseduserlist" element={<RoleBasedUserList />} />
        <Route path="/categorylist" element={<CatList />} />
        <Route path="/taglist" element={<TagList />} />
        <Route path="/updatetaglist" element={<UpdateTagList />} />
        <Route path="/updatevendorlist" element={<UpdateVendorList />} />
        <Route path="/updaterolebaseduserlist" element={<UpdateRoleBasedUserList />} />
        <Route path="/advertisementlist" element={<AdvertisementList />} />
        <Route path="/Template" element={<Template />} />
        <Route path="/Template2" element={<Template2 />} />
        <Route path="/Template3" element={<Template3 />} />
        <Route path="/RoleManagement" element={<RoleManagement />} />
        <Route path="/EpaperPreview" element={<EpaperPreview />} />
        <Route path="/create-ad" element={<CreateAd />} />
        <Route path="/templatesett" element={<TemplateSett />} />
        <Route path="/advertisement" element={<AddSett />} />
        <Route path="/categorysetting" element={<CategorySett />} />
        <Route path="/Template_selection" element={<TemplateSelection />} />

        <Route
          path="/NewsAgencyNewsApproval"
          element={<NewsAgencyNewsApproval />}
        />

        <Route
          path="/NewspaperAgencyLogin"
          element={<NewspaperAgencyLogin />}
        />
        <Route
          path="/NewsAgencyAddnewsarticle"
          element={<NewsAgencyAddnewsarticle />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
