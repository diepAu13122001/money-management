import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { HNav } from "./components/hor_nav";
import { VNav } from "./components/ver_nav";
import { Tracker } from "./pages/tracker";
import { Setting } from "./pages/setting";
import { Account } from "./pages/account";
import { History } from "./pages/history";
import { NotFound } from "./pages/notfound";

function App() {
  return (
    <div className="flex">
      <VNav />
      <main className="h-screen overflow-y-scroll scroll-smooth scroll-m-0 bg-gray-100 container">
        <HNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/history" element={<History />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
