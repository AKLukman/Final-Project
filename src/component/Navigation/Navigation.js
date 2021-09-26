import React from 'react';
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <header>
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <a class="navbar-brand nav-item-color" href="/home">Web Developement Agency</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link active fw-bold nav-item-color" aria-current="page" href="/buyer">Become a
                                        Buyer</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link fw-bold nav-item-color" href="/seller">Become a Seller</a>
                                </li>
                                <li class="nav-item">
                                    <button type="button" class="btn btn1">LogIn</button>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <h1 class="header-title">
                    <span>Search and hire talented</span>
                    <br />
                    <span>independent professionals
                    </span>

                </h1>
                <h2 class='second-h2'>
                    With our member-driven community of trusted freelancers, and all-in-one freelance business management
                    system.
                </h2>
                <form>
                    <div class="container">
                        <div class="row row1">
                            <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                                <div class="input-group input-group-lg">
                                    <label>
                                        <input class="form-control" type="text" name="name"
                                            placeholder="Who do you need to hire?" />
                                    </label>
                                    <span class="input-group-btn">
                                        <button class="btn btn-primary hidden-xs">
                                            Get started
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </header>

        </div>
    );
};

export default Navigation;