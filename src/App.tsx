import Accordion from "./components/accordion/Accordion";
import Page1 from "./pages/page1";
import logo from "./assets/mainLogo.png";
import avatar from "./assets/avatar.png";
function App() {
  // const count = useAppSelector((state) => state.counter.count);
  return (
    <div className="rootContainer">
      <header>
        <div className="headerRootContainer">
          <div>
            <img className="headerIcons" src={logo} alt="لوگوی شرکت" />
            <span>مرکز برسام</span>
          </div>
          <div>
            <h6>سامانه مدیریت عامل رسان</h6>
          </div>
          <div>
            <span>کاربر: عمومی</span>
            <img className="headerIcons" src={avatar} alt="آواتار" />
          </div>
        </div>
      </header>
      <div className="test"></div>
      <div className="test"></div>
      <div className="container">
        <Accordion />
        <Page1 />
      </div>
    </div>
  );
}

export default App;
