import './Homepage.css';
import { Grid, Icon, Image, Button, Container, ImageGroup } from 'semantic-ui-react';
import Goxl from '../../assets/images/g-goxl@2x.jpg';
import London from '../../assets/images/london@2x.jpg';
import Pilot from '../../assets/images/pilot@2x.jpg';
import Helicopter from '../../assets/images/helicopter.jpg';
import City from '../../assets/images/city.jpg';
import Work from '../../assets/images/work.jpg';
import Hero_Video from '../../assets/videos/Excel_Hero_v1.2.mp4';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
    useEffect(() => {
        Aos.init({ duration: 500 });
    }, [])
    return (<>
        <video autoPlay loop muted className='video'>
            <source src={Hero_Video} />
        </video>
        <div className="parallax" >
            <Grid padded className="hero-section" stackable>
                <Grid.Row >
                    <Grid.Column columns={1} className="hero-content">
                        <h1 data-aos='fade-up'>Precision <span>& Excellence </span> <span>in the Skies </span> </h1>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2} className='three-dots-row' >
                    <Grid.Column className='divided-column' >

                    </Grid.Column>

                </Grid.Row>
                <Grid.Row columns={2} className='midnight-blue-section' >
                    <Grid.Column data-aos='fade-up' className='paragraph-content'>
                        <p>Excel Helicopters provide charter flights from any UK. location. Whether business
                            or pleasure, helicopter charter or private helicopter hire is the most time-efficient
                            and memorable way to travel.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <h1 className='excel-header' data-aos='fade-up'>Excel Helicopter Charter</h1 >
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>

        <div className="images" >
            <Image src={Goxl} alt='' className="goxl" data-aos='fade-right' />
            <Image src={Pilot} alt='' className="pilot" verticalAlign='bottom' data-aos='fade-up' />
            <Image src={London} alt='' className="london" data-aos='fade-left' />
        </div>


        <Grid className="about-section" stackable padded >
            <Grid.Row columns={3} >
                <Grid.Column className="about-content"  >
                    <div data-aos='slide-right'>
                        <h4>Business Charter</h4>
                        <div className='inner'></div>

                        <p>Excel Charter offers a sale, cost-effective and highly convenient point-to-point travel option</p>
                        <Button>Read more</Button>
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}  >
                <Grid.Column className="about-content">
                    <div data-aos='slide-left'>
                        <h4>Private Hire</h4>
                        <div className='inner'></div>

                        <p>From short pleasure flights to large corporate events, Excel<br /> Charter have the range of helicopters and knowledge to cater for<br /> your requirements.</p>
                        <Button>Read more</Button>
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
                <Grid.Column className="about-content" columns={3}>
                    <div data-aos='slide-right'>
                        <h4>Airports Transfers </h4>
                        <div className='inner'></div>

                        <p>Excel Charter's fleet of Twin Squirrels and Augusta 109s, together with full-time pilots enable us to offer the onward helicopter transfer.</p>
                        <Button>Read more</Button>
                    </div>
                </Grid.Column>
            </Grid.Row>

        </Grid>
        <Grid className="gallery-grid">
            <Grid.Row className="gallery" >

                <Icon name="instagram" size="huge" data-aos='zoom-in' />

                <Image.Group className='gallery-images' size='medium'>

                    <Image src={Helicopter} alt='' data-aos='zoom-in' ></Image>
                    <Image src={City} alt='' data-aos='zoom-in'  ></Image>
                    <Image src={Work} alt='' data-aos='zoom-in' ></Image>
                    <Image src={Helicopter} alt='' data-aos='zoom-in'></Image>

                </Image.Group>


            </Grid.Row>
        </Grid>
    </>)
}

export default Homepage;