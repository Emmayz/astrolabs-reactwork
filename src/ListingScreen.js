import { Fragment, useEffect, useState } from 'react';

function ListingScreen() {

    // https://jsonplaceholder.typicode.com/todos/
    // https://jsonplaceholder.typicode.com/posts/1/comments


    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [nextPost, setNextPost] = useState(1);

    useEffect(
        function() {

            setLoading(true);

            // Make a GET request
            fetch(`https://jsonplaceholder.typicode.com/posts/${nextPost}/comments`)
            // Convert String to JSON
            .then(
                function(backendResponse) {
                    // .json() converts String to JSON
                    return backendResponse.json()
                }
            )
            // Put JSON into items state
            .then(
                function(json) {
                    const moreItems = [...items, ...json]
                    setItems(moreItems);
                    setLoading(false);
                }
            )
            // If something wrong handle here
            .catch(
                function() {
                    alert("Something went wrong. Please try again.")
                }
            )
        },
        [ nextPost ]
    )

    function createItem(obj) {
        return <li>{obj.body.slice(0,100)}</li>
    }

    function onLoadMore() {
        setNextPost(nextPost + 1);
    }

    return (
        <Fragment>
            <div className="container" style={{minHeight: 'calc(100vh - 560px)'}}>
                <h1 className="my-5">Listing</h1>

                <ul>
                    { items.map(createItem) }
                </ul>

                { loading === true && <div className="loader"></div>  }

                <button onClick={onLoadMore} className="btn btn-primary">Load More</button>
            </div>
        </Fragment>
    )
}

export default ListingScreen;