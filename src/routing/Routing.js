import{ BrowserRouter,Routes,Route} from "react-router";
import About from"../pages/about/About";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import Portfolio from "../pages/portfolio/Portfolio";
import Resume from "../pages/resume/Resume";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

function Routing(){

  
return(
  <div>
    <BrowserRouter>
    <main>
    <Sidebar/>
    <div class="main-content">
      <Navbar/>
       <Routes> 
      <Route path="/" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="*" element={<h1> File can't found </h1>}/>
     </Routes>
      </div>
    </main>
    
    </BrowserRouter>
 </div>
 )
}
export default Routing;