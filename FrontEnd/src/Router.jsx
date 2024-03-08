import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Pages/user/login/Login";
import Hub from "./Pages/user/hub/Hub";
import Trilha from "./Pages/user/trilha/Trilha.jsx"
import Hubteams from "./Pages/admin/Create_teams/hub_teams.jsx";

import Cadastro from "./Pages/admin/cadastros/cadastro/Cadastro"
import CadastroAdm from "./Pages/admin/cadastros/cadastro-Adm/CadastroAdm.jsx";
import CadMassa from "./Pages/admin/cadastros/cadMassa/CadMassa.jsx";
import MakeTri from "./Pages/admin/makeTri/MakeTri.jsx";
import HubADM from "./Pages/admin/hub-ADM/HubADM.jsx";
import HubCad from "./Pages/admin/hub-CAD/HubCad.jsx";
import TurmaCri from "./Pages/admin/TurmaCri/TurmaCri.jsx";
import App from "./testefire.jsx";


const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Login />} path="/" exact />
				<Route element={<Hub />} path="/hub" />
				<Route element={<Trilha />} path="/trilha" />7

				<Route element={<Cadastro />} path="/cadastro" />
				<Route element={<CadastroAdm />} path="/cadastroadmin" />
				<Route element={<CadMassa />} path="/cadastroemmassa" />
				<Route element={<MakeTri />} path="/criacao" />
				<Route element={<HubADM />} path="/hubadmin" />
				<Route element={<HubCad />} path="/hubcadastros" />
				<Route element={<Hubteams/>} path="/hubteams" />
				<Route element={<TurmaCri/>} path="createTeams"/>
				<Route element={<App/>} path="fireneles"/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
