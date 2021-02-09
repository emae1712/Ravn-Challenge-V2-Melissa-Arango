import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_INFO_SW } from "./DataStartWars";
import Details from "./Details";
import { VscLoading } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";

const Characters = () => {
  //Select each card and save its data
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  // Get 3 parameters from graphql
  const { loading, error, data } = useQuery(GET_INFO_SW);

  if (loading)
    return (
      <h1>
        <VscLoading /> Loading...
      </h1>
    );
  if (error) return <p>Fail to Load Data</p>;

  return (
    <main className="row">
      <div className="col-12 col-lg-3">
        {data.allPeople.people.map((character) => (
          <div
            className="card"
            key={character.id}
            onClick={() => setSelectedCharacter(character)}
          >
            <IoIosArrowForward className="position-absolute top-50 end-0" />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <p className="card-text">
                {character.species !== null
                  ? character.species.name + " from " + character.homeworld.name
                  : "Human" + " from " + character.homeworld.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Details character={selectedCharacter} />
    </main>
  );
};

export default Characters;
