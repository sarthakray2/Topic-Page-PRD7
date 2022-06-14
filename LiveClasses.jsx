import styled from "styled-components";
import React from "react";
import { Icon } from '@iconify/react';

const NavBarPRD7 = () => {

  
  return (
    <div>
        <Box1>
          <Text4>Course : 001 <br></br> Batch : Achiever</Text4>
          <Heading2>Engineering Mathematics</Heading2>
          <div style={{display:'flex', flexDirection:'row'}}>
          <Text1>Exam Target: </Text1>
          <Text2>GATE</Text2>
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
          <Text1>Instructor: </Text1>
          <Text2>Shubrodip Chatterjee</Text2>
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
          <Text1>Syllabus:</Text1>
          <Text2>Sic de isto et tutius perducit ad actum ipsum, ut si dico “Ego autem vadam lavari, ut mens mea in statu naturae conformior.” Et similiter circa alias res. Et sic, si contingit ex per se lavantem, </Text2>
          </div>
          
        </Box1>
        <Heading1>Today’s Topic : Lorem Ipsum</Heading1>
        <Box2></Box2>
        <Box3>
          <Heading3>Meeting Details :</Heading3>
          <Text3>Date : 13th March, 2022 </Text3>
          <Text3>Time : 5pm to 6pm</Text3>
          <div style={{display:'flex', flexDirection:'row'}}>
          <Heading4>Platform:  <Icon icon="logos:google-meet" inline={true} /></Heading4>
          <Link><a href="https://meet.google.com">Joining link: https://meet.google.com</a></Link>
          
          </div>
        </Box3>
    </div>

  );
};
const Box1 = styled.div`
  width: 30vw;
  height: 19vw;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  background: #0B6E4F;
  position: relative;
  margin: 4vw 2.66vw 0px 2vw;
  padding-top: 1.5vw;
  border-radius: 10px;
  @media screen and (max-width: 1100px) {
    width: 55vw;
    height: 35vw;
    }
 
  @media screen and (max-width: 500px) {
    width: 55vw;
    height: 45vw;
    }

  @media screen and (max-width: 300px) {
    width: 55vw;
    height: 65vw;
    }
`;

const Box2 = styled.div`
  width: 30vw;
  height: 17vw;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  background-image: url('/images/images/scientist.png');
  position: relative;
  margin: 1vw 2.66vw 0px 2vw;
  padding-top: 1.5vw;
  border-radius: 10px;
  @media screen and (max-width: 1100px) {
    width: 55vw;
    height: 35vw;
    }
 
  @media screen and (max-width: 500px) {
    width: 55vw;
    height: 45vw;
    }

  @media screen and (max-width: 300px) {
    width: 55vw;
    height: 55vw;
    }
`;

const Box3 = styled.div`
  width: 30vw;
  height: 10vw;
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.1));
  background-color : #E9F0EC;
  position: relative;
  margin: 2vw 2.66vw 0px 2vw;
  padding-top: 1.5vw;
  border-radius: 10px;
  @media screen and (max-width: 1100px) {
    width: 55vw;
    height: 20vw;
    }
 
  @media screen and (max-width: 500px) {
    width: 55vw;
    height: 30vw;
    }

  @media screen and (max-width: 300px) {
    width: 55vw;
    height: 35vw;
    }
`;
 

const Heading1 = styled.div`
  color: #0B6E4F;
  font-family: 'Roboto';
  text-align:left;
  font-weight: 700;
  font-size: 22px;
  margin: 1vw 2.66vw 0px 2vw;
  @media screen and (max-width: 1100px) {
    font-size: 20px;
    
    }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    
    }
  @media screen and (max-width: 300px) {
    font-size: 12px;
  }
`; 

const Heading2 = styled.div`
  color: #FFFFFF;
  font-family: 'Roboto';
  text-align:left;
  font-weight: 600;
  font-size: 24px;
  margin: 0.5vw 2.66vw 1vw 2vw;
  @media screen and (max-width: 1100px) {
    font-size: 20px;
    
    }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    
    }
  @media screen and (max-width: 300px) {
    font-size: 12px;
  }
`;

const Heading3 = styled.div`
  color: #0B6E4F;
  font-family: 'Roboto';
  text-align:left;
  font-weight: 600;
  font-size: 16px;
  margin: 0vw 2.66vw 0.8vw 2vw;
  @media screen and (max-width: 1100px) {
    font-size: 14px;
    
    }
  @media screen and (max-width: 500px) {
    font-size: 12px;
    
    }
  @media screen and (max-width: 300px) {
    font-size: 10px;
  }
`;

const Heading4 = styled.div`
  color: #474A50;
  font-family: 'Roboto';
  text-align:left;
  font-weight: 600;
  font-size: 14px;
  margin: 1vw 1vw 0.8vw 2vw;
  @media screen and (max-width: 1100px) {
    font-size: 13px;
    
    }
  @media screen and (max-width: 500px) {
    font-size: 10px;
    }
  @media screen and (max-width: 300px) {
    font-size: 9px;
  }
`;

const Text1 = styled.div`
  color: #FFFFFF;
  font-family: 'Roboto';
  text-align:left;
  font-weight: 500;
  font-size: 14px;
  margin: 0vw 0 0.5vw 2vw;
  @media screen and (max-width: 1100px) {
    font-size: 13px;
   
    }
  @media screen and (max-width: 500px) {
    font-size: 10px;
    
    }
  @media screen and (max-width: 300px) {
    font-size: 9px;
  }
`;

const Text2 = styled.div`
  color: #FFFFFF;
  font-family: 'Roboto';
  text-align: justify;
  font-weight: 400;
  font-size: 13px;
  margin: 0vw 2.66vw 0.5vw 0.5vw;
  @media screen and (max-width: 1100px) {
    font-size: 12px;
    
    }
  @media screen and (max-width: 500px) {
    font-size: 9px;
    
    }
  @media screen and (max-width: 300px) {
    font-size: 8px;
  }
`;

const Text3 = styled.div`
  color: #474A50;
  font-family: 'Roboto';
  text-align: justify;
  font-weight: 400;
  font-size: 13px;
  margin: 0vw 2.66vw 0.1vw 2vw;
  @media screen and (max-width: 1100px) {
    font-size: 12px;
    
    }
  @media screen and (max-width: 500px) {
    font-size: 9px;
    
    }
  @media screen and (max-width: 300px) {
    font-size: 8px;
  }
`;

const Text4 = styled.div`
  text-align:right;
  right: 0vw;
  color: #FFFFFF;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;
  margin: 0vw 2vw 0vw 0vw;
  @media screen and (max-width: 1100px) {
    
    font-size: 10px;
    }
  @media screen and (max-width: 500px) {
    font-size: 8px;
    
    }
  @media screen and (max-width: 300px) {
    font-size: 7px;
  }
`;

const Link = styled.div`
  color: #3362AB;
  font-family: 'Roboto';
  text-align:left;
  font-weight: 400;
  font-size: 14px;
  margin: 1vw 2.66vw 0.8vw 0vw;
  text-decoration: underline;
  @media screen and (max-width: 1100px) {
    
    
    }
  @media screen and (max-width: 500px) {
    font-size: 9px;
    
    }
  @media screen and (max-width: 300px) {
    font-size: 8px;
  }
`;
 



export default NavBarPRD7;
