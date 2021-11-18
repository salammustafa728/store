import ScrollToTop from "./ScrollButton";
import "./Section3.css";

const Section3 = () => {
  return (
    <div id="Products">
      <div class="hero" id="#Main1">
        <div class="tint"></div>
     
        <br></br>
        <h1
          class="display-4 font-weight-bold"
          style={{ color: "orange", textAlign: "center", marginTop: "15px" }}
        >
          Learn Cooking Online,
        </h1>
        <p class="font-italic mb-0 p2" style={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqu
        </p>
        <div className="divCotainer">
            <div className="div1">
                <h1 className="h11">1</h1>
                <h3 className="h31">Base Meals</h3>
                <p className='p11'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            </div>
            <div className="div2">
                <h1 className="h12">2</h1>
                <h3 className="h32">Knife Skills</h3>
                <p className='p12'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </p>
            </div>
            <div className="div3">
                <h1 className="h13">3</h1>
                <h3 className="h33">Cooking Chicken</h3>
                <p className='p13'> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  </p>
            </div>
        </div>
        <ScrollToTop/>
      </div>
      <div class="jumbotron bg-cover text-white heroImg">
       
      </div>
    </div>
  );
};

export default Section3;
