import { FaWheelchair } from "react-icons/fa";
export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
            <a className="text-decoration-none font-weight-bold h2 text-white me-4" href="/">
                <FaWheelchair/> FHIR
            </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/appointments">All Appointments</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="patients">Patients</a>
                        </li>
                    </ul>
                    <div className="text-secondary fw-bold small">
                        Kenniskiu Fortino Kurniawan
                    </div>
                </div>
            </div>
        </nav>
  )
}
  