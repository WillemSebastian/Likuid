/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, FormGroup, Input } from "reactstrap";
// core components
import { useDispatch, useSelector } from "react-redux";
import { searchUniversity } from "../../redux/actions/university";

function IndexHeader() {
  const dispatch = useDispatch();
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(https://www.lancaster.ac.uk/media/lancaster-university/content-assets/images/alumni/new-alumni-website/LUJMedical02.jpg)"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
            <h1 className="h1-seo">Find Your Dream University.</h1>
            <FormGroup>
              <Input
                style={{ backgroundColor: "white" }}
                type="text"
                name="text"
                id="exampleSearch"
                onChange={event =>
                  dispatch(searchUniversity(event.target.value))
                }
                placeholder="Search University, ex: middle"
              />
            </FormGroup>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
