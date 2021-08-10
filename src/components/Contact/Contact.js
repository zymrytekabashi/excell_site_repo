import Hero_Video from '../../assets/videos/Excel_Hero_v1.2.mp4';
import { Form, Button, Segment, TextArea, Grid } from 'semantic-ui-react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Contact.css';


const Contact = () => {
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
                        <Grid.Column columns={1} className="hero-bg">
                            <h1 data-aos='fade-up'>Contact us</h1>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3} className='about-content' >
                        <Grid.Column>
                            <Segment data-aos='zoom-in'>
                                <h4 className='header-4'>Find us</h4>
                                <p>Hangar 17, Stapleford Aerodrome,</p>
                                <p>Stapleford Tawney Essex, RM4 1SJ</p>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment data-aos='zoom-in'>
                                <h4 className='header-4' >Contact us</h4>
                                <p>+44 01708688110 (24 hrs)</p>
                                <p>info@excelhelicopters.co.uk</p>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment data-aos='zoom-in'>
                                <h4 className='header-4'>Aoc No. Gb 2184</h4>
                                <p>VAT number: 773 6059 08</p>
                                <p>Company number: 411 0313</p>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

            <Grid padded centered className='form-container'>
                <Grid.Row>
                    <Grid.Column >
                        <Form fluid>
                            <Form.Field data-aos='slide-up'>
                                <Form.Input placeholder='Name*' />
                            </Form.Field>
                            <Form.Field className='input-field' data-aos='slide-up'>
                                <Form.Input placeholder='Email*' />
                            </Form.Field>
                            <Form.Field className='input-field' data-aos='slide-up'>
                                <Form.Input placeholder='Contact Number' />
                            </Form.Field>
                            <Form.Field className='input-field' data-aos='slide-up'>
                                <TextArea placeholder="Message" />
                            </Form.Field>
                            <Button type='submit' data-aos='slide-up' >Send</Button>
                        </Form>
                    </Grid.Column>

                </Grid.Row>

            </Grid>

        </>
    )
}

export default Contact;