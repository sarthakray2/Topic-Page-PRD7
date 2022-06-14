import styled from "styled-components";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const NavBarPRD7 = () => {
  const classes = useStyles();
  // Active Button State
  const [active, setActive] = React.useState(1);
  const SetView = (active) => {
    setActive(active);
  };

  
  return (
    <div>
        <SideNavBar>
        <Button1 className={(active===1 ? `${classes.activeButton1}` : '')} onClick={() => SetView(1)}>Live Classes</Button1>
        <Button1 className={(active===2 ? `${classes.activeButton1}` : '')} onClick={() => SetView(2)}>Recorded Lecture</Button1>
        <Button1 className={(active===3 ? `${classes.activeButton1}` : '')} onClick={() => SetView(3)}>Notes</Button1>
        <Button1 className={(active===4 ? `${classes.activeButton1}` : '')} onClick={() => SetView(4)}>Join the Discussion</Button1>
        </SideNavBar>
    </div>

  );
};
const SideNavBar = styled.div`
  width: 15vw;
  height: 15vw;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  background: #E9F0EF;
  border-radius: 12px;
  position: relative;
  margin: 4vw 2.66vw 0px 2vw;
  padding-top: 1.5vw;
  @media screen and (max-width: 1000px) {
    width: 30vw;
    height: 30vw;
    }

  @media screen and (max-width: 700px) {
    width: 25vw;
    height: 30vw;
    }
 
  @media screen and (max-width: 500px) {
    width: 30vw;
    height: 30vw;
    }
`;
 

const Button1 = styled.button`
  width: 13vw;
  height: 2vw;
  background-color: #FFFFFF;
  color: #5F5F5F;
  font-family: 'Roboto';
  text-align:left;
  font-weight: 700;
  font-size: 10px;
  border-radius: 6px;
  margin: 0.66vw 0.66vw 0px 1.2vw;
  padding: 0.1vw 0.3vw 0.1vw 0.5vw;
  display: flex;
  flex-direction: 'row';
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 25vw;
    height: 4vw;
    margin: 2vw 0.66vw 0px 1.2vw;
    font-size: 14px;
    }
  @media screen and (max-width: 700px) {
    width: 20vw;
    height: 4vw;
    margin: 2vw 0.66vw 0px 1.2vw;
    }
  @media screen and (max-width: 500px) {
    width: 27vw;
    height: 4vw;
    margin: 2vw 0.66vw 0px 1.2vw;
    font-size: 9px;
    }
  @media screen and (max-width: 300px) {
    font-size: 8px;
  }
`; 


const useStyles = makeStyles(() => ({
  activeButton1: {
    fontWeight: '600 !important',
    borderLeft: '0.5vw solid green !important',
  },
}));


 



export default NavBarPRD7;
