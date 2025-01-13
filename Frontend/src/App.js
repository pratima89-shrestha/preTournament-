import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTournament from "./CreateTournament";
import BracketPage from "./BracketPage";
import QuestionAnswerRound from "./QuestionAnswerRound";
import JoinTournament from "./JoinTournament";
import EditTournament from "./EditTournament";
import LastTournament from "./LastTournament";
import Edit from "./Edit22";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<CreateTournament />} />
        <Route path="/brackets" element={<BracketPage />} />
        <Route path="/QA" element={<QuestionAnswerRound />} />
        <Route path="/lastTour" element={<LastTournament />} />
        <Route path="/joinTour" element={<JoinTournament/>} />
        <Route path="/edit-tournament/:id" element={<EditTournament/>} />
        <Route path="/view/:tournamentId" element={<Edit/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
