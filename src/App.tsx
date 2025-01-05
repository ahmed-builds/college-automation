import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLandingPage } from './super_components/appLandingPage';
import { CRMLandingPage } from './modules/crm/crmLandingPage';
import { FinanceLandingPage } from './modules/finance/financeLandingPage';
import { HostelLandingPage } from './modules/hostel/hostelLandingPage';
import { HRMLandingPage } from './modules/hrm/hrmLandingPage';
import { StoresLandingPage } from './modules/stores/storesLandingPage';
import { ProjectLandingPage } from './modules/project/projectLandingPage';
import { LogisticsLandingPage } from './modules/logistics/logisticsLandingPage';
import { LMSLandingPage } from './modules/lms/lmsLandingPage';
import { LibraryLandingPage } from './modules/library/libraryLandingPage';
import { SuperAdminLogin } from './super_components/super_admin/super_admin_login';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLandingPage />}></Route>
        <Route path='/crm' element={<CRMLandingPage/>}></Route>
        <Route path='/finance' element={<FinanceLandingPage/>}></Route>
        <Route path='/hostel' element={<HostelLandingPage/>}></Route>
        <Route path='/hrm' element={<HRMLandingPage/>}></Route>
        <Route path='/library' element={<LibraryLandingPage/>}></Route>
        <Route path='/lms' element={<LMSLandingPage/>}></Route>
        <Route path='/logistics' element={<LogisticsLandingPage/>}></Route>
        <Route path='/project' element={<ProjectLandingPage/>}></Route>
        <Route path='/stores' element={<StoresLandingPage/>}></Route>
        <Route path='/super' element={<SuperAdminLogin/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
