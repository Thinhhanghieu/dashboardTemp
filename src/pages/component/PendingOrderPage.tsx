import React from 'react';
import Button from '../../components/button/Button';
type Props = {};

const PendingOrderPage = (props: Props) => {
  return (
    <Button 
    border="none"
    color="#fdffc4"
    height = "200px"
    onClick={() => console.log("You clicked on the pink circle!")}
    radius = "50%"
    width = "200px"
    children = "I'm a pink circle!"
  />



  );
};

export default PendingOrderPage;
