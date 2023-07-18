import React, { ReactNode } from "react";
import { Button } from "@chakra-ui/react";
type ButtonIconProps = {
  children: ReactNode;
};
export default function ButtonIcon({ children }: ButtonIconProps) {
  return (
    <>
      <Button
        paddingInline={"10px"}
        paddingBlock={"25px"}
        bg={"white"}
        boxShadow={"0px 2px 5px 0px rgba(38, 51, 77, 0.03)"}
        borderRadius={"50%"}
      >
        {children}
      </Button>
    </>
  );
}
