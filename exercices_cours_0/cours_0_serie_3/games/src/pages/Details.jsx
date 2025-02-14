import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
const Details = () => {
    const params = useParams();
    const [game, setGame] = useState(null);
    useEffect(() => {
        const apiKey = '554dcd406e9942af81436f1e34922610';
        const url = `https://api.rawg.io/api/games/${params.slug}?key=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setGame(data))
            .catch(() => { alert('Une erreur est survenue') });
    }, [params.slug]);
    return (
        <>
            {game ? (
                <div>
                    <h1 className="text-xl font-bold">{game.name}</h1>
                    <p dangerouslySetInnerHTML={{ __html: game.description }}></p>
                    <img src={game.background_image} alt="" className="w-200 m-auto mt-20 pr-2"/>
                </div>
            ) : (
                <p>Chargement...</p>
            )}
        </>
    );
}
export default Details;