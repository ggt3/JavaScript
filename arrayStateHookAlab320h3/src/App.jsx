import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Learner from "./Learner.jsx";

const data = [
  {
    name: "Cait Yomorta",
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum",
    scores: [
      {
        date: "2018-02-08",
        score: 77,
      },
      {
        date: "2018-04-22",
        score: 92,
      },
      {
        date: "2018-09-15",
        score: 68,
      },
    ],
  },
  {
    name: "Holly Baird",
    bio: "Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.",
    scores: [
      {
        date: "2018-12-14",
        score: 88,
      },
      {
        date: "2019-01-09",
        score: 79,
      },
      {
        date: "2019-02-23",
        score: 91,
      },
      {
        date: "2019-03-01",
        score: 95,
      },
    ],
  },
  {
    name: "Wes Mungia",
    bio: "Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?",
    scores: [
      {
        date: "2018-10-11",
        score: 62,
      },
      {
        date: "2018-11-24",
        score: 74,
      },
      {
        date: "2018-12-19",
        score: 85,
      },
    ],
  },
];
function App() {
  const [learnerData, setLearnerData] = useState(data);

  // const [learnerName, setName] = useState('');
  // const [learnerBio, setBio] = useState('');
  const [formData, setFormData] = useState( {name: '', bio: '', scores: []})
  /*
Code the <App> component to display a <Learner> component for each learner object in the learners array being held in state.
*/
  // function handleChange(e) {
  // setLearnerData( (learnerData) => [...learnerData]
  // })

//   const handleSubmit= (e) => {
//     e.preventDefault(); //no refresh
//     console.log(learnerData)
//     const newLearner = {...formData};
//     setLearnerData({
//       learner:[newLearner,...learnerData]
//     })
//   }
// const handleChange = (e)=> {
// setFormData({
//   ...formData,
//   [e.target.name]:e.target.value
// })
//}
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Manipulating Arrays with useState</h1>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter Your Name" name = 'name' value = {formData.name} onChange={handleChange} // Step 3: Update state on input change
 />
        <br />

        <label htmlFor="bio">Bio:</label>
        <input type="text" placeholder="Enter Your Bio" name = "bio" value = {formData.bio} onChange={handleChange}/><br/>
        <input type="submit" value="Submit" />
      </form> */}
      {learnerData.map((learner, index) => (
        <>
          {/* <Learner 
        key = {index}
        name = {learner.name}
        bio = {learner.bio}
        scores = {learner.scores} /> */}
          <Learner key={index} {...learner} />
        </>
      ))}

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}

      {/* </div> */}
    </>
  );
}

export default App;
