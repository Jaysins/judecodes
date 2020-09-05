import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from "../../context";

function Portfolio() {}

export default Portfolio;

interface IPortfolioItem {
    category: string,
    title: string,
    image: string,
    link: string
}

interface IBehanceProjectItem {
    id: any,
    covers: any,
    name: string,
    url: string
}

const PortfolioItem = (item: IPortfolioItem) => (
    <a className="portfolio-item" key={item.title} href={item.link} target='_blank'>
        <div className="img-wrap">
            <img src={item.image} alt="" />
        </div>
        <div className="title">{item.title}</div>
        <div className="subtitle">{item.category}</div>
    </a>
);

const BehanceProjectItem = (item: IBehanceProjectItem) => {
    return (
        <a className='portfolio-item' key={item.id} href={item.url} target='_blank'>
            <div className="img-wrap">
                <img src={item.covers[230]} alt="Item" />
            </div>
            <div className="title">{item.name}</div>
            <div className="subtitle">Graphic</div>
        </a>
    );
};