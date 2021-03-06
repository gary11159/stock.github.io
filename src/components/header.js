import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { setTabName } from '../actions/app';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Nav } from 'react-bootstrap';
import InfoImg from '../public/info.png';
import SkillImg from '../public/skill.png';
import ExperienceImg from '../public/experience.png';
import './header.css';
import $ from 'jquery';

function Header(props) {
    const [isFirstIn, setIsFirstIn] = React.useState(true);

    React.useEffect(() => {
        if (isFirstIn) {
            setIsFirstIn(false);
            $(function () {
                var sideslider = $('[data-toggle=collapse-side]');
                var get_sidebar = sideslider.attr('data-target-sidebar');
                var get_content = sideslider.attr('data-target-content');
                sideslider.click(function (event) {
                    $(get_sidebar).toggleClass('in');
                    $(get_content).toggleClass('out');
                });
            });
        }
    });
    function scrollHandle(e, type) {
        let target = document.getElementById(type);
        if (window.scrollTo) {
            e.preventDefault()
            if (target !== undefined && target !== null) {
                window.scrollTo({ 'behavior': 'smooth', 'top': target.offsetTop });
            }
        }
    }

    return (
        <>
            <div className="header">
                {props.device === "PC" ?
                    <Container>
                        <Navbar>
                            <Navbar.Brand><span className="fs32">Gary's Resume</span><br />gary11159@gmail.com</Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Nav.Link href="#info" className="hvr-wobble-horizontal" onClick={(e) => scrollHandle(e, 'info')}><img src={InfoImg} alt="infoIcon" /><span className="black bold"> 資訊</span></Nav.Link>
                                <Nav.Link href="#skill" className="hvr-wobble-horizontal" onClick={(e) => scrollHandle(e, 'skill')}><img src={SkillImg} alt="skill" /><span className="black bold"> 技能</span></Nav.Link>
                                <Nav.Link href="#experience" className="hvr-wobble-horizontal" onClick={(e) => scrollHandle(e, 'experience')}><img src={ExperienceImg} alt="experience" /><span className="black bold"> 經驗</span></Nav.Link>
                            </Navbar.Collapse>
                        </Navbar>
                    </Container> :
                    <Container style={{ textAlign: 'center' }}>
                        <span className="fs24">
                            Gary's Resume
                        </span>
                    </Container>
                }
            </div>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        ownProps,
        ingTabName: state.statusReducer.ingTabName,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    setTabName: (val) => dispatch(setTabName(val)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);