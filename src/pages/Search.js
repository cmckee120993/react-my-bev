// react, state, and axios for API results and request
import React, { useState } from 'react';
import axios from 'axios';

// cards of items for search result
import { Card } from 'semantic-ui-react';

// page styling and images
import '../styles/Search.css';
import sixPack from '../assets/images/bx-six-pack.webp';

// placeholder image until database is updated
import bottle from '../assets/images/bx-beer-bottle.webp';

function Search() {
    const [APIData, setAPIData] = useState([]);

    const searchItem = function () {
        // accessing user input
        const searchParams = document.querySelector('.search-words').value;
        // fetch request
        const options = {
            method: 'POST',
            url:'https://mpowerapi.azurewebsites.net/api/v1/items/search',
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
            data: { search: `${searchParams}` },
        };

        

        axios  
            .request(options)
            .then(function(response) {
                setAPIData(response.data.Results);
                console.log(APIData[0].Name);
            })
            .catch(function(error) {
                console.error(error);
            });
    };

    // allowing search to start by enter key
    const keyDown = function(e) {
        if(e.keyCode === 13) {
            searchItem();
        };
    };

    function imageSelector(img) {
        if(img === "") {
            return (
            <img
                loading='lazy'
                src={bottle}
                alt="Beer Placeholder"
                className="beer-placeholder"
            />
            )
        } else {
            return (
            <img
                loading='lazy'
                src={img}
                alt="Beer Placeholder"
                className="beer-img"
            />
            )
        }
    }

    function productCard(item) {

        let productType = item.Name;
        let nameArray = productType.split(" ");
        let keg = nameArray.pop();
        if (keg.toString() === "KEG") {
            return(
                <>
                <Card className="card">
                    <Card.Content>
                        <Card.Header className="beer-name">
                            {imageSelector(item.Notes)}
                            <h2>{item.Description}</h2>
                        </Card.Header>
                        <Card.Description className="beer-details">
                            <p>Keg Price: ${item.CaseRetail}</p>
                            <p>Stock: {item.QuantityAvailable}</p>
                            <p>{item.Category}</p>
                        </Card.Description>
                    </Card.Content>
                </Card>
                </>
            )
        } else {
            return(
                <>
                <Card className="card">
                    <Card.Content>
                        <Card.Header className="beer-name">
                            {imageSelector(item.Notes)}
                            <h2>{item.Description}</h2>
                        </Card.Header>
                        <Card.Description className="beer-details">
                            <p>Case: ${item.CaseRetail}</p>
                            <p>{item.Size}: ${item.Retail}</p>
                            <p>Stock: {item.QuantityAvailable}</p>
                            <p>{item.Category}</p>
                        </Card.Description>
                    </Card.Content>
                </Card>
                </>
            )
        }
    }

    return (
        <>
            {/* page title */}
            <div className='search-title-div'>
                <h2 className='search-title'>Product Search</h2>
                <img
                    loading='lazy'
                    className='search-header-image'
                    src={sixPack}
                    alt='Beverage Express Six Pack Logo'
                />
            </div>

            {/* search bar for user input */}
            <div className="search-div">
                <input
                type="text"
                className="search-words"
                placeholder="Search for our products here..."
                onKeyDown={keyDown}
                >
                </input>
                <button type="submit" className="button" onClick={searchItem}>
                Search
                </button>
            </div>

            {/* item cards returned after user search */}
            <div className="card-div">
                <Card.Group className="ui-card-div">
                    {APIData.map((item) => {
                        return (
                            <>
                            {productCard(item)}
                            </>
                    //         <Card className="card">
                    //             <Card.Content>
                    //                  <Card.Header className="beer-name">
                    //                     {imageSelector(item.Notes)}
                    //                     <h2>{item.Description}</h2>
                    //                 </Card.Header>
                    //                 <Card.Description className="beer-details">
                    //                     <p>Case: ${item.CaseRetail}</p>
                    //                     <p>{item.Size}: ${item.Retail}</p>
                    //                     <p>Stock: {item.QuantityAvailable}</p>
                    //                     <p>{item.Category}</p>
                    //                 </Card.Description>
                    //             </Card.Content>
                    //         </Card>
                        );
                    })}
                </Card.Group>
            </div>
            <p className='page-description'>Use this search bar to browse the Beverage Express catalogue to see if we have your favorite products in stock. 
                With Carlisle's biggest selection of imported, domestic, and craft brews, this search can help you check to see if
                we have a product in stock or if it's available from our wholesale distributors. Don't forget, you can always &nbsp; 
                <a className='link' href='tel:7172412337' rel='noreferrer' target='_blank'>call us</a> with any questions you may have.</p>
                <a href='/seasonal' className='link'><p className='button to-page'>To see a list of our current slushy flavors, beers on tap, and seasonal beers, please go to our What's On Tap Page.</p></a>
        </>
    )
};

export default Search;