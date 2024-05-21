export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses"  className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
                <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
                <div className="card">
                    <img src="/images/reactjs.jpg" />
                    <div className="card-body">
                      <a className="wd-dashboard-course-link"
                      href="#/Kanbas/Courses/1234/Home"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title card-text">
                Full Stack software developer Summer 1 2024 
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
                </div>
            </div>
        </div>
        <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
                <div className="card">
          <img src="/images/5001.jpg" />
          <div className="card-body">
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5001/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
              CS5001 
            </a>
            <p className="wd-dashboard-course-title card-text">
              Intencive Fundation of CS Summer 1 2024 
            </p>
            <a href="#/Kanbas/Courses/5001/Home" className="btn btn-primary"> Go </a>
          </div>
          </div>
        </div>
        <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
                <div className="card">
          <img src="/images/5002.jpg" />
          <div className="card-body">
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5002/Home"
              style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
              CS5002
            </a>
            <p className="wd-dashboard-course-title card-text">
              Discrete Structure Summer 1 2024 
            </p>
            <a href="#/Kanbas/Courses/5002/Home" className="btn btn-primary"> Go </a>
          </div>
          </div>
        </div>
        <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
                <div className="card">
          <img src="/images/5004.jpg" />
          <div className="card-body">
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5004/Home"
              style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
              CS5004
            </a>
            <p className="wd-dashboard-course-title card-text">
              Object-Oriented Design Summer 1 2024 
            </p>
            <a href="#/Kanbas/Courses/5004/Home" className="btn btn-primary"> Go </a>
          </div>
          </div>
        </div>
        <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
                <div className="card">
          <img src="/images/5008.jpg" />
          <div className="card-body">
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5008/Home"
              style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
              CS5008
            </a>
            <p className="wd-dashboard-course-title card-text">
              Data Structure & Algorithms Summer 1 2024 
            </p>
            <a href="#/Kanbas/Courses/5008/Home" className="btn btn-primary"> Go </a>
          </div>
          </div>
        </div>
        <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
                <div className="card">
          <img src="/images/5520.jpg" />
          <div className="card-body">
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5520/Home"
              style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
              CS5520
            </a>
            <p className="wd-dashboard-course-title card-text">
              Mobile Application Development Summer 1 2024 
            </p>
            <a href="#/Kanbas/Courses/5520/Home" className="btn btn-primary"> Go </a>
          </div>
          </div>
        </div>
        <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
                <div className="card">
          <img src="/images/5330.jpg" />
          <div className="card-body">
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5002/Home"
              style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
              CS5330
            </a>
            <p className="wd-dashboard-course-title card-text">
              Pattern Recognition and Computer Vision Summer 1 2024 
            </p>
            <a href="#/Kanbas/Courses/5330/Home" className="btn btn-primary"> Go </a>
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
  );}
