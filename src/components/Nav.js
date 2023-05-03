import React, { Component } from "react";
import { Link } from "react-router-dom";
import Products from "../page/Products";
import Login from "./Login";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid w-75">
        <a class="navbar-brand text-white" href="/">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link active text-white"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link text-white" href="../product">
                Product
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/">
                Pricing
              </a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li>
              <a
                class="nav-link text-white"
                href="#"
                data-bs-toggle="modal"
                data-target="#login"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
