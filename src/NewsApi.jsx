import React, { usecity, useState } from 'react';
import "./App.css";
import axios from 'axios';
import { Card } from './Card';
import { Header } from './Header';
import NotFound from './NotFound';
import ApiExpired from './ApiExpired';
import Loader from "./Loader";

const NewsApi = () => {
    const [apiData, setApiData] = useState([]);
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchData = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (city === "") {
            alert("Please enter your city");
            setLoading(false);
        } else {
            await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=4981042d272e49e89035f20e82f017b5&q=${city}`)
                .then((response) => {
                    console.log(response.data.articles);
                    setApiData(response.data.articles);
                    setCity("");
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err, "err");
                    setError(true);
                    setCity("");
                    setLoading(false);
                })
        }
    }

    return (
        <>
            {/* HEADER */}
            <Header />


            {/* HEADING*/}
            <div className="container my-5">
                <h1>SEARCH TOP HEADLINES OF INDIA</h1>
            </div>


            {/* GET DATA FROM USER */}
            <form className="form-inline" onSubmit={fetchData}>
                <div className="form-group mb-2 mx-3">
                    <input type="text"
                        className="form-control"
                        placeholder='Enter City'
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                    />
                </div>
                {
                    loading ? <Loader /> : <button className="btn btn-primary mb-2 searchBtn">SEARCH</button>
                }
            </form>


            {/* SHOW NEWS CARDS */}
            {
                error ? <ApiExpired />
                    : (apiData.length === 0 ? <NotFound /> : <div className="container mb-5">
                        <div className="row">
                            {
                                apiData.map((val, index) => {
                                    return (
                                        <div key={index} className="col-3 mt-5 d-flex flex-wrap">
                                            <Card
                                                image={val.urlToImage}
                                                title={val.title}
                                                desc={val.description}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>)
            }
        </>
    )
}

export default NewsApi;