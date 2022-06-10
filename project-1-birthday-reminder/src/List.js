import React from 'react';
import { useState } from 'react';
import useNewAge from './useNewAge';

const List = ({ people }) => {
  // const { id, name, dob, image } = person;

  // const [age, setAge] = useState();
  // const getAge = (dob) => {
  //   let birthDate = new Date(dob);
  //   let currentDate = new Date();
  //   let age = new Date(currentDate.getFullYear() - birthDate.getFullYear());
  //   console.log(birthDate);
  //   let m = currentDate.getMonth() - birthDate.getMonth();
  //   if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
  //     age--;
  //     setAge(age);
  //   }
  //   return setAge(age);
  // };

  // // console.log(new Date(dob));
  // // console.log(new Date());

  const { age } = useNewAge()
  return (
    <>
      {people.map((person) => {
        const { id, name, dob, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} />
            <div>
              <h4>{name}</h4>
              <p>{dob} years old</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
