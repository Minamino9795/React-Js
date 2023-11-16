import MasterLayout from "../layouts/MasterLayout";
import React from "react";
function Register(props) {
    return (
        <>
            <>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="../assets/img/apple-icon.png"
                />
                <link rel="icon" type="image/png" href="../assets/img/favicon.png" />
                <title>Material Dashboard 2 by Creative Tim</title>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
                />
                <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
                <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
                    rel="stylesheet"
                />
                <link
                    id="pagestyle"
                    href="../assets/css/material-dashboard.css?v=3.1.0"
                    rel="stylesheet"
                />
                <div className="container position-sticky z-index-sticky top-0">
                    <div className="row">
                        <div className="col-12"></div>
                    </div>
                </div>
                <main className="main-content  mt-0">
                    <section>
                        <div className="page-header min-vh-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                                        <div
                                            className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                                            style={{
                                                backgroundImage:
                                                    'url("../assets/img/illustrations/illustration-signup.jpg")',
                                                backgroundSize: "cover"
                                            }}
                                        ></div>
                                    </div>
                                    <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                                        <div className="card card-plain">
                                            <div className="card-header">
                                                <h4 className="font-weight-bolder">Sign Up</h4>
                                                <p className="mb-0">
                                                    Enter your email and password to register
                                                </p>
                                            </div>
                                            <div className="card-body">
                                                <form role="form">
                                                    <div className="input-group input-group-outline mb-3">
                                                        <label className="form-label">Name</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div className="input-group input-group-outline mb-3">
                                                        <label className="form-label">Email</label>
                                                        <input type="email" className="form-control" />
                                                    </div>
                                                    <div className="input-group input-group-outline mb-3">
                                                        <label className="form-label">Password</label>
                                                        <input type="password" className="form-control" />
                                                    </div>
                                                    <div className="form-check form-check-info text-start ps-0">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            id="flexCheckDefault"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="flexCheckDefault"
                                                        >
                                                            I agree the{" "}
                                                            <a
                                                                href="javascript:;"
                                                                className="text-dark font-weight-bolder"
                                                            >
                                                                Terms and Conditions
                                                            </a>
                                                        </label>
                                                    </div>
                                                    <div className="text-center">
                                                        <button
                                                            type="button"
                                                            className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0"
                                                        >
                                                            Sign Up
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                                <p className="mb-2 text-sm mx-auto">
                                                    Already have an account?
                                                    <a
                                                        href="../pages/sign-in.html"
                                                        className="text-primary text-gradient font-weight-bold"
                                                    >
                                                        Sign in
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>

        </>
    )
}
export default Register;