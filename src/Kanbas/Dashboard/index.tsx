export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
          <img src="/images/5001.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5001/Home">
              CS5001
            </a>
            <p className="wd-dashboard-course-title">
              Intencive Fundation of Computer Science
            </p>
            <a href="#/Kanbas/Courses/5001/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/5002.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5002/Home">
              CS5002
            </a>
            <p className="wd-dashboard-course-title">
              Discrete Structure
            </p>
            <a href="#/Kanbas/Courses/5002/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/5004.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5004/Home">
              CS5004
            </a>
            <p className="wd-dashboard-course-title">
              Object-Oriented Design
            </p>
            <a href="#/Kanbas/Courses/5004/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/5008.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5008/Home">
              CS5008
            </a>
            <p className="wd-dashboard-course-title">
              Data Structure and Algorithms
            </p>
            <a href="#/Kanbas/Courses/5008/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/5520.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5520/Home">
              CS5520
            </a>
            <p className="wd-dashboard-course-title">
              Mobile Application Development
            </p>
            <a href="#/Kanbas/Courses/5520/Home"> Go </a>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/5330.jpg" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5002/Home">
              CS5330
            </a>
            <p className="wd-dashboard-course-title">
              Pattern Recogonition and Computer Vision
            </p>
            <a href="#/Kanbas/Courses/5330/Home"> Go </a>
          </div>
        </div>
        </div>
      </div>
  );}
