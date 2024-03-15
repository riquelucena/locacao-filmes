import React from "react";
import './header.css';
import Search from "../search/search";

export default function Header() {
    return (
        <header class="head">
            <h1 class="title">Locação de Filmes</h1>
            <p>Filmes</p>
            <p>Séries</p>
            <Search/>
        </header>
    );
};