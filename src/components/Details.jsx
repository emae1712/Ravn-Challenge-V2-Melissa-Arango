import React from "react";

const Details = ({ character }) => {
  return (
    <>
      {character ? (
        <div key={character.id} className="col-12 col-lg-9">
          <h4>General Information</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Eye color
              <span className="float-end top-50 end-0">
                {character.eyeColor}
              </span>
            </li>
            <li class="list-group-item">
              Hair color
              <span className="float-end top-50 end-0">
                {character.hairColor}
              </span>
            </li>
            <li class="list-group-item">
              Skin color
              <span className="float-end top-50 end-0">
                {character.skinColor}
              </span>
            </li>
            <li class="list-group-item">
              Birth Year
              <span className="float-end top-50 end-0">
                {character.birthYear}
              </span>
            </li>
          </ul>
          <h4>Vehicles</h4>
          <ul class="list-group list-group-flush">
            {character.vehicleConnection.vehicles.map((vehicle) => (
              <li class="list-group-item"> {vehicle.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Details;
