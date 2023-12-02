import { useState } from 'react'
import styled from "styled-components";
import Pricing from "./components/Pricing";
import './App.css'

function App() {
  return (
    <MainContainer>
      <div className="pricing-component">
        <Pricing
          data={[
            { text: "Single User", value: true },
            { text: "50GB Storage", value: true },
            { text: "Unlimited Public Project", value: true },
            { text: "Community Access", value: true },
            { text: "Unlimited Privite Project", value: false },
            { text: "Dedicated Phone Support", value: false },
            { text: "Free Subdomain", value:false },
            { text: "Monthly Sales Report", value: false },
          ]}
          price={0}
          duration="y"
          currency="$"
          buttonContent="Get Started"
          subTitle="Great for starters"
          priceText="Discover how to create your first projects."
          headerText="free"
        />
      </div>
      <div className="pricing-component">
        <Pricing
          data={[
            { text: "Single User", value: true },
            { text: "50GB Storage", value: true },
            { text: "Unlimited Public Project", value: true },
            { text: "Community Access", value: true },
            { text: "Unlimited Privite Project", value: true },
            { text: "Dedicated Phone Support", value: true },
            { text: "Free Subdomain", value:true },
            { text: "Monthly Sales Report", value: false },
          ]}
          price={9}
          duration="m"
          background="linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
          shadow="#96e6a1"
          currency="$"
          buttonContent="Get Started"
          subTitle="For Planned Projects"
          priceText="Bring your designs to the next level and export them."
          headerText="plus"
        />
      </div>
      <div className="pricing-component">
        <Pricing
          data={[
            { text: "Single User", value: true },
            { text: "50GB Storage", value: true },
            { text: "Unlimited Public Project", value: true },
            { text: "Community Access", value: true },
            { text: "Unlimited Privite Project", value: true},
            { text: "Dedicated Phone Support", value: true },
            { text: "Free Subdomain", value:true },
            { text: "Monthly Sales Report", value: true},
          ]}
          price={49}
          duration="y"
          background="linear-gradient(to left, #ff0844 0%, #ffb199 100%);"
          shadow="#ffb199"
          currency="$"
          buttonContent="Get Started"
          subTitle="For Prodessional Use"
          priceText="Enjoy limitless use with interactive export options."
          headerText="pro"
        />
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f1ff;

  @media screen and (max-width: 970px) {
    height: 100%;
    flex-direction: column;
    .pricing-component {
      margin: 2rem 0;
    }
  }
`;
  


export default App
