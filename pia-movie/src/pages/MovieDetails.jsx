import { useEffect, useState } from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { get } from '../utils/httpClient';
import styles from "./MovieDetails.module.css";
import Navbar from "../components/Navbar/Navbar";
import { Spinner } from '../components/Spinner';

export function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const paperStyle = {padding: '30px 20px', width:800, margin:"30px auto"}
    const headerStyle = {margin: 0}
    
    const btnStyle = {margin:'20px 0', backgroundColor: '#0B114A'}

    const [usuario, setUser] = useState({
        user: "",
        movie: "",
        reviewText: ""
    });
    const handleOnChangeInput = (e) => {
        const { value, name } = e.target;
    
        setUser({
          ...usuario,
          [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        console.log(usuario.reviewText);
    };

    useEffect(() => {
        setIsLoading(true);

        get("/movie/" + movieId).then(data =>{
            setMovie(data);
            setIsLoading(false);
        });
    }, [movieId]);

    if (isLoading){
        return <Spinner/>;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div>
            <Navbar/>
            <div className={styles.detailsContainer}>
                <img className={styles.col + " " + styles.movieImage} src={imageUrl} alt={movie.title} />
                <div className={styles.col + " " + styles.movieDetails}>
                    <p className={styles.firstItem}>
                        <strong>Title:</strong> {movie.title}
                    </p>
                    <p className={styles.firstItem}>
                        <strong>Genres:</strong>{" "}
                        {movie.genres.map(genre => genre.name).join(", ")}
                    </p>
                    <p className={styles.firstItem}>
                        <strong>Description:</strong> {movie.overview}
                    </p>
                </div>
                
            </div>

            <form >
            <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <h1 style={headerStyle}>Write your review</h1>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth name="name" margin="dense" label="Review" placeholder='Enter your review' value={usuario.reviewText} onChange={handleOnChangeInput}/>
                    <Button type="submit" style={btnStyle} size="large" variant="contained" fullWidth>Comment</Button>
                </form>
            </Paper>
        </Grid>
            </form>
        </div>
    );
}