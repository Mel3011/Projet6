import React from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../Components/Logement/Slideshow";
import Collapse from "../Components/Collapse/Collapse";
import data from "../annonces.json";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Logement = () => {
  const { id } = useParams(); // Récupérez l'ID de l'annonce à partir de l'URL
  console.log("ID extrait des paramètres d'URL :", id);

  // Recherchez l'annonce correspondant à l'ID dans les données JSON
  const annonce = data.find((item) => {
    console.log("ID de l'élément en cours de vérification :", item.id);
    return item.id === id;
  });

  console.log("note :", annonce.rating);

  if (!annonce) {
    return <Navigate to="/Erreur" />;
  }

  const stars = [];
  const totalStars = 5;
  const fullStars = annonce.rating;

  for (let i = 1; i <= totalStars; i++) {
    const starClass = i <= fullStars ? "active" : "";

    stars.push(
      <span key={i} className={`star ${starClass}`}>
        <FontAwesomeIcon icon={faStar} />
      </span>
    );
  }

  return (
    <main>
      <div className="logement">
        <Slideshow images={annonce.pictures} />
        <div className="informations">
          <div className="left-side">
            <h1>{annonce.title}</h1>
            <p>{annonce.location}</p>
            <div className="tags">
              {annonce.tags.map((tag) => (
                <p key={tag}>{`${tag}`}</p>
              ))}
            </div>
          </div>
          <div className="right-side">
            <div className="profil">
              <div className="name">
                <p>{annonce.host.name}</p>
              </div>
              <div className="photo">
                <img src={annonce.host.picture} alt="profilephoto" />
              </div>
            </div>
            <div className="rating">{stars}</div>
          </div>
        </div>
        <div className="logement-collapse">
          <Collapse
            buttonLabel="Description"
            content={<p>{annonce.description}</p>}
          />
          <Collapse
            buttonLabel="Equipements"
            content={
              <p>
                {" "}
                {annonce.equipments.map((equipment) => (
                  <li key={equipment}>{equipment}</li>
                ))}
              </p>
            }
          />
        </div>
      </div>
    </main>
  );
};

export default Logement;
