import React from "react";
import { Button } from "@chakra-ui/react";

export default function BurgerButton() {
  return (
    <>
      <Button
        w={"50px"}
        h={"50px"}
        bg={"white"}
        boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
        borderRadius={"100px"}
        fontSize={"30px"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="41"
          viewBox="0 0 30 31"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 21.5H23C23.55 21.5 24 21.05 24 20.5C24 19.95 23.55 19.5 23 19.5H7C6.45 19.5 6 19.95 6 20.5C6 21.05 6.45 21.5 7 21.5ZM7 16.5H23C23.55 16.5 24 16.05 24 15.5C24 14.95 23.55 14.5 23 14.5H7C6.45 14.5 6 14.95 6 15.5C6 16.05 6.45 16.5 7 16.5ZM6 10.5C6 11.05 6.45 11.5 7 11.5H23C23.55 11.5 24 11.05 24 10.5C24 9.95 23.55 9.5 23 9.5H7C6.45 9.5 6 9.95 6 10.5Z"
            fill="#C3CAD9"
          />
        </svg>
      </Button>
    </>
  );
}
