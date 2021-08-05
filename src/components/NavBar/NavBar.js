import { Menu, Segment, Icon, } from 'semantic-ui-react';
import './NavBar.css';
import Logo from '../../assets/images/excel_logo_white.svg'


const NavBar = () => {
    return (
        <Segment inverted>
            <Menu inverted pointing secondary>
                <img src={Logo} alt='' width="150" />
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='about'
                    />
                    <Menu.Item
                        name='contact'
                    />
                </Menu.Menu>

                <Menu.Menu position='right' icon >
                    <Menu.Item>
                        <Icon name='twitter' />
                    </Menu.Item>
                    <Menu.Item name='facebook' >
                        <Icon name='facebook f' />
                    </Menu.Item>
                    <Menu.Item name='linkedin' >
                        <Icon name='linkedin' />
                    </Menu.Item>
                    <Menu.Item name='instagram' >
                        <Icon name='instagram' />
                    </Menu.Item>

                </Menu.Menu>
            </Menu>
        </Segment>

    )
}

export default NavBar;