import "./Home.scss";
import React from "react";
import { Route } from "type-route";
import { routes } from "../../router";

export const Home: React.FC<{
    route: Route<typeof routes.home>
}> = ()=> {

    return (
        <div className="Home">

            <div>

                <div>
                    <h1>Funcamp R</h1>
                    <h3>Un jeu et des tutoriels pour apprendre R</h3>
                    <p> 
                        Le Funcamp R s'adresse avant tout à celles et ceux qui, petits et grands 
                        débutants en R, souhaitent inscrire leur apprentissage dans une démarche amusante, 
                        où des phases de jeu et des phases de pratiques en R alternent. Il a été conçu pour 
                        les agents du système statistique public, qui retrouveront dans l'aventure d'icaRius 
                        quelques clins d'oeil à leur environnement professionnel - tous peuvent néanmoins s'essayer 
                        à ce parcours pédagogique, même sans travailler à l'Insee ou dans un service statistique ministériel. 
                    </p>
                </div>


                <iframe title="youtube vieo" width="560" height="315" src="https://www.youtube.com/embed/Quz2CfF0gmo?start=13" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


            </div>


        </div>

    )

};