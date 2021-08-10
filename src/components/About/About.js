import Hero_Video from '../../assets/videos/Excel_Hero_v1.2.mp4';
import { Grid } from 'semantic-ui-react';
import { useEffect } from 'react';
import './About.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <>
            <video autoPlay loop muted >
                <source src={Hero_Video} />
            </video>
            <div className="parallax"  >
                <Grid padded className="hero-section" stackable>
                    <Grid.Row >
                        <Grid.Column columns={1} className="hero-bg" data-aos='fade-up'>
                            <h1>About us</h1>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        </>
    )
}

export default About;