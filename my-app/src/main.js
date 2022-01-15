import Navigo from "navigo";
import Header from "./components/client/header";
import Footer from "./components/client/footer";
import Home from "./pages/client/home";
import Signin from "./pages/client/signin";
import Signup from "./pages/client/signup";
import Dashboard from "./components/admin/dashboard";
import News from "./pages/admin/news";
import editNews from "./pages/admin/editNews";
import HomeDashboard from "./pages/admin/home";
import addNews from "./pages/admin/addNews";

function print(content) {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("content").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
}

function printDashboard(content, contentD = []) {
    document.getElementById("content").innerHTML = content;
    document.querySelector(".content").innerHTML = contentD;
}

const router = new Navigo("/", { linksSelector: "a" });
router.on({
    // Nếu user truy cập vào đường dẫn / thì sẽ làm việc gì đó
    "/": () => {
        print(Home.render());
    },
    "/signup": () => print(Signup.render()),
    "/signin": () => print(Signin.render()),
    "/dashboard": () => printDashboard(Dashboard.render(), HomeDashboard.render()),
    "/news": () => printDashboard(Dashboard.render(), News.render()),
    "/news/add": () => printDashboard(Dashboard.render(), addNews.render()),
    "/news/:id/edit": ({ data }) => {
        const { id } = data;
        printDashboard(Dashboard.render(), editNews.render(+id));
    },
});
router.notFound(() => print("not found page"));

router.resolve();
