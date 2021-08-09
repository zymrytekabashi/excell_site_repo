import Hero_Video from '../../assets/videos/Excel_Hero_v1.2.mp4';
import { Form, FormField, Button, Segment, TextArea, Grid } from 'semantic-ui-react';
import './Contact.css';


const Contact = () => {
    return (
        <>

            <Grid className='video-container'>
                <video autoPlay loop muted >
                    <source src={Hero_Video} />
                </video>
                {/* <div className='overlay'>

                </div> */}
                <Grid.Row className='hero-bg'>


                    <h1>Contact us</h1>
                </Grid.Row>
                <Grid.Row columns={3} className='about-content' >
                    <Grid.Column>
                        <Segment>
                            <h3>Find us</h3>
                            <p>Hangar 17, Stapleford Aerodrome,</p>
                            <p>Stapleford Tawney Essex, RM4 1SJ</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <h3>Contact us</h3>
                            <p>+44 01708688110 (24 hrs)</p>
                            <p>info@excelhelicopters.co.uk</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <h3>Aoc No. Gb 2184</h3>
                            <p>VAT number: 773 6059 08</p>
                            <p>Company number: 411 0313</p>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid padded centered className='form-container'>
                <Grid.Row>
                    <Grid.Column >
                        <Form fluid>
                            <Form.Field >
                                <Form.Input placeholder='Name*' />
                            </Form.Field>
                            <Form.Field className='input-field'>
                                <Form.Input placeholder='Email*' />
                            </Form.Field>
                            <Form.Field className='input-field'>
                                <Form.Input placeholder='Contact Number' />
                            </Form.Field>
                            <Form.Field className='input-field'>
                                <TextArea placeholder="Message" />
                            </Form.Field>
                            <Button type='submit' >Send</Button>
                        </Form>
                    </Grid.Column>

                </Grid.Row>

            </Grid>

        </>
    )
}

export default Contact;