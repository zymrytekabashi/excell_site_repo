
import { Container, Grid, Icon, Image, Form, List, Segment } from 'semantic-ui-react';
import './Footer.css';
import Logo from '../../assets/images/excel_logo_white.svg';

const Footer = () => {
    return (
        <div className='footer-container'>
            <Grid columns='equal' className='footer-grid'>
                <Grid.Row stretched>
                    <Grid.Column>
                        <Segment> <Image src={Logo} alt='' className='footer-logo' />
                        </Segment>
                        <Segment><p>Hangar 17, Stapleford Aerodrome,</p>
                            <p>Stapleford Tawney, Essex, RM4 1SJ</p></Segment>
                        <Segment className='footer-icons'>
                            <Icon name="twitter" />
                            <Icon name="facebook f" />
                            <Icon name="linkedin" />
                            <Icon name="instagram" /></Segment>
                    </Grid.Column>
                    <Grid.Column >
                        <Segment ></Segment>
                        <Segment></Segment>
                        <Segment>
                            <p>+44 01708 688110 (24 hrs)</p>
                            <p>info@excelhelicopters.co.uk</p>

                        </Segment>
                        <Segment>

                            <p>©2021 Excel Helicopters Limited. All rights reserved.</p>
                            <p>Website by Future</p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment>
                            <Form>
                                <Form.Group>
                                    <Form.Field>
                                        <label>Subscribe to our Newsletter</label>
                                        <div className="ui action input">
                                            <input type="text" className='subscribe-input' />
                                            <div className="ui button" >Subscribe</div>
                                        </div>
                                    </Form.Field>
                                </Form.Group>
                            </Form>
                        </Segment>
                        <Segment>
                            <List items={['HOME', 'ABOUT US', 'CONTACT', 'CHARTER', 'SPECIAL OPERATIONS', 'MAINTENANCE & ENGINEERING', 'SALES', 'MANAGEMENT', 'PILOT TRAAINING', 'OUR FLEET']} />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>

            </Grid>

        </div>
    )
}

export default Footer;