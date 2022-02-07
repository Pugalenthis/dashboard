
// import './App.css';
// import { useState } from 'react';

// function App() {
//   return (
//     <div classNameName="App">
//         <Setcolor />
//     </div>
//   );
// }

// function Setcolor(){
//   const[color,setcolor]=useState("");
//      const styles={
//         background : color
//      }
//      const intial_colorlist =["red","green","blue","yellow","pink"]
//     const [colorlist,setcolorlist] =useState(intial_colorlist);

//    return (
//        <div>
//          <input style={styles} onChange={(res)=>{
//            setcolor(res.target.value)
//             } } placeholder='Enter color name'></input>
//          <button  onClick={()=>{
//            setcolorlist([...colorlist,color])
//              }}>set colour</button>
//            {colorlist.map((color)=><Colorbox color={color}/>)}
//        </div>
//    )
// }

// function Colorbox({color}){
//     const styles ={
//        height : "25px",
//        width : "200px",
//        backgroundColor : color,
//        marginTop : "10px"
//   }
//    return (
//       <div style={styles}></div>
//    )
// }

// export default App;


// import './App.css';
// import { useState } from 'react';

// function App() {
//   const list = [
//     {
//       profile: "https://www.quirkybyte.com/wp-content/uploads/2021/11/Jai_bhim_2_vkgnOcidibacj.jpeg",
//       name: "1. Jai Bhim(2021)",
//       rating: "9.3",
//       description: "When a tribal man is arrested for a case of alleged theft, his wife turns to a lawer to help bring justice",
//     },
//     {
//       profile: "https://rukminim1.flixcart.com/image/416/416/poster/h/m/z/posterskart-the-shawshank-redemption-poster-pksr01-medium-original-imaebcuhbuhfhryb.jpeg?q=70",
//       name: "2. The Shawshank Redemption",
//       rating: "9.3",
//       description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency"
      
//     },
//     {
//       profile: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//       name: "3. The Godfather(1972)",
//       rating: "9.2",
//       description: "The aging patriarch of an organized crime dynasty in postwar Newyork city transfers control of his clandestine empire to his reluctant youngest son.",
//     },
//     {
//       profile: "https://qph.fs.quoracdn.net/main-qimg-9e897497b05d7d1dd49bca31587ad034-pjlq",
//       name: "4. The Dark Knight(2008)",
//       rating: "9.0",
//       description: "When the menace known as the joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of his ability to fight injustice.",
//     },
//     {
//       profile: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//       name: "5. The Godfather part 2(1974)",
//       rating: "9.0",
//       description: "The early life of Vito coreleone in 1920s newyork city is portrayed,While his son,Michael expands his grip on the family.",
//     },
//   ] 

//   setMovies([...movies, newMovie]);

//   const [movie_name, setmovie_name] = useState("")
//   const [image_link, setimage_link] = useState("")
//   const [rating, setrating] = useState("")
//   const [summary, setsummary] = useState("")
//   return (
//     <div className="App">
//       <div className='container'>
//         <h2>Add your favourite movies</h2>

//         <input onChange={(user_input) => {
//           setmovie_name(user_input.target.value)
//           console.log(user_input.target.value)
//         }} placeholder='Enter your movie name ' className="form-control" ></input>

//         <input onChange={(user_input) => {
//           setimage_link(user_input.target.value)
//           console.log(user_input.target.value)
//         }} placeholder='Enter your movie image ' className="form-control" ></input>

//         <input onChange={(user_input) =>{ setrating(user_input.target.value)
//          console.log(user_input.target.value)
//         }} placeholder='Enter your movie rating ' className="form-control" ></input>

//       <input onChange={(user_input) => {
//         setsummary(user_input.target.value)
//         console.log(user_input.target.value)
//       }} placeholder='Enter your movie description ' className="form-control" ></input>
//       <button type="button" onClick={()=>{
//         setmovie_name([...movie_name,setmovie_name])
//         setimage_link([...image_link,setimage_link])
//         setrating([...rating,setrating])
//         setsummary([...summary,setsummary])
//       }
            
//       } className="btn btn-primary">Add movie</button>
      
      

// onClick={()=>{
//            setcolorlist([...colorlist,color])
//              }}>set colour</button>
//            {colorlist.map((color)=><Colorbox color={color}/>)}



           
//   const [movie_name, setmovie_name] = useState("")
//   const [image_link, setimage_link] = useState("")
//   const [rating, setrating] = useState("")
//   const [summary, setsummary] = useState("")
//     </div>

//     </div>
//   )
// }

// function Movies({ movie_name, image_link, rating, summary }) {
  

//   return (
//     <div>
//       <div className="card">
//         <img src="..." className="card-img-top" alt="...">{image_link}</img>
//         <div className="card-body">
//           <h5 className="card-title">{movie_name}</h5>
//           <p className="card-text">{rating}</p>
//           <p className="card-text">{summary}</p>
//         </div>
//       </div>
//     </div>
//   )

// }

// export default App;


// import './App.css';
// import { useState } from "react";


// export default function App() {
//   const list = [
//     {
//       profile: "https://www.quirkybyte.com/wp-content/uploads/2021/11/Jai_bhim_2_vkgnOcidibacj.jpeg",
//       name: "1. Jai Bhim(2021)",
//       rating: "9.3",
//       description: "When a tribal man is arrested for a case of alleged theft, his wife turns to a lawer to help bring justice",
//       director: "T J Gnanavel",
//       stars: "Suriya,Lijo Mol Jose,Manikandan,Rajsha vijayan"
//     },
//     {
//       profile: "https://rukminim1.flixcart.com/image/416/416/poster/h/m/z/posterskart-the-shawshank-redemption-poster-pksr01-medium-original-imaebcuhbuhfhryb.jpeg?q=70",
//       name: "2. The Shawshank Redemption",
//       rating: "9.3",
//       description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency",
//       director: "Frank Darabont",
//       stars: "Tim Robbins,Morgan Freeman,Bob Gunton,William sadler"


//     },
//     {
//       profile: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//       name: "3. The Godfather(1972)",
//       rating: "9.2",
//       description: "The aging patriarch of an organized crime dynasty in postwar Newyork city transfers control of his clandestine empire to his reluctant youngest son.",
//       director: "Fransis Ford Coppola",
//       stars: "Marlon Bardo,AI Pacino,James Caan,Diane Keaton"
//     },
//     {
//       profile: "https://qph.fs.quoracdn.net/main-qimg-9e897497b05d7d1dd49bca31587ad034-pjlq",
//       name: "4. The Dark Knight(2008)",
//       rating: "9.0",
//       description: "When the menace known as the joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of his ability to fight injustice.",
//       director: "Christopher Nolan",
//       stars: "Christian Bale,Heath Ledger,Aaron Echart,Michael Caine"
//     },
//     {
//       profile: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//       name: "5. The Godfather part 2(1974)",
//       rating: "9.0",
//       description: "The early life of Vito coreleone in 1920s newyork city is portrayed,While his son,Michael expands his grip on the family.",
//       director: "Francis Ford Coppola",
//       stars: "AL Pacino,Robert De Niro,Robert Duvall,Diane Keaton"
//     },
//   ]
//   const [movies, setMovies] = useState(list);

//   const [movieName, setMovieName] = useState("");
//   const [moviePoster, setMoviePoster] = useState("");
//   const [movieRating, setMovieRating] = useState("");
//   const [movieDes, setMovieDes] = useState("");
//   const [moviestars, setMovieStars] = useState("");
//   const [moviedirector, setMovieDirector] = useState("");

//   const addMovie = () => {

//     const newMovie = {
//       name: movieName,
//       profile: moviePoster,
//       rating: movieRating,
//       description: movieDes,
//       stars: moviestars,
//       director: moviedirector
//     };


//     setMovies([...movies, newMovie]);

//   }
//   return (
//     <div className="App">

//       <nav className="navbar navbar-dark bg-dark">
//         <img src='https://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/imdb.png' alt='logo'></img>
//         <span className='navbar-brand'>IMDb</span>
//         <form className="form-inline">
//           <input className="form-control mr-sm-2" type="Text" placeholder="Search" aria-label="Search" />
//           <button className="btn btn-outline-info">Search   </button>
//         </form>
//       </nav>

//       <div className="content">
//         <h4 className="text-dark font-italic "> HELLO!</h4>
//         <p className="lead" >Here are IMDb "Top 5" Movies(Sorted by IMDb Rating Descending)...</p>
//       </div>


//       <div className="row">

//         {movies.map((nm) => (


//           <Movie name={nm.name} profile={nm.profile} rating={nm.rating} description={nm.description} director={nm.director} stars={nm.stars} />
//         ))}
//       </div>
//       <hr></hr>

//       <div className="content">
//         <h4 className="text-dark font-italic "> HELLO!</h4>
//         <p className="lead1" > If you want to add 6th rating movie to the list above, just visit our official website (https://www.imdb.com/search/title/?groups=top_250&sort=user_rating). And enter the required details in the below input...<i>ThanK YoU ❣</i></p>
//       </div>




//       <div className="movie_form">
//         <input

//           type="text"
//           onChange={(event) => setMoviePoster(event.target.value)}
//           placeholder="Movie Poster(url)" />
//         <input

//           type="text"
//           placeholder="Movie Name"
//           onChange={(event) => setMovieName(event.target.value)}
//         />
//         <input

//           type="number"
//           onChange={(event) => setMovieRating(event.target.value)}
//           placeholder="Movie Rating"
//         />
//         <input

//           type="text"
//           onChange={(event) => setMovieDes(event.target.value)}
//           placeholder="Movie Description"
//         />
//         <input

//           type="text"
//           onChange={(event) => setMovieDirector(event.target.value)}
//           placeholder="Movie Director"
//         />
//         <input

//           type="text"
//           onChange={(event) => setMovieStars(event.target.value)}
//           placeholder="Movie Stars/Actors"
//         />


//       </div>
//       <button className='btn button btn-outline-dark  ' onClick={addMovie}>Add Movie</button>
//     </div>
//   );
// }


// function Movie({ name, profile, rating, description, director, stars }) {
//   return (


//     <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
//       <div className="col mb-4">
//         <div className="card">
//           <img src={profile} className="card-img-top img-fluid img" alt="IMG" />
//           <div className="card-body">
//             <h5 className="card-title text-center">{name}</h5>
//             <p className="card-text"><span className="h5"> Rating : </span> <span className="pfont"> ⭐{rating}</span> </p>

//             <p className="card-text"><span className="h5"> Description: </span> <span className="pfont"> {description}</span> </p>
//             <p className="card-text"><span className="h5">  Director: </span> <span className="pfont"> {director}</span> </p>
//             <p className="card-text"><span className="h5"> Stars: </span> <span className="pfont"> {stars}</span> </p>
//             <Counter />


//           </div>
//         </div>
//       </div>

//     </div>


//   )
// }

// function Counter() {
//   const [like, setLike] = useState(0);
//   const [unlike, setunLike] = useState(0);
//   return (
//     <div>
//       <button type="button" className="btn btn1 btn-outline-success" onClick={() => setLike(like + 1)}>👍{like}</button>
//       <button type="button" className="btn btn-outline-danger" onClick={() => setunLike(unlike + 1)}>👎{unlike}</button>

//     </div>
//   );
// }

// import "./App.css";
// import { useState } from "react";
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Switch from '@mui/material/Switch';


// export default function App() {
//   const list = [
//     {
//       profile:
//         "https://www.quirkybyte.com/wp-content/uploads/2021/11/Jai_bhim_2_vkgnOcidibacj.jpeg",
//       name: "1. Jai Bhim(2021)",
//       rating: "9.3",
//       description:
//         "When a tribal man is arrested for a case of alleged theft, his wife turns to a lawer to help bring justice",
//       director: "T J Gnanavel",
//       stars: "Suriya,Lijo Mol Jose,Manikandan,Rajsha vijayan",
//     },
//     {
//       profile:
//         "https://rukminim1.flixcart.com/image/416/416/poster/h/m/z/posterskart-the-shawshank-redemption-poster-pksr01-medium-original-imaebcuhbuhfhryb.jpeg?q=70",
//       name: "2. The Shawshank Redemption",
//       rating: "9.3",
//       description:
//         "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency",
//       director: "Frank Darabont",
//       stars: "Tim Robbins,Morgan Freeman,Bob Gunton,William sadler",
//     },
//     {
//       profile:
//         "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//       name: "3. The Godfather(1972)",
//       rating: "9.2",
//       description:
//         "The aging patriarch of an organized crime dynasty in postwar Newyork city transfers control of his clandestine empire to his reluctant youngest son.",
//       director: "Fransis Ford Coppola",
//       stars: "Marlon Bardo,AI Pacino,James Caan,Diane Keaton",
//     },
//     {
//       profile:
//         "https://qph.fs.quoracdn.net/main-qimg-9e897497b05d7d1dd49bca31587ad034-pjlq",
//       name: "4. The Dark Knight(2008)",
//       rating: "9.0",
//       description:
//         "When the menace known as the joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of his ability to fight injustice.",
//       director: "Christopher Nolan",
//       stars: "Christian Bale,Heath Ledger,Aaron Echart,Michael Caine",
//     },
//     {
//       profile:
//         "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//       name: "5. The Godfather part 2(1974)",
//       rating: "9.0",
//       description:
//         "The early life of Vito coreleone in 1920s newyork city is portrayed,While his son,Michael expands his grip on the family.",
//       director: "Francis Ford Coppola",
//       stars: "AL Pacino,Robert De Niro,Robert Duvall,Diane Keaton",
//     },
//   ];
//   const [movies, setMovies] = useState(list);

//   const [movieName, setMovieName] = useState("");
//   const [moviePoster, setMoviePoster] = useState("");
//   const [movieRating, setMovieRating] = useState("");
//   const [movieDes, setMovieDes] = useState("");
//   const [moviestars, setMovieStars] = useState("");
//   const [moviedirector, setMovieDirector] = useState("");

//   const addMovie = () => {
//     const newMovie = {
//       name: movieName,
//       profile: moviePoster,
//       rating: movieRating,
//       description: movieDes,
//       stars: moviestars,
//       director: moviedirector,
//     };

//     setMovies([...movies, newMovie]);
//   };
//   return (
//     <div className="App">
//       <nav className="navbar navbar-dark bg-dark">
//         <div className="navbar-brand">
          
//           <img
//             src="https://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/imdb.png"
//             className="logo"
//             alt="logo"
//           ></img>
//           <span className="title">IMDb</span>
//         </div>
//       </nav>

//       <div className="content">
//         <h4 className="text-dark font-italic "> HELLO!</h4>
//         <p className="lead">
//           Here are IMDb "Top 5" Movies(Sorted by IMDb Rating Descending)...
//         </p>
//       </div>

//       <div className="row">
//         {movies.map((nm) => (
//           <Movie
//             name={nm.name}
//             profile={nm.profile}
//             rating={nm.rating}
//             description={nm.description}
//             director={nm.director}
//             stars={nm.stars}
//           />
//         ))}
//       </div>
//       <hr></hr>

//       <div className="content">
//         <h4 className="text-dark font-italic "> HELLO!</h4>
//         <p className="lead1">
          
//           If you want to add 6th rating movie to the list above, just visit our
//           official website
//           (https://www.imdb.com/search/title/?groups=top_250&sort=user_rating).
//           And enter the required details in the below input...<i>ThanK YoU ❣</i>
//         </p>
//       </div>

//       <div className="movie_form">
//       <TextField id="outlined-basic" label="Movie Poster(url)" variant="outlined" onChange={(event) => setMoviePoster(event.target.value)} />
//       <TextField id="outlined-basic" label="Movie Name" variant="outlined" onChange={(event) => setMovieName(event.target.value)} />
//       <TextField id="outlined-basic" label="Movie Rating" variant="outlined" onChange={(event) => setMovieRating(event.target.value)} />
//       <TextField id="outlined-basic" label="Movie Description" variant="outlined" onChange={(event) => setMovieDes(event.target.value)} />
//       <TextField id="outlined-basic" label="Movie Director" variant="outlined" onChange={(event) => setMovieDirector(event.target.value)} />
//       <TextField id="outlined-basic" label="Movie Stars/Actors" variant="outlined" onChange={(event) => setMovieStars(event.target.value)} />
     
//       <Button variant="contained" className="button" onClick={addMovie}>   Add Movie</Button>
//       </div>
    
     
//     </div>
//   );
// }

// function Movie({ name, profile, rating,description, director, stars }) {
//   return (
//     <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
//       <div className="col mb-4">
//         <div className="card">
//           <img src={profile} className="card-img-top img-fluid img" alt="IMG" />
//           <div className="card-body">
//             <h5 className="card-title text-center">{name}</h5>
//             <p className="card-text">
//               <span className="h5"> Rating : </span>
//               <span className="pfont"> ⭐{rating}</span>
//             </p>

//             <p className="card-text">
//              <Des props= {description} />
//             </p>
//             <p className="card-text">
//               <span className="h5"> Director: </span>
//               <span className="pfont"> {director}</span>
//             </p>
//             <p className="card-text">
//               <span className="h5"> Stars: </span>
//               <span className="pfont"> {stars}</span>
//             </p>
//             <Counter />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// const Des= ({props}) => {
//   const [showText, setShowText] = useState(true);
//   return (
//     <div>
      
//         <div className="toggle"> <Switch defaultChecked onClick={() => setShowText(!showText)}  /><span className="h5"> Description: </span> </div>
         
//       {showText && <p className="pfont"> {props} </p>}
   
//     </div>
//   );
// };


// function Counter() {
//   const [like, setLike] = useState(0);
//   const [unlike, setunLike] = useState(0);
//   return (
//     <div className="buttongroup">
//        <Button variant="contained" className="btn1 "
//         onClick={() => setLike(like + 1)} > 👍{like}  </Button>
//       <Button variant="outlined" color="error" className="btn"
//         onClick={() => setunLike(unlike + 1)}>
//       👎{unlike}
// </Button>

//     </div>
//   );
// }

