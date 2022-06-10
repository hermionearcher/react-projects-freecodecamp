import { useState, useEffect } from 'react';
// const { id, name, dob, image } = person;

const useNewAge = (dob) => {
  const [age, setAge] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(dob, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data');
        }
        return res.json();
      })
      .then((age) => {
        setAge(age);
      });

    return () => abortCont.abort();
  }, [dob]);

  return { age };
};
//     let birthDate = new Date(dob);
//     let currentDate = new Date();
//     let age = currentDate.getFullYear() - birthDate.getFullYear();
//     let m = currentDate.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     return {age};
// })
// };

export default useNewAge;
